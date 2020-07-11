import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, DrawerItem, DrawerGroup, IndexPath, Icon } from '@ui-kitten/components';
import HeaderComponent from '../components/Public/HeaderComponent';
import { Platform } from 'react-native';
const { Navigator, Screen } = createDrawerNavigator();
const Stack = createStackNavigator();
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreen } from '../screens/HomeScreen';
import { UnderYourControlScreen } from '../screens/UnderYourControlScreen';
import { ConfiguredWithOneClickScreen } from '../screens/ConfiguredWithOneClickScreen';
import Constants from 'expo-constants';
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

function DrawerContent({ navigation, state }) {
	const [selectedIndex, setSelectedIndex] = React.useState();
	const routes = [['HomeScreen'], ['UnderYourControlScreen', 'ConfiguredWithOneClickScreen']];
	return (
		<Drawer
			selectedIndex={selectedIndex}
			onSelect={(index) => {
				setSelectedIndex(index);

				if (index.section !== undefined) {
					const sectionRoute = routes[index.section][index.row];
					navigation.navigate(sectionRoute);
				} else {
					navigation.navigate(state.routeNames[index.row]);
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
				<DrawerItem title="Merch & Accessories" accessoryLeft={MerchIcon} />
				<DrawerItem title="Manjaro Stickers" accessoryLeft={StickerIcon} />
				<DrawerItem title="Manjaro Hardware" accessoryLeft={HardwareIcon} />
			</DrawerGroup>
			<DrawerItem title="News" accessoryLeft={NewsIcon} />
			<DrawerGroup title="More" accessoryLeft={MoreIcon}>
				<DrawerItem title="Lists" accessoryLeft={ListsIcon} />
				<DrawerItem title="Support" accessoryLeft={SupportIcon} />
				<DrawerItem title="Packages" accessoryLeft={PackagesIcon} />
				<DrawerItem title="About" accessoryLeft={AboutIcon} />
			</DrawerGroup>
		</Drawer>
	);
}

export const DrawerNavigator = () => (
	<Navigator drawerContent={(props) => <DrawerContent {...props} />}>
		<Screen name="HomeScreen" component={HomeStack} />
		<Screen name="UnderYourControlScreen" component={UnderYourControlStack} />
		<Screen name="ConfiguredWithOneClickScreen" component={ConfiguredWithOneClickStack} />
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
export const AppNavigator = () => (
	<SafeAreaProvider>
		<NavigationContainer>
			<DrawerNavigator />
		</NavigationContainer>
	</SafeAreaProvider>
);
