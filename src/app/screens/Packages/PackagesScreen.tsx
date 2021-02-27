import * as React from 'react';
import { Layout, Tab, TabView, Text, Icon, EvaProp, IconProps } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import { SafeAreaView, ViewStyle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BranchScreen } from './BranchScreen';
import { DiscoverScreen } from './DiscoverScreen';
import { MirrorsScreen } from './MirrorsScreen';
import { NavigationContainer } from '@react-navigation/native';
export interface AboutProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const PackagesScreenThemed: React.FC<AboutProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const MirrorsIcon = (props: IconProps) => <Icon {...props} name="flip-outline" />;
	const DiscoverIcon = (props: IconProps) => <Icon {...props} name="cube-outline" />;
	const BranchIcon = (props: IconProps) => <Icon {...props} name="shuffle-2-outline" />;
	const [subTabIndex, setSubTabIndex] = React.useState(0);
	const TopTab = createMaterialTopTabNavigator();
	const X64Icon = (props: IconProps) => <Icon {...props} name="monitor-outline" />;
	const ARMIcon = (props: IconProps) => <Icon {...props} name="smartphone-outline" />;
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
	const SubTabBar = () => (

		<TabView selectedIndex={subTabIndex} indicatorStyle={{ backgroundColor: '#ffaa00' }} onSelect={(index) => setSubTabIndex(index)}>
			<Tab icon={X64Icon} title="X64" />
			<Tab icon={ARMIcon} title="ARM" />
		</TabView>
	)
	const BranchScreenWithSubBar = () => (
		<Layout>
			<SubTabBar />
			<BranchScreen tabIndex={subTabIndex} {...props} />
		</Layout>
	)
	return (
		<NavigationContainer independent={true} >
			<TopTab.Navigator lazy swipeEnabled={false}
				lazyPreloadDistance={2}
				tabBarOptions={{ scrollEnabled: false }} tabBar={TopTabBar}>
				<TopTab.Screen name="Mirrors" component={MirrorsScreen} />
				<TopTab.Screen name="Discover" component={DiscoverScreen} />
				<TopTab.Screen name="Branch" component={BranchScreenWithSubBar} />
			</TopTab.Navigator>
		</NavigationContainer>
	);
};

export const PackagesScreen = withStyles(PackagesScreenThemed, (theme) => ({
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
