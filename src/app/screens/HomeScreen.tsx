import * as React from 'react';
import { Text, Layout, Avatar, Button, Icon, EvaProp, IconProps, Card } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import { ViewStyle, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-x2-carousel';

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
	const carouselData = [
		{
			icon: 'grid',
			iconColor: '#FFA726',
			text: 'It is available for X86 and ARM architectures and it can be installed in a range of hardware, including desktops, smartphones, laptops and tablet computers. Retail devices are also available with manjaro pre-installed. Install once, updatable forever.',
		},
		{
			icon: 'layout',
			iconColor: '#9ccc65',
			text: 'We have a desktop environment (user interface flavor) for everyone, known as editions. There are two types of editions, Official and Community. Official are strictly maintained by the manjaro team while community could be maintained by team members or a community user. A edition might also serve a purpose, like for example Architect, allowing you to customize your OS from the ground up.',
		},
		{
			icon: 'shield',
			iconColor: '#4caf50',
			text: 'Is very hard to get a virus due to inbuild OS security, security and privacy is important, unstable branch security patches are forward directly to stable branch. manjaro does not track, collect personal information or spams the user with unwanted advertising.',
		},
		{
			icon: 'cube',
			iconColor: '#dce775',
			text: 'Our software center and package manager works on any screen size, from a smartphone to large screens, It is also the most complete as it supports native packages and also snaps and flatpaks, It also supports compiling packages from the Arch user repository. Emulators are available to run software from other platforms. Different office suites are available, supporting multi document formats. ',
		},
		{
			icon: 'layers',
			iconColor: '#ec407a',
			text: "With the Linux kernel running under the hood, you won't need to download and install drivers like on traditional system any device you plug in works out of the box, like touch-screens, sound cards, printers, wifi or graphic tablets. There is also a graphic tool to manage graphic cards, only on rare occasions you need to install a driver manually. ",
		},
		{
			icon: 'code-download',
			iconColor: '#ffc107',
			text: 'Being open source is important, if the operating system and software is open source, then anyone can audit the code, modify or build upon it, leading to continuous improvement and innovation. ',
		},
		{
			icon: 'checkmark-circle',
			iconColor: '#ffca28',
			text: 'Testing starts on application developers, going down to packaging devs and then community. Software gets in from Arch stable to Manjaro unstable branch, then testing branch, then stable staging branch and stable branch, that is when users finally get their updates.',
		},
	];
	const _renderItem = (item) => {
		return (
			<Layout key={item.text}>
				<Layout style={[eva.style!.containerIcon, style]}>
					<Icon style={[eva.style!.icon, style]} fill={item.iconColor} name={item.icon} />
				</Layout>
				<Card style={[eva.style!.description, style]} disabled>
					<Text category="p2" style={{ textAlign: 'justify' }}>
						{item.text}
					</Text>
				</Card>
			</Layout>
		);
	};
	return (
		<Layout style={[eva.style!.container, style]}>
			<Carousel
				style={[eva.style!.carousel, style]}
				pagination={Pagination}
				renderItem={_renderItem}
				autoplay
				data={carouselData}
			/>

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
			<Layout style={[eva.style!.sideContainer, style]}>
				<Text category="s1" style={[eva.style!.sharp, style]}>
					Manjaro
				</Text>
				<Text category="p2">is a free and open source operating system</Text>
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
	containerIcon: {
		flex: 1,
		zIndex: 1,
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
		marginTop: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 0,
		borderRadius: 10,
		width: Dimensions.get('window').width - 70,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: Dimensions.get('window').height / 2,
		zIndex: 0,
	},
	logo: {
		marginTop: 35,
	},
	buttonContainer: {
		flexDirection: 'row',
		padding: 20,
	},
	carousel: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	download: {
		marginHorizontal: 15,
		shadowColor: '#000',
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
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,

		elevation: 11,
	},
	icon: {
		width: 64,
		height: 64,
	},
}));
