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

	const TabNavigator = () => (
		<Layout style={[eva.style.container, style]}>
			<ScrollableTabView
				tabBarPosition={'bottom'}
				tabBarActiveTextColor="#32C15A"
				tabBarInactiveTextColor="#8F9BB3"
				renderTabBar={() => (
					<TabBar
						tabBarStyle={{
							borderTopColor: '#8F9BB3',

							borderTopWidth: 1,
							paddingTop: 1,
							borderBottomWidth: 0,
						}}
						tabBarTextStyle={{
							fontSize: 14,
							fontFamily: 'ComfortaaBold',
							fontWeight: '600',
							paddingTop: 15,
							paddingBottom: 10,
						}}
						underlineBottomPosition={52}
						underlineColor="#32C15A"
						underlineHeight={4}
					/>
				)}
			>
				<SingleScreen
					tabLabel={{ label: 'Awesome' }}
					route={props.route}
					navigation={props.navigation}
					name={'Awesome'}
					slogan={
						'Slim and snappy tiling window manager with the focus on resource efficiency suitable for power users'
					}
					description={
						<Layout>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								This edition is supported by the Manjaro community and comes with Awesome, a highly configurable, next
								generation framework window manager for X.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								Awesome is a slim and snappy tiling window manager with the focus on resource efficiency.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								{' '}
								If you are looking for older images check the{' '}
								<Text
									style={{ color: 'green' }}
									onPress={() => {
										Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/awesome');
									}}
								>
									Awesome
								</Text>{' '}
								archive.
							</Text>
						</Layout>
					}
					jsonOrder={0}
					type={'Community'}
				/>
				<SingleScreen
					tabLabel={{ label: 'Bspwm' }}
					route={props.route}
					navigation={props.navigation}
					name={'Bspwm'}
					slogan={
						'Extremely resource efficient and configurable window manager that follows Unix philosophy. It gives the user good control over windows with minimal effort. It has a focus on terminal application and is better suited for experienced Linux users'
					}
					description={
						<Layout>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								This edition is supported by the Manjaro community and comes with bspwm.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								Bspwm is a slim and snappy tiling window manager with the focus on resource efficiency.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								{' '}
								If you are looking for older images check the{' '}
								<Text
									style={{ color: 'green' }}
									onPress={() => {
										Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/bspwm/');
									}}
								>
									Bspwm
								</Text>{' '}
								archive.
							</Text>
						</Layout>
					}
					jsonOrder={1}
					type={'Community'}
				/>
				<SingleScreen
					tabLabel={{ label: 'Budgie' }}
					route={props.route}
					navigation={props.navigation}
					name={'Budgie'}
					slogan={'For people who want a simple and elegant desktop'}
					description={
						<Layout>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								This edition is supported by the Manjaro community and comes with Budgie, the desktop of the{' '}
								<Text
									style={{ color: 'green' }}
									onPress={() => {
										Linking.openURL('https://getsol.us/');
									}}
								>
									Solus project
								</Text>
								. Budgie focuses on providing a simple-to-use and elegant desktop that fulfills the needs of a modern
								user.
							</Text>
							<Text></Text>

							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								{' '}
								If you are looking for older images check the{' '}
								<Text
									style={{ color: 'green' }}
									onPress={() => {
										Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/budgie/');
									}}
								>
									Budgie
								</Text>{' '}
								archive.
							</Text>
						</Layout>
					}
					jsonOrder={2}
					type={'Community'}
				/>
				<SingleScreen
					tabLabel={{ label: 'Cinnamon' }}
					route={props.route}
					navigation={props.navigation}
					name={'Cinnamon'}
					slogan={'For people who look for a traditional desktop with modern technology'}
					description={
						<Layout>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								This edition is supported by the Manjaro community and comes with Cinnamon, a desktop based on modern
								technology that keeps known and proven concepts.
							</Text>
							<Text></Text>

							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								{' '}
								If you are looking for older images check the{' '}
								<Text
									style={{ color: 'green' }}
									onPress={() => {
										Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/cinnamon/');
									}}
								>
									Cinnamon
								</Text>{' '}
								archive.
							</Text>
						</Layout>
					}
					jsonOrder={3}
					type={'Community'}
				/>
				<SingleScreen
					tabLabel={{ label: 'I3' }}
					route={props.route}
					navigation={props.navigation}
					name={'I3'}
					slogan={
						'Lightweight tiling window manager, famous for its efficiency with screen space and keyboard controlled workflow. The ideal environment for text and terminal focused usage.'
					}
					description={
						<Layout>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								This edition is supported by the Manjaro community and comes with i3, a tiling window manager.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								I3 is an extremely lightweight tiling window manager, famous for its efficiency with screen space and
								keyboard controlled workflow. The ideal environment for text and terminal focused usage.
							</Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								{' '}
								If you are looking for older images check the{' '}
								<Text
									style={{ color: 'green' }}
									onPress={() => {
										Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/i3/');
									}}
								>
									i3
								</Text>{' '}
								archive.
							</Text>
						</Layout>
					}
					jsonOrder={4}
					type={'Community'}
				/>
				<SingleScreen
					tabLabel={{ label: 'LXDE' }}
					route={props.route}
					navigation={props.navigation}
					name={'LXDE'}
					slogan={'Lightweight desktop build using the GTK toolkit'}
					description={
						<Layout>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								Manjaro LXDE provides a lightweight GTK desktop environment. In addition to LXDE itself it comes with
								Manjaro Hello and the integrated Application utility, providing quick access to popular applications.
								Additionally the Kvantum theme manager is provided to provide consistent theming for both QT and GTK
								applications.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								This edition is supported by the Manjaro community and uses Openbox Window Manager.
							</Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								{' '}
								If you are looking for older images check the{' '}
								<Text
									style={{ color: 'green' }}
									onPress={() => {
										Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/lxde/');
									}}
								>
									LXDE
								</Text>{' '}
								archive.
							</Text>
						</Layout>
					}
					jsonOrder={5}
					type={'Community'}
				/>
				<SingleScreen
					tabLabel={{ label: 'LXQt' }}
					route={props.route}
					navigation={props.navigation}
					name={'LXQt'}
					slogan={'Lightweight desktop build with the LXQt toolkit.'}
					description={
						<Layout>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								Manjaro LXQt provides a lightweight LXQt desktop environment. In addition to LXQt itself it provides a
								very basic set of applications. As most applications use the same Qt5 toolkit, the desktop provides a
								unified and style and theming. Additionally the Kvantum theme manager is provided to provide consistent
								theming for both QT and GTK applications.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								This edition is supported by the Manjaro community and uses Openbox Window Manager.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								Chosing the minimal edition requires installation of extra packages for a complete system.
							</Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								{' '}
								If you are looking for older images check the{' '}
								<Text
									style={{ color: 'green' }}
									onPress={() => {
										Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/lxqt/');
									}}
								>
									lxqt
								</Text>{' '}
								archive.
							</Text>
						</Layout>
					}
					jsonOrder={6}
					type={'Community'}
				/>
				<SingleScreen
					tabLabel={{ label: 'Mate' }}
					route={props.route}
					navigation={props.navigation}
					name={'Mate'}
					slogan={'For people who look for a traditional experience'}
					description={
						<Layout>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								This edition is supported by the Manjaro community and comes with Mate, a desktop environment that
								continues the legacy of traditional user experience while carefully improving and modernizing it when
								needed.
							</Text>
							<Text></Text>

							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								{' '}
								If you are looking for older images check the{' '}
								<Text
									style={{ color: 'green' }}
									onPress={() => {
										Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/mate/');
									}}
								>
									mate
								</Text>{' '}
								archive.
							</Text>
						</Layout>
					}
					jsonOrder={7}
					type={'Community'}
				/>
				<SingleScreen
					tabLabel={{ label: 'Openbox' }}
					route={props.route}
					navigation={props.navigation}
					name={'Openbox'}
					slogan={'For people who look for a traditional experience'}
					description={
						<Layout>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								For power users, developers, music production. It is famous for its endless configuration possibilties.
								A stacking window manager for extensive keyboard based workflows as well as mouse support.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								This edition is supported by the Manjaro community and comes with openbox, a highly configurable window
								manager with extensive standards support and well known for stability.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								It comes with Manjaro Application Manager for easy installation of popular applications and of course
								Pamac which is the Manjaro distributions in-house Package Management application. The Kvantum theme
								manager helps creating consistent theming for GTK and Qt applications alike.
							</Text>
							<Text></Text>
							<Text appearance="hint" style={{ textAlign: 'justify' }}>
								{' '}
								If you are looking for older images check the{' '}
								<Text
									style={{ color: 'green' }}
									onPress={() => {
										Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/mate/');
									}}
								>
									Openbox
								</Text>{' '}
								archive.
							</Text>
						</Layout>
					}
					jsonOrder={7}
					type={'Community'}
				/>
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
