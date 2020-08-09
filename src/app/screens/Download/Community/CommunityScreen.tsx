import * as React from 'react';
import { Layout, BottomNavigation, BottomNavigationTab, Text, Icon, Tab, TabView } from '@ui-kitten/components';
import { Dimensions, SafeAreaView, Linking } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import { NavigationContainer } from '@react-navigation/native';
import { SingleScreen } from '../SingleScreen';
export interface HomeProps {
	navigation: any;
	route: any;
}

const CommunityScreenThemed: React.FC<HomeProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const { Navigator, Screen } = createMaterialTopTabNavigator();
	const Page = ({ label }) => (
		<Layout>
			<Text>{label}</Text>
			<Text>To get started, edit index.ios.js</Text>
			<Text>
				Press Cmd+R to reload,{'\n'}
				Cmd+D or shake for dev menu
			</Text>
		</Layout>
	);
	const BottomTabBar = ({ navigation, state }) => {
		console.log(state.routeNames);
		const onSelect = (index) => {
			navigation.navigate(state.routeNames[index]);
		};

		return (
			<TabView
				removeClippedSubviews
				selectedIndex={state.index}
				indicatorStyle={{ backgroundColor: '#ffaa00' }}
				onSelect={onSelect}
			>
				<Tab title="Awesome" />
				<Tab title="Bspwm" />
				<Tab title="Budgie" />
				<Tab title="Cinnamon" />
				<Tab title="I3" />
				<Tab title="LXDE" />
				<Tab title="LXQt" />
				<Tab title="Mate" />
				<Tab title="Openbox" />
			</TabView>
		);
	};

	const TabNavigator = () => (
		<Layout style={[eva.style.container, style]}>
			<ScrollableTabView
				tabBarPosition={'bottom'}
				tabBarActiveTextColor="#53ac49"
				renderTabBar={() => <TabBar underlineColor="#53ac49" />}
			>
				<Page tabLabel={{ label: 'Page #1' }} label="Page #1" />
				<Page tabLabel={{ label: 'Page #2 aka Long!', badge: 3 }} label="Page #2 aka Long!" />
				<Page tabLabel={{ label: 'Page #3' }} label="Page #3" />
				<Page tabLabel={{ label: 'Page #4 aka Page' }} label="Page #4 aka Page" />
				<Page tabLabel={{ label: 'Page #5' }} label="Page #5" />
			</ScrollableTabView>
		</Layout>
	);
	return <TabNavigator />;
};

export const CommunityScreen = withStyles(CommunityScreenThemed, (theme) => ({
	container: {
		flex: 1,
	},
	tabContainer: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height - Dimensions.get('window').height / 6,
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
