import * as React from 'react';
import { ViewStyle, Text, View } from 'react-native';
import { Layout, Tab, TabView, EvaProp, Icon, withStyles, IconProps, Spinner } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DownloadEditionScreen } from './DownloadEditionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useFetch } from '../../hooks/JsonFetcher';
export interface HomeProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const DownloadScreenThemed: React.FC<HomeProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const downloadJson = useFetch('https://manjaro.org/download/index.json', {});
	const OfficialIcon = (props: IconProps) => <Icon {...props} name="paper-plane-outline" />;
	const CommunityIcon = (props: IconProps) => <Icon {...props} name="people-outline" />;
	const ARMIcon = (props: IconProps) => <Icon {...props} name="smartphone-outline" />;
	const DevelopmentIcon = (props: IconProps) => <Icon {...props} name="code-outline" />;

	const TopTab = createMaterialTopTabNavigator();
	const TopTabBar = ({ navigation, state }) => {
		const onSelect = (index) => {
			navigation.navigate(state.routeNames[index]);
		};
		return (
			<TabView selectedIndex={state.index} indicatorStyle={{ backgroundColor: '#ffaa00' }} onSelect={onSelect}>
				<Tab icon={OfficialIcon} title="Official" />
				<Tab icon={CommunityIcon} title="Community" />
				<Tab icon={ARMIcon} title="ARM" />
				<Tab icon={DevelopmentIcon} title="Development" />
			</TabView>
		);
	};
	const Official = props => (
		<DownloadEditionScreen key="Official" responseJson={downloadJson.response!.Official} {...props} />
	);
	const Community = props => (
		<DownloadEditionScreen key="Community" responseJson={downloadJson.response!.Community} {...props} />
	);
	const ARM = props => (
		<DownloadEditionScreen key="ARM" responseJson={downloadJson.response!.ARM} {...props} />
	);
	const Development = props => (
		<DownloadEditionScreen key="Development" responseJson={downloadJson.response!.Development} {...props} />
	);
	return (
		<NavigationContainer independent={true} >

			{downloadJson.response ? <TopTab.Navigator
				lazy={true}
				swipeEnabled={false}
				lazyPreloadDistance={2}
				tabBarOptions={{ scrollEnabled: false }}
				tabBar={TopTabBar}
			><TopTab.Screen name="Official" component={Official} />
				<TopTab.Screen name="Community" component={Community} />
				<TopTab.Screen name="ARM" component={ARM} />
				<TopTab.Screen name="Development" component={Development} /></TopTab.Navigator> : <Layout style={[eva.style!.container, style]}><Spinner /></Layout>}


		</NavigationContainer>
	);
};

export const DownloadScreen = withStyles(DownloadScreenThemed, (theme) => ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	download: {
		marginHorizontal: 15,
	},
}));
