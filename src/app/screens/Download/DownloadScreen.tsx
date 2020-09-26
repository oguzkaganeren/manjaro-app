import * as React from 'react';
import { Layout, Tab, TabView, Text, Icon } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OfficialScreen } from './Official/OfficialScreen';
import { CommunityScreen } from './Community/CommunityScreen';
import { ARMScreen } from './ARM/ARMScreen';
import { DevelopmentScreen } from './Development/DevelopementScreen';
export interface HomeProps {
	navigation: any;
	route: any;
}

const DownloadScreenThemed: React.FC<HomeProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const OfficialIcon = (props) => <Icon {...props} name="paper-plane-outline" />;
	const CommunityIcon = (props) => <Icon {...props} name="people-outline" />;
	const ARMIcon = (props) => <Icon {...props} name="smartphone-outline" />;
	const DevelopmentIcon = (props) => <Icon {...props} name="code-outline" />;
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const TopTab = createMaterialTopTabNavigator();
	const TopTabBar = ({ navigation, state }) => {
		console.log(state.routeNames);
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
		<Layout style={[eva.style.container, style]}>
			<TopTab.Navigator
				swipeEnabled={false}
				tabBarOptions={{ scrollEnabled: false }}
				lazy={true}
				tabBar={(props) => <TopTabBar {...props} />}
			>
				<TopTab.Screen name="Offical" component={OfficialScreen} />
				<TopTab.Screen name="Community" component={CommunityScreen} />
				<TopTab.Screen name="ARM" component={ARMScreen} />
				<TopTab.Screen name="Development" component={DevelopmentScreen} />
			</TopTab.Navigator>
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
