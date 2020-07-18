import * as React from 'react';
import { Text, Layout, Avatar, Button, Icon } from '@ui-kitten/components';
import { Linking } from 'react-native';
import { withStyles } from '@ui-kitten/components';
export interface BranchProps {
	navigation: any;
	route: any;
}

const BranchScreenThemed: React.FC<BranchProps> = (props) => {
	const { eva, style, ...restProps } = props;

	return (
		<Layout style={[eva.style.container, style]}>
			<Text style={{ marginHorizontal: 10 }} status="warning">
				We are working on this screen, you can use the web page.
			</Text>
			<Layout style={[eva.style.sideContainer, style]}>
				<Text
					style={{ color: '#1E88E5' }}
					category="h6"
					onPress={() => {
						Linking.openURL('https://manjaro.org/branch-compare/');
					}}
				>
					Manjaro Branch Compare Web Page
				</Text>
				<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="external-link-outline" />
			</Layout>
		</Layout>
	);
};

export const BranchScreen = withStyles(BranchScreenThemed, (theme) => ({
	container: {
		flex: 1,
		paddingVertical: 15,
	},
	icon: {
		width: 16,
		height: 16,
	},
	sideContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 15,
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
