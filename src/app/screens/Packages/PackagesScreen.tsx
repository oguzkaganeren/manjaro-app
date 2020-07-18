import * as React from 'react';
import { Layout, Tab, TabView, Text, Icon } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withStyles } from '@ui-kitten/components';
export interface PackagesProps {
	navigation: any;
	route: any;
}

const PackagesScreenThemed: React.FC<PackagesProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const MirrorsIcon = (props) => <Icon {...props} name="flip-outline" />;
	const DiscoverIcon = (props) => <Icon {...props} name="cube-outline" />;
	const BranchIcon = (props) => <Icon {...props} name="shuffle-2-outline" />;
	const TopTab = createMaterialTopTabNavigator();
	const TopTabBar = ({ navigation, state }) => {
		const onSelect = (index) => {
			navigation.navigate(state.routeNames[index]);
		};

		return (
			<SafeAreaView>
				<TabView selectedIndex={state.index} indicatorStyle={{ backgroundColor: '#ffaa00' }} onSelect={onSelect}>
					<Tab icon={MirrorsIcon} title="Mirrors" />
					<Tab icon={DiscoverIcon} title="Discover Software" />
					<Tab icon={BranchIcon} title="Branch Compare" />
				</TabView>
			</SafeAreaView>
		);
	};
	return (
		<Layout style={[eva.style.container, style]}>
			<TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
				<TopTab.Screen name="Team" component={TeamScreen} />
				<TopTab.Screen name="Linux" component={LinuxScreen} />
			</TopTab.Navigator>
		</Layout>
	);
};

export const PackagesScreen = withStyles(PackagesScreenThemed, (theme) => ({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	icon: {
		width: 16,
		height: 16,
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
