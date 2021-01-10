import * as React from 'react';
import { Text, Layout, Avatar, Button, Icon, EvaProp } from '@ui-kitten/components';
import { Linking, ViewStyle } from 'react-native';
import { withStyles } from '@ui-kitten/components';
export interface MirrorsProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const MirrorsScreenThemed: React.FC<MirrorsProps> = (props) => {
	const { eva, style, ...restProps } = props;

	return (
		<Layout style={[eva.style!.container, style]}>
			<Text style={{ marginHorizontal: 10 }} status="warning">
				We are working on this screen, you can use the web page.
			</Text>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Text
					style={{ color: '#1E88E5' }}
					category="h6"
					onPress={() => {
						Linking.openURL('https://repo.manjaro.org/');
					}}
				>
					Manjaro Repository Web Page
				</Text>
				<Icon style={[eva.style!.icon, style]} fill="#1E88E5" name="external-link-outline" />
			</Layout>
		</Layout>
	);
};

export const MirrorsScreen = withStyles(MirrorsScreenThemed, (theme) => ({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 15,
	},
	icon: {
		width: 16,
		height: 16,
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
