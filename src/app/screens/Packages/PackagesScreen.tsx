import * as React from 'react';
import { Layout, Tab, TabView, Text, Icon, EvaProp, IconProps } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import { SafeAreaView, ViewStyle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BranchScreen } from './BranchScreen';
import { DiscoverScreen } from './DiscoverScreen';
import { MirrorsScreen } from './MirrorsScreen';

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
		<Layout style={[eva.style!.container, style]}>
			<TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
				<TopTab.Screen name="Mirrors" component={MirrorsScreen} />
				<TopTab.Screen name="Discover" component={DiscoverScreen} />
				<TopTab.Screen name="Branch" component={BranchScreen} />
			</TopTab.Navigator>
		</Layout>
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
