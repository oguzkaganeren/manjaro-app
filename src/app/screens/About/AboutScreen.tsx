import * as React from 'react';
import { Layout, Tab, TabBar, useTheme, Icon, EvaProp, withStyles, IconProps } from '@ui-kitten/components';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TeamScreen } from './TeamScreen';
import { LinuxScreen } from './LinuxScreen';
import { ApplicationAboutScreen } from './ApplicationAboutScreen';
import globalStyle from './../../theme/GlobalStyle';
export interface AboutProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const AboutScreenThemed: React.FC<AboutProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const theme = useTheme();
	const TopTab = createMaterialTopTabNavigator();

	return (
		<Layout style={[globalStyle.container, style]}>
			<TopTab.Navigator
				screenOptions={{
					tabBarLabelStyle: { fontFamily: 'ComfortaaRegular', color: '#fff' },
					tabBarStyle: { backgroundColor: theme['color-primary-default'] },
					tabBarIndicatorStyle: {
						backgroundColor: '#fff',
					},
				}}
			>
				<TopTab.Screen name="Team" component={TeamScreen} />
				<TopTab.Screen name="Linux" component={LinuxScreen} />
				<TopTab.Screen name="Application" component={ApplicationAboutScreen} />
			</TopTab.Navigator>
		</Layout>
	);
};

export const AboutScreen = withStyles(AboutScreenThemed, (theme) => ({}));
