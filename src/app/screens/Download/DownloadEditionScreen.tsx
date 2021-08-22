import * as React from 'react';
import { EvaProp } from '@ui-kitten/components';
import { Dimensions, SafeAreaView, ViewStyle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withStyles } from '@ui-kitten/components';
import { SingleScreen } from './SingleScreen';
import DynamicTabView from 'react-native-dynamic-tab-view-test';
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
		editionNames.forEach((name) => {
			routes.push({
				key: name,
				title: name,
			});
		});
	};

	const _renderItem = (item, index) => {
		return <SingleScreen {...props} key={item['key']} responseJson={responseJson[index]} />;
	};
	const onChangeTab = (index) => {};
	return (
		<TopTab.Navigator lazy={true} lazyPreloadDistance={3}>
			{editionNames.map((subCategory) => (
				<TopTab.Screen
					key={subCategory.key}
					name={subCategory.title}
					component={_renderItem}
					options={{ tabBarLabel: subCategory.title }}
					initialParams={{ subCategory }}
				/>
			))}
		</TopTab.Navigator>
	);
};

export const DownloadEditionScreen = withStyles(DownloadEditionScreenThemed, (theme) => ({}));
