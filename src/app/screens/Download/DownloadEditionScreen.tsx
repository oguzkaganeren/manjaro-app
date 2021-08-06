import * as React from 'react';
import { EvaProp } from '@ui-kitten/components';
import { Dimensions, SafeAreaView, ViewStyle } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { SingleScreen } from './SingleScreen';
import DynamicTabView from "react-native-dynamic-tab-view-test";
import globalStyle from './../../theme/GlobalStyle'
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
		containerStyle={[globalStyle.container, style]}
		headerBackgroundColor={'#35BF5C'}
		onChangeTab={onChangeTab}
		headerUnderlayColor={'white'}
	/>;
};

export const DownloadEditionScreen = withStyles(DownloadEditionScreenThemed, (theme) => ({

}));
