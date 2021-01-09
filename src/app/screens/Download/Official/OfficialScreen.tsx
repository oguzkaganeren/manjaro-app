import * as React from 'react';
import { Layout, BottomNavigation, BottomNavigationTab, Text, Icon } from '@ui-kitten/components';
import { Dimensions, SafeAreaView, Linking } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SingleScreen } from '../SingleScreen';
export interface HomeProps {
	navigation: any;
	route: any;
}

const OfficialScreenThemed: React.FC<HomeProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const { Navigator, Screen } = createBottomTabNavigator();
	const BottomTabBar = ({ navigation, state }) => {
		const onSelect = (index) => {
			navigation.navigate(state.routeNames[index]);
		};
		return (
			<BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
				<BottomNavigationTab title="XFCE" />
				<BottomNavigationTab title="KDE" />
				<BottomNavigationTab title="Gnome" />
				<BottomNavigationTab title="Architect" />
			</BottomNavigation>
		);
	};

	const TabNavigator = () => (
		<NavigationContainer independent={true}>
			<Navigator lazy={true} tabBar={(props) => <BottomTabBar {...props} />}>
				<Screen name="XFCE">
					{(props) => (
						<SingleScreen
							{...props}
							jsonOrder={0}
							type={'Official'}
						/>
					)}
				</Screen>
				<Screen name="KDE">
					{(props) => (
						<SingleScreen
							{...props}

							jsonOrder={2}
							type={'Official'}
						/>
					)}
				</Screen>
				<Screen name="Gnome">
					{(props) => (
						<SingleScreen
							{...props}
							jsonOrder={1}
							type={'Official'}
						/>
					)}
				</Screen>
				<Screen name="Architect">
					{(props) => (
						<SingleScreen
							{...props}
							jsonOrder={3}
							type={'Official'}
						/>
					)}
				</Screen>
			</Navigator>
		</NavigationContainer>
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
