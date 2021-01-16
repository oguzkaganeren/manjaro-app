import * as React from 'react';
import { EvaProp } from '@ui-kitten/components';
import { Dimensions, SafeAreaView, ViewStyle } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { SingleScreen } from './SingleScreen';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
export interface HomeProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
	responseJson: JSON;
}

const DownloadEditionScreenThemed: React.FC<HomeProps> = (props) => {
	const { eva, style, responseJson, ...restProps } = props;
	const [index, setIndex] = React.useState(0);
	const [routes, setRoutes] = React.useState([]);
	const [editionNames, setEditionNames] = React.useState([]);
	const [scenes, setScenes] = React.useState([]) as any;
	const [sceneMap, setSceneMap] = React.useState({});
	const initialLayout = { width: Dimensions.get('window').width };

	React.useEffect(() => {
		getEditionNames();
		getRoutes();
		getScenes();
		getSceneMap()
	}, [])
	function getEditionNames() {
		for (let index = 0; index < responseJson.length; index++) {
			editionNames.push(responseJson[index].name)
		}
	}
	const getScenes = () => {
		editionNames.forEach((name, index) => {
			scenes.push(
				() => (<SingleScreen
					key={index}
					route={props.route}
					navigation={props.navigation}
					eva={props.eva}
					style={props.style}
					responseJson={responseJson[index]}
				/>)
			)
		})
	}
	const getRoutes = () => {
		editionNames.forEach(name => {
			routes.push({
				key: name,
				title: name
			})
		})
	}

	const getSceneMap = () => {
		routes.forEach((route, index) => {
			sceneMap[route.key] = scenes[index]
		})
	}
	const renderScene = SceneMap(sceneMap);

	const renderTabBar = (props) => (
		<TabBar
			{...props}
			scrollEnabled={true}
			indicatorStyle={{ backgroundColor: 'white', height: 5, borderRadius: 10 }}
		/>
	);
	return <TabView
		navigationState={{ index, routes }}
		renderTabBar={renderTabBar}
		renderScene={renderScene}
		tabBarPosition='bottom'
		lazy={true}
		onIndexChange={setIndex}
		initialLayout={initialLayout}
	/>;
};

export const DownloadEditionScreen = withStyles(DownloadEditionScreenThemed, (theme) => ({
	container: {
		flex: 1,
	},
	tabContainer: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height - Dimensions.get('window').height / 6,
	},
	sideContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	sharp: {
		color: theme['color-primary-500'],
		paddingRight: 3,
	},
	description: {
		backgroundColor: 'rgba(53, 191, 92, 0.1)',
		marginTop: 10,
		marginHorizontal: 15,
		padding: 20,
	},
	logo: {
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		padding: 20,
	},
	download: {
		marginHorizontal: 15,
	},
	learnMore: {
		marginHorizontal: 15,
	},
}));
