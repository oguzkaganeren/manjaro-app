import * as React from 'react';
import { EvaProp, Layout, Spinner, useTheme, withStyles } from '@ui-kitten/components';
import { Dimensions, SafeAreaView, ViewStyle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SingleScreen } from './SingleScreen';
import globalStyle from './../../theme/GlobalStyle';
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
	const theme = useTheme();
	const [editionNames, setEditionNames] = React.useState([]);
	const TopTab = createMaterialTopTabNavigator();
	React.useEffect(() => {
		getEditionNames();
		getRoutes();
	}, []);
	function getEditionNames() {
		for (let index = 0; index < responseJson.length; index++) {
			editionNames.push(responseJson[index].name);
		}
	}
	const getRoutes = () => {
		let tempRoutes = [];
		editionNames.forEach((name) => {
			tempRoutes.push({ key: name, title: name });
		});
		setRoutes([...routes, ...tempRoutes]);
	};
	const tabnavigatorRender = routes.map((subCategory, index) => (
		<TopTab.Screen
			key={subCategory.key}
			name={subCategory.title}
			options={{ tabBarLabel: subCategory.title }}
			initialParams={{ subCategory }}
		>
			{(props) => <SingleScreen {...props} key={subCategory['key']} responseJson={responseJson[index]} />}
		</TopTab.Screen>
	));
	const PlaceHolderLoading = () => (
		<Layout style={[globalStyle.container, { justifyContent: 'center', alignItems: 'center' }]}>
			<Spinner />
		</Layout>
	);
	if (routes.length != 0) {
		return (
			<TopTab.Navigator
				screenOptions={{
					tabBarLabelStyle: { fontFamily: 'ComfortaaRegular', color: '#fff' },
					tabBarStyle: { backgroundColor: theme['color-primary-default'] },
					tabBarIndicatorStyle: {
						backgroundColor: '#fff',
					},
					lazy: true,
					swipeEnabled: false,
					lazyPlaceholder: () => <PlaceHolderLoading />,
					tabBarScrollEnabled: true,
				}}
			>
				{tabnavigatorRender}
			</TopTab.Navigator>
		);
	} else {
		return <PlaceHolderLoading />;
	}
};

export const DownloadEditionScreen = withStyles(DownloadEditionScreenThemed, (theme) => ({}));
