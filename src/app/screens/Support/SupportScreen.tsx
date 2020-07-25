import * as React from 'react';
import { Layout, Tab, TabView, Text, Icon } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FirstStepsScreen } from './FirstStepsScreen';

export interface SupportProps {
	navigation: any;
	route: any;
}

const SupportScreenThemed: React.FC<SupportProps> = (props) => {
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
					<Tab icon={MirrorsIcon} title="First Steps" />
					<Tab icon={DiscoverIcon} title="Common Problems" />
					<Tab icon={BranchIcon} title="User Guide" />
				</TabView>
			</SafeAreaView>
		);
	};
	return (
		<Layout style={[eva.style.container, style]}>
			<TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
				<TopTab.Screen name="Mirrors" component={FirstStepsScreen} />
				<TopTab.Screen name="Discover" component={FirstStepsScreen} />
				<TopTab.Screen name="Branch" component={FirstStepsScreen} />
			</TopTab.Navigator>
		</Layout>
	);
};

export const SupportScreen = withStyles(SupportScreenThemed, (theme) => ({
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
