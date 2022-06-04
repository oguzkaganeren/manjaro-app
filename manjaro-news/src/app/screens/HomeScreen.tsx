import * as React from 'react';
import { Text, Layout, Avatar, Button, Icon, EvaProp, IconProps, Card } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import { ViewStyle, Dimensions } from 'react-native';

export interface HomeProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const HomeScreenThemed: React.FC<HomeProps> = (props) => {
	const { eva, style, ...restProps } = props;

	return <Layout style={[eva.style!.container, style]}></Layout>;
};

export const HomeScreen = withStyles(HomeScreenThemed, (theme) => ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
}));
