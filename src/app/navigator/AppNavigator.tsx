import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, DrawerGroup, Avatar, Icon, Layout } from '@ui-kitten/components';
import { Linking, TouchableHighlight } from 'react-native';
import HeaderComponent from '../components/Public/HeaderComponent';
import { Platform } from 'react-native';
const { Navigator, Screen } = createDrawerNavigator();
const Stack = createStackNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from '../screens/HomeScreen';
import { UnderYourControlScreen } from '../screens/Features/UnderYourControlScreen';
import { ConfiguredWithOneClickScreen } from '../screens/Features/ConfiguredWithOneClickScreen';
import { UsefulForEveryoneScreen } from '../screens/Features/UsefulForEveryoneScreen';
import { FreshAndStableScreen } from '../screens/Features/FreshAndStableScreen';
import { DonateScreen } from '../screens/DonateScreen';
import { LearnMoreScreen } from '../screens/LearnMoreScreen';
import { DownloadScreen } from '../screens/Download/DownloadScreen';
import { AboutScreen } from '../screens/About/AboutScreen';
import Constants from 'expo-constants';
import { MailListScreen } from '../screens/MailListScreen';
import { PackagesScreen } from '../screens/Packages/PackagesScreen';
import { SupportScreen } from '../screens/Support/SupportScreen';
import { NewsScreen } from '../screens/News/NewsScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { NewsSingleScreen } from '../screens/News/NewsSingleScreen';
const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const FeatureIcon = (props) => <Icon {...props} name="grid-outline" />;
const UnderYourControlIcon = (props) => <Icon {...props} name="options-2-outline" />;
const OneClickIcon = (props) => <Icon {...props} name="navigation-2-outline" />;
const UsefulIcon = (props) => <Icon {...props} name="people-outline" />;
const FreshIcon = (props) => <Icon {...props} name="checkmark-circle-outline" />;
const DonateIcon = (props) => <Icon {...props} name="gift-outline" />;
const ShopIcon = (props) => <Icon {...props} name="shopping-cart-outline" />;
const MerchIcon = (props) => <Icon {...props} name="award-outline" />;
const StickerIcon = (props) => <Icon {...props} name="layers-outline" />;
const HardwareIcon = (props) => <Icon {...props} name="monitor-outline" />;
const NewsIcon = (props) => <Icon {...props} name="menu-2-outline" />;
const MoreIcon = (props) => <Icon {...props} name="more-horizontal-outline" />;
const ListsIcon = (props) => <Icon {...props} name="list-outline" />;
const SupportIcon = (props) => <Icon {...props} name="heart-outline" />;
const PackagesIcon = (props) => <Icon {...props} name="archive-outline" />;
const AboutIcon = (props) => <Icon {...props} name="info-outline" />;
const ExternalLinkIcon = (props) => <Icon {...props} name="external-link-outline" />;
const SettingsIcon = (props) => <Icon {...props} name="settings-outline" />;
function DrawerContent({ navigation, state }) {
	const [selectedIndex, setSelectedIndex] = React.useState({
		equals: '',
		row: 0,
		section: undefined,
	});
	const routes = [
		['HomeScreen'],
		['UnderYourControlScreen', 'ConfiguredWithOneClickScreen', 'UsefulForEveryoneScreen', 'FreshAndStableScreen'],
		['DonateScreen'],
		['ShopScreen'],
		['NewsScreen'],
		['MailListScreen', 'SupportScreen', 'PackagesScreen', 'AboutScreen'],
		['SettingsScreen']
	];
	const Footer = (props) => (
		<Layout style={{ padding: 20, borderTopWidth: 1, borderColor: '#F2F6FF', flexDirection: 'row', justifyContent: 'space-between' }}>
			<TouchableHighlight onPress={() => Linking.openURL('https://gitlab.manjaro.org/')}>
				<Icon pack="awesome" style={{ height: 24, tintColor: '#32C15A' }} name="gitlab" />
			</TouchableHighlight>
			<TouchableHighlight onPress={() => Linking.openURL('https://twitter.com/ManjaroLinux')}>
				<Icon pack="awesome" style={{ height: 24, tintColor: '#32C15A' }} name="twitter" />
			</TouchableHighlight>
			<TouchableHighlight onPress={() => Linking.openURL('https://www.youtube.com/channel/UCdGFLV7h9RGeTUX7wa5rqGw')}>
				<Icon pack="awesome" style={{ height: 24, tintColor: '#32C15A' }} name="youtube" />
			</TouchableHighlight>
			<TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com/ManjaroLinux')}>
				<Icon pack="awesome" style={{ height: 24, tintColor: '#32C15A' }} name="facebook-f" />
			</TouchableHighlight>
			<TouchableHighlight onPress={() => Linking.openURL('https://forum.manjaro.org/')}>
				<Icon pack="awesome" style={{ height: 24, tintColor: '#32C15A' }} name="discourse" />
			</TouchableHighlight>
			<TouchableHighlight onPress={() => Linking.openURL('https://wiki.manjaro.org/')}>
				<Icon pack="awesome" style={{ height: 24, tintColor: '#32C15A' }} name="wikipedia-w" />
			</TouchableHighlight>
		</Layout>
	);

	return (
		<Drawer
			footer={Footer}
			selectedIndex={selectedIndex}
			onSelect={(index) => {
				setSelectedIndex(index);
				if (index.section !== undefined) {
					const sectionRoute = routes[index.section][index.row];
					navigation.navigate(sectionRoute);
				} else {
					const sectionRoute = routes[index.row][0];
					navigation.navigate(sectionRoute);
				}
			}}
			style={{
				marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
				paddingTop: Platform.OS === 'web' ? 40 : 0,
			}}
		>
			<DrawerItem title="Home" accessoryLeft={HomeIcon} />
			<DrawerGroup title="Features" accessoryLeft={FeatureIcon}>
				<DrawerItem title="Under your control" accessoryLeft={UnderYourControlIcon} />
				<DrawerItem title="Configured with one click" accessoryLeft={OneClickIcon} />
				<DrawerItem title="Useful for everyone" accessoryLeft={UsefulIcon} />
				<DrawerItem title="Fresh & Stable" accessoryLeft={FreshIcon} />
			</DrawerGroup>
			<DrawerItem title="Donate" accessoryLeft={DonateIcon} />
			<DrawerGroup title="Shop" accessoryLeft={ShopIcon}>
				<DrawerItem
					title="Merch & Accessories"
					accessoryLeft={MerchIcon}
					accessoryRight={ExternalLinkIcon}
					onPress={() => {
						Linking.openURL('https://shop.spreadshirt.de/manjaro/');
					}}
				/>
				<DrawerItem
					title="Manjaro Stickers"
					accessoryLeft={StickerIcon}
					accessoryRight={ExternalLinkIcon}
					onPress={() => {
						Linking.openURL('https://linux-aarhus.dk/en/product-category/manjaro-en/stickers-en/');
					}}
				/>
				<DrawerItem
					title="Manjaro Hardware"
					accessoryLeft={HardwareIcon}
					accessoryRight={ExternalLinkIcon}
					onPress={() => {
						Linking.openURL('https://manjaro.org/hardware/');
					}}
				/>
			</DrawerGroup>
			<DrawerItem title="News" accessoryLeft={NewsIcon} />
			<DrawerGroup title="More" accessoryLeft={MoreIcon}>
				<DrawerItem title="Lists" accessoryLeft={ListsIcon} />
				<DrawerItem title="Support" accessoryLeft={SupportIcon} />
				<DrawerItem title="Packages" accessoryLeft={PackagesIcon} />
				<DrawerItem title="About" accessoryLeft={AboutIcon} />
			</DrawerGroup>
			<DrawerItem title="Settings" accessoryLeft={SettingsIcon} />
		</Drawer>
	);
}

export const DrawerNavigator = () => (
	<Navigator drawerContent={(props) => <DrawerContent {...props} />}>
		<Screen name="HomeScreen" component={HomeStack} />
		<Screen name="UnderYourControlScreen" component={UnderYourControlStack} />
		<Screen name="ConfiguredWithOneClickScreen" component={ConfiguredWithOneClickStack} />
		<Screen name="UsefulForEveryoneScreen" component={UsefulForEveryoneStack} />
		<Screen name="FreshAndStableScreen" component={FreshAndStableStack} />
		<Screen name="DonateScreen" component={DonateStack} />
		<Screen name="MailListScreen" component={MailListStack} />
		<Screen name="NewsScreen" component={NewsStack} />
		<Screen name="SupportScreen" component={SupportStack} />
		<Screen name="PackagesScreen" component={PackagesStack} />
		<Screen name="AboutScreen" component={AboutStack} />
		<Screen name="SettingsScreen" component={SettingsStack} />
	</Navigator>
);
function HomeStack() {
	return (
		<Stack.Navigator initialRouteName="HomeScreen">
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					title: 'Home',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={false} />;
					},
				}}
			/>
			<Stack.Screen
				name="LearnMoreScreen"
				component={LearnMoreScreen}
				options={{
					title: 'Learn More',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
					},
				}}
			/>
			<Stack.Screen
				name="DownloadScreen"
				component={DownloadScreen}
				options={{
					title: 'Download',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
function UnderYourControlStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="UnderYourControlScreen"
				component={UnderYourControlScreen}
				options={{
					title: 'Under Your Control',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
function ConfiguredWithOneClickStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ConfiguredWithOneClickScreen"
				component={ConfiguredWithOneClickScreen}
				options={{
					title: 'Configured With One Click',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
function UsefulForEveryoneStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="UsefulForEveryoneScreen"
				component={UsefulForEveryoneScreen}
				options={{
					title: 'Useful For Everyone',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
function FreshAndStableStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="FreshAndStableScreen"
				component={FreshAndStableScreen}
				options={{
					title: 'Fresh & Stable',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
function DonateStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="DonateScreen"
				component={DonateScreen}
				options={{
					title: 'Donate',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
function MailListStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="MailListScreen"
				component={MailListScreen}
				options={{
					title: 'Mail Lists',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
function NewsStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="NewsScreen"
				component={NewsScreen}
				options={{
					title: 'News',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
					},
				}}
			/>
			<Stack.Screen
				name="NewsSingleScreen"
				component={NewsSingleScreen}
				options={{
					title: 'News',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
					},
				}}
			/>
		</Stack.Navigator>
	);
}
function SupportStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SupportScreen"
				component={SupportScreen}
				options={{
					title: 'Support',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
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
				name="PackagesScreen"
				component={PackagesScreen}
				options={{
					title: 'Packages',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
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
				name="AboutScreen"
				component={AboutScreen}
				options={{
					title: 'About',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
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
				name="SettingsScreen"
				component={SettingsScreen}
				options={{
					title: 'Settings',
					header: ({ scene, previous, navigation }) => {
						const { options } = scene.descriptor;
						const title =
							options.headerTitle !== undefined
								? options.headerTitle
								: options.title !== undefined
									? options.title
									: scene.route.name;

						return <HeaderComponent navigation={navigation} headerTitle={title} previous={previous} />;
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
