import React from 'react';
import { StyleSheet, Platform, View, TouchableOpacity } from 'react-native';
import {
	Icon,
	TopNavigation,
	TopNavigationAction,
	Toggle,
	Avatar,
	Text,
	Spinner,
	Layout,
	Button,
} from '@ui-kitten/components';
import { DrawerActions } from '@react-navigation/native';
import { OfflineComponent } from './OfflineComponent';
import Constants from 'expo-constants';

declare var global: any;

export interface HeaderProps {
	headerTitle?: any;
	previous: any;
	navigation: any;
}

const HeaderComponent: React.FC<HeaderProps> = (props) => {
	const MenuIcon = (style) => <Icon {...style} name="menu-outline" />;
	const BackIcon = (style) => <Icon {...style} name="arrow-back" />;
	const BackAction = () => <TopNavigationAction onPress={props.navigation.goBack} icon={BackIcon} />;
	const MenuAction = (propsf) => (
		<TopNavigationAction
			onPress={() => {
				props.navigation.dispatch(DrawerActions.toggleDrawer());
			}}
			icon={MenuIcon}
		/>
	);

	const renderLeftControl = () => (props.previous ? <BackAction /> : <MenuAction />);
	const renderTitle = (props) => (
		<View style={styles.titleContainer}>
			<Text {...props}>Manjaro - enjoy the simplicity</Text>
		</View>
	);
	return (
		<Layout>
			<TopNavigation
				style={styles.container}
				title={props.headerTitle == 'Home' ? renderTitle : props.headerTitle}
				accessoryLeft={renderLeftControl}
			/>
			<OfflineComponent />
		</Layout>

	);
};

const styles: any = StyleSheet.create({
	container: {
		marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
	},
	connection: {
		marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight + 50,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		marginHorizontal: 16,
	},
});
export default HeaderComponent;
