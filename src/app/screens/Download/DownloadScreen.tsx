import * as React from 'react';
import { ViewStyle } from 'react-native';
import { Layout, Tab, TabView, EvaProp, Icon, withStyles, IconProps, Spinner } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DownloadEditionScreen } from './DownloadEditionScreen';
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
	return (
		<Layout style={[eva.style!.container, style]}>

			{downloadJson.response ? <TopTab.Navigator
				swipeEnabled={false}
				lazy={true}
				tabBarOptions={{ scrollEnabled: false }}
				tabBar={(props) => <TopTabBar {...props} />}
			><TopTab.Screen name="Official" component={() => <DownloadEditionScreen
				eva={props.eva}
				style={props.style}
				navigation={props.navigation}
				route={props.route}
				responseJson={downloadJson.response!.Official}
			/>} />
				<TopTab.Screen name="Community" component={() => <DownloadEditionScreen
					eva={props.eva}
					style={props.style}
					navigation={props.navigation}
					route={props.route}
					responseJson={downloadJson.response!.Community}
				/>} />
				<TopTab.Screen name="ARM" component={() => <DownloadEditionScreen
					eva={props.eva}
					style={props.style}
					navigation={props.navigation}
					route={props.route}
					responseJson={downloadJson.response!.ARM}
				/>} />
				<TopTab.Screen name="Development" component={() => <DownloadEditionScreen
					eva={props.eva}
					style={props.style}
					navigation={props.navigation}
					route={props.route}
					responseJson={downloadJson.response!.Development}
				/>} /></TopTab.Navigator> : <Spinner />}


		</Layout>
	);
};

export const DownloadScreen = withStyles(DownloadScreenThemed, (theme) => ({
	container: {
		flex: 1,
	},
	tabContainer: {
		justifyContent: 'center',
		alignItems: 'center',
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
