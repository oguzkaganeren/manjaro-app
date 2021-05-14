import * as React from 'react';
import { Text, Layout, Avatar, Button, Icon, EvaProp, IconProps, Card } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import { ViewStyle } from 'react-native';

export interface HomeProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const HomeScreenThemed: React.FC<HomeProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const DownloadIcon = (props: IconProps) => <Icon {...props} name="arrow-circle-down-outline" />;
	const InfoIcon = (props: IconProps) => <Icon {...props} name="info-outline" />;
	return (
		<Layout style={[eva.style!.container, style]}>
			<Avatar
				shape="square"
				size="large"
				style={[eva.style!.logo, style]}
				source={require('../../../assets/logo.png')}
			/>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Text category="s1" style={[eva.style!.sharp, style]}>
					Manjaro
				</Text>
				<Text category="p2">is a free and open source operating system</Text>
			</Layout>
			<Card style={[eva.style!.description, style]} status='warning'>
				<Text category="p2" style={{ textAlign: 'justify' }}>
					It is available for X86 and ARM architectures and it can be installed in a range of hardware, including desktops, smartphones, laptops and tablet computers. Retail devices are also available with manjaro pre-installed.
					Install once, updatable forever.
				</Text>
			</Card>
			<Layout style={[eva.style!.buttonContainer, style]}>
				<Button
					style={[eva.style!.download, style]}
					onPress={() => {
						props.navigation.navigate('DownloadScreen');
					}}
					status="primary"
					accessoryLeft={DownloadIcon}
				>
					Download
				</Button>
				<Button
					style={[eva.style!.learnMore, style]}
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
		marginTop: 10,
		marginHorizontal: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,

		elevation: 11,
		borderRadius: 10,
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
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,

		elevation: 11,

	},
	learnMore: {
		marginHorizontal: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,

		elevation: 11,
	},
}));
