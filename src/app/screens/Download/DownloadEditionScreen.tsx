import * as React from 'react';
import { EvaProp } from '@ui-kitten/components';
import { Dimensions, SafeAreaView, ViewStyle } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { SingleScreen } from './SingleScreen';
import DynamicTabView from "react-native-dynamic-tab-view-test";
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
	React.useEffect(() => {

		getEditionNames();
		getRoutes();

	}, [])
	function getEditionNames() {

		for (let index = 0; index < responseJson.length; index++) {
			editionNames.push(responseJson[index].name)
		}
	}
	const getRoutes = () => {
		editionNames.forEach(name => {
			routes.push({
				key: name,
				title: name
			})
		})
	}

	const _renderItem = (item, index) => {
		return (
			<SingleScreen
				{...props}
				key={item["key"]}
				responseJson={responseJson[index]}
			/>
		);
	};
	const onChangeTab = index => { };
	return <DynamicTabView
		data={routes}
		renderTab={_renderItem}
		defaultIndex={index}
		containerStyle={[eva.style!.container, style]}
		headerBackgroundColor={'#35BF5C'}
		onChangeTab={onChangeTab}
		headerUnderlayColor={'white'}
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
	subTabBarHeader: {

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
