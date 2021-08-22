import * as React from 'react';
import { Layout, EvaProp, useTheme } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import { SafeAreaView, ViewStyle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FirstStepsScreen } from './FirstStepsScreen';
import { UserGuideScreen } from './UserGuideScreen';
import { PlaceHolderComponent } from '../../components/Public/PlaceHolderComponent';
export interface SupportProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const SupportScreenThemed: React.FC<SupportProps> = (props) => {
	const { eva, style, ...restProps } = props;

	const TopTab = createMaterialTopTabNavigator();
	const theme = useTheme();
	return (
		<Layout style={[eva.style!.container, style]}>
			<TopTab.Navigator
				screenOptions={{
					tabBarLabelStyle: { fontFamily: 'ComfortaaRegular', color: '#fff' },
					tabBarStyle: { backgroundColor: theme['color-primary-default'] },
					tabBarIndicatorStyle: {
						backgroundColor: '#fff',
					},
					lazy: true,
					swipeEnabled: false,
					lazyPlaceholder: () => <PlaceHolderComponent {...props} />,
				}}
			>
				<TopTab.Screen name="Mirrors" component={FirstStepsScreen} />
				<TopTab.Screen name="Branch" component={UserGuideScreen} />
			</TopTab.Navigator>
		</Layout>
	);
};

export const SupportScreen = withStyles(SupportScreenThemed, (theme) => ({
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
