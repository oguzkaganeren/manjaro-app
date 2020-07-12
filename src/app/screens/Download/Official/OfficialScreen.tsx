import * as React from 'react';
import { Layout, BottomNavigation, BottomNavigationTab, Text, Icon } from '@ui-kitten/components';
import { Dimensions, SafeAreaView } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { XfceScreen } from './XfceScreen';
import { NavigationContainer } from '@react-navigation/native';
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
		<Navigator tabBar={(props) => <BottomTabBar {...props} />}>
			<Screen name="XFCE" component={XfceScreen} />
			<Screen name="KDE" component={XfceScreen} />
			<Screen name="Gnome" component={XfceScreen} />
			<Screen name="Architect" component={XfceScreen} />
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
