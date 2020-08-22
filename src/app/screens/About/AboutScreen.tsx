import * as React from 'react';
import { Layout, Tab, TabView, Text, Icon } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TeamScreen } from './TeamScreen';
import { LinuxScreen } from './LinuxScreen';
import { ApplicationAboutScreen } from './ApplicationAboutScreen';
export interface AboutProps {
	navigation: any;
	route: any;
}

const AboutScreenThemed: React.FC<AboutProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const CommunityIcon = (props) => <Icon {...props} name="people-outline" />;
	const AboutIcon = (props) => <Icon {...props} name="info-outline" />;
	const ApplicationIcon = (props) => <Icon {...props} name="smartphone-outline" />;
	const TopTab = createMaterialTopTabNavigator();
	const TopTabBar = ({ navigation, state }) => {
		const onSelect = (index) => {
			navigation.navigate(state.routeNames[index]);
		};

		return (
			<SafeAreaView>
				<TabView selectedIndex={state.index} indicatorStyle={{ backgroundColor: '#ffaa00' }} onSelect={onSelect}>
					<Tab icon={CommunityIcon} title="Team" />
					<Tab icon={AboutIcon} title="Linux" />
					<Tab icon={ApplicationIcon} title="Application" />
				</TabView>
			</SafeAreaView>
		);
	};
	return (
		<Layout style={[eva.style.container, style]}>
			<TopTab.Navigator tabBar={(props) => <TopTabBar {...props} />}>
				<TopTab.Screen name="Team" component={TeamScreen} />
				<TopTab.Screen name="Linux" component={LinuxScreen} />
				<TopTab.Screen name="Application" component={ApplicationAboutScreen} />
			</TopTab.Navigator>
		</Layout>
	);
};

export const AboutScreen = withStyles(AboutScreenThemed, (theme) => ({
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
