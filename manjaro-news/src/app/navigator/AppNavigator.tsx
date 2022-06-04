import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, DrawerGroup, Avatar, Icon, Layout, IndexPath } from '@ui-kitten/components';
import HeaderComponent from '../components/Public/HeaderComponent';
import { Platform } from 'react-native';
const { Navigator, Screen } = createDrawerNavigator();
const Stack = createStackNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ApplicationAboutScreen } from '../screens/About/ApplicationAboutScreen';
import Constants from 'expo-constants';
import { PackagesScreen } from '../screens/Packages/PackagesScreen';
import { NewsScreen } from '../screens/News/NewsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { NewsSingleScreen } from '../screens/News/NewsSingleScreen';
const NewsIcon = (props) => <Icon {...props} name="menu-2-outline" />;
const MoreIcon = (props) => <Icon {...props} name="more-horizontal-outline" />;
const PackagesIcon = (props) => <Icon {...props} name="archive-outline" />;
const AboutIcon = (props) => <Icon {...props} name="info-outline" />;
const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;
function DrawerContent({ navigation, state }) {
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
	const routes = [['NewsScreen'], ['PackagesScreen', 'AboutScreen'], ['SettingsScreen']];

	return (
		<Drawer
			selectedIndex={selectedIndex}
			onSelect={(index) => {
				if (index.section !== undefined && index.section !== 3) {
					const sectionRoute = routes[index.section][index.row];
					navigation.navigate(sectionRoute);
				} else {
					if (1 !== index.row && 3 !== index.row && 5 !== index.row) {
						const sectionRoute = routes[index.row][0];
						navigation.navigate(sectionRoute);
					}
				}
				setSelectedIndex(index);
			}}
			style={{
				marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
				paddingTop: Platform.OS === 'web' ? 40 : 10,
			}}
		>
			<DrawerItem title="News" accessoryLeft={NewsIcon} />
			<DrawerGroup title="More" accessoryLeft={MoreIcon}>
				<DrawerItem title="Packages" accessoryLeft={PackagesIcon} />
				<DrawerItem title="About" accessoryLeft={AboutIcon} />
			</DrawerGroup>
			<DrawerItem title="Settings" accessoryLeft={SettingsIcon} />
		</Drawer>
	);
}

export const DrawerNavigator = () => (
	<Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{ headerShown: false }}>
		<Screen name="NewsScreen" component={NewsStack} />
		<Screen name="PackagesScreen" component={PackagesStack} />
		<Screen name="AboutScreen" component={AboutStack} />
		<Screen name="SettingsScreen" component={SettingsStack} />
	</Navigator>
);

function NewsStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="News"
				component={NewsScreen}
				options={{
					title: 'News',
					header: ({ route, options, navigation }) => {
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
								? options.title
								: route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={false} />;
					},
				}}
			/>
			<Stack.Screen
				name="NewsSingle"
				component={NewsSingleScreen}
				options={{
					title: 'News',
					header: ({ route, options, navigation }) => {
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
								? options.title
								: route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={navigation.canGoBack} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}

function PackagesStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Packages"
				component={PackagesScreen}
				options={{
					title: 'Packages',
					header: ({ route, options, navigation }) => {
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
								? options.title
								: route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={navigation.canGoBack} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
function AboutStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="About"
				component={ApplicationAboutScreen}
				options={{
					title: 'About',
					header: ({ route, options, navigation }) => {
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
								? options.title
								: route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={navigation.canGoBack} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
function SettingsStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					title: 'Settings',
					header: ({ route, options, navigation }) => {
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
								? options.title
								: route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={navigation.canGoBack} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
export const AppNavigator = () => (
	<SafeAreaProvider>
		<NavigationContainer>
			<DrawerNavigator />
		</NavigationContainer>
	</SafeAreaProvider>
);
