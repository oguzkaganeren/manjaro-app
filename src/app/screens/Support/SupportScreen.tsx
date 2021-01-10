import * as React from 'react';
import { Layout, Tab, TabView, Text, Icon, EvaProp, IconProps } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import { SafeAreaView, ViewStyle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FirstStepsScreen } from './FirstStepsScreen';
import { UserGuideScreen } from './UserGuideScreen';

export interface SupportProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const SupportScreenThemed: React.FC<SupportProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const FirstIcon = (props: IconProps) => <Icon {...props} name="compass-outline" />;
	const GuideIcon = (props: IconProps) => <Icon {...props} name="book-open-outline" />;

	const TopTab = createMaterialTopTabNavigator();
	function TopTabBar({ navigation, state }) {
		const onSelect = (index) => {
			navigation.navigate(state.routeNames[index]);
		};

		return (
			<SafeAreaView>
				<TabView selectedIndex={state.index} indicatorStyle={{ backgroundColor: '#ffaa00' }} onSelect={onSelect}>
					<Tab icon={FirstIcon} title="First Steps" />
					<Tab icon={GuideIcon} title="User Guide" />
				</TabView>
			</SafeAreaView>
		);
	}
	return (
		<Layout style={[eva.style!.container, style]}>
			<TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
				<TopTab.Screen name="Mirrors" component={FirstStepsScreen} />
				<TopTab.Screen name="Branch" component={UserGuideScreen} />
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
