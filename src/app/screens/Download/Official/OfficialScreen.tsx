import * as React from 'react';
import { Layout, BottomNavigation, BottomNavigationTab, Text, Icon } from '@ui-kitten/components';
import { Dimensions, SafeAreaView, Linking } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SingleScreen } from './SingleScreen';
export interface HomeProps {
	navigation: any;
	route: any;
}

const OfficialScreenThemed: React.FC<HomeProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const { Navigator, Screen } = createBottomTabNavigator();
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const BottomTabBar = ({ navigation, state }) => (
		<BottomNavigation selectedIndex={state.index} onSelect={(index) => navigation.navigate(state.routeNames[index])}>
			<BottomNavigationTab title="XFCE" />
			<BottomNavigationTab title="KDE" />
			<BottomNavigationTab title="Gnome" />
			<BottomNavigationTab title="Architect" />
		</BottomNavigation>
	);

	const TabNavigator = () => (
		<Navigator lazy={true} tabBar={(props) => <BottomTabBar {...props} />}>
			<Screen
				name="XFCE"
				component={SingleScreen}
				initialParams={{
					name: 'XFCE',
					slogan: 'For people who want a reliable and fast desktop',
					description: (
						<Text appearance="hint" style={{ textAlign: 'justify' }}>
							This edition is supported by the Manjaro team and comes with XFCE, a reliable desktop with high
							configurability. Xfce is a lightweight desktop environment for UNIX-like operating systems. It aims to be
							fast and low on system resources, while still being visually appealing and user friendly. Xfce embodies
							the traditional UNIX philosophy of modularity and re-usability. It consists of a number of components that
							provide the full functionality one can expect of a modern desktop environment. They are packaged
							separately and you can pick among the available packages to create the optimal personal working
							environment. If you are looking for older images check the{' '}
							<Text
								style={{ color: 'green' }}
								category="h6"
								onPress={() => {
									Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/xfce/');
								}}
							>
								XFCE
							</Text>{' '}
							archive.
						</Text>
					),
					jsonOrder: 0,
				}}
			/>
			<Screen
				name="KDE"
				component={SingleScreen}
				initialParams={{
					name: 'KDE',
					slogan:
						'Built-in interface to easily access and install themes, widgets, etc. While very user-friendly and certainly flashy.',
					description: (
						<Layout>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								This edition is supported by the Manjaro team and comes with KDE Plasma, a very modern and flexible
								desktop.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								KDE Plasma is for people who want a user-friendly and customizable desktop. It is a feature-rich and
								versatile desktop environment that provides several different styles of menu to access applications. An
								excellent built-in interface to easily access and install new themes, widgets, etc, from the internet is
								also worth mentioning. KDE Plasma is simple by default, a clean work area for real-world usage which
								intends to stay out of your way, so the user is enabled to create the workflow that makes it more
								effective to complete tasks.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								If you are looking for older images check the{' '}
								<Text
									style={{ color: 'green' }}
									category="h6"
									onPress={() => {
										Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/kde/');
									}}
								>
									KDE
								</Text>{' '}
								archive.
							</Text>
						</Layout>
					),
					jsonOrder: 2,
				}}
			/>
			<Screen name="Gnome" component={SingleScreen} />
			<Screen name="Architect" component={SingleScreen} />
		</Navigator>
	);
	return <TabNavigator />;
};

export const OfficialScreen = withStyles(OfficialScreenThemed, (theme) => ({
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
