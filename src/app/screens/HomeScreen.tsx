import * as React from 'react';
import { Text, Layout, Avatar, Button, Icon } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

export interface HomeProps {
	navigation: any;
	route: any;
}

const HomeScreenThemed: React.FC<HomeProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const DownloadIcon = (props) => <Icon {...props} name="arrow-circle-down-outline" />;
	const InfoIcon = (props) => <Icon {...props} name="info-outline" />;
	return (
		<Layout style={[eva.style.container, style]}>
			<Avatar
				shape="square"
				size="large"
				style={[eva.style.logo, style]}
				source={require('../../../assets/logo.png')}
			/>
			<Layout style={[eva.style.sideContainer, style]}>
				<Text category="s1" style={[eva.style.sharp, style]}>
					#
				</Text>
				<Text category="s1">FREE OPERATING SYSTEM FOR EVERYONE</Text>
			</Layout>
			<Layout style={[eva.style.description, style]}>
				<Text category="p1" style={{ textAlign: 'justify' }}>
					Manjaro is a professionally made operating system that is a suitable replacement for Windows or MacOS.
					Multiple Desktop Environments are available through our Official and Community editions.
				</Text>
			</Layout>
			<Layout style={[eva.style.buttonContainer, style]}>
				<Button style={[eva.style.download, style]} appearance="outline" status="primary" accessoryLeft={DownloadIcon}>
					Download
				</Button>
				<Button
					style={[eva.style.learnMore, style]}
					appearance="outline"
					onPress={() => {
						props.navigation.navigate('LearnMoreScreen');
					}}
					status="info"
					accessoryLeft={InfoIcon}
				>
					Learn More
				</Button>
			</Layout>
		</Layout>
	);
};

export const HomeScreen = withStyles(HomeScreenThemed, (theme) => ({
	container: {
		flex: 1,
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
