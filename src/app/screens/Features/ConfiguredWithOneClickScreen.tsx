import * as React from 'react';
import { ScrollView, Image, Dimensions, ViewStyle } from 'react-native';
import { Text, Layout, Card, Icon, Avatar, EvaProp } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

export interface ConfiguredWithOneClickProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const ConfiguredWithOneClickScreenThemed: React.FC<ConfiguredWithOneClickProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const ChooseHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style!.subContainer, style]}>
				<Image
					style={[eva.style!.image, style]}
					source={require('../../../../assets/featureImages/manjaro_pamac.png')}
				/>
				<Text category="h6">Choose, install, finished!</Text>
			</Layout>
		</Layout>
	);
	const DivideHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style!.subContainer, style]}>
				<Image
					style={[eva.style!.image, style]}
					source={require('../../../../assets/featureImages/manjaro_useraccounts.png')}
				/>
				<Text category="h6">Divide and conquer</Text>
			</Layout>
		</Layout>
	);
	const LanguageHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style!.subContainer, style]}>
				<Image
					style={[eva.style!.image, style]}
					source={require('../../../../assets/featureImages/manjaro_locale.png')}
				/>
				<Text category="h6">Manjaro speaks your language</Text>
			</Layout>
		</Layout>
	);
	const GraphicCardHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style!.subContainer, style]}>
				<Image style={[eva.style!.image, style]} source={require('../../../../assets/featureImages/manjaro_mhwd.png')} />
				<Text category="h6">New graphics card? One click and it's done</Text>
			</Layout>
		</Layout>
	);
	const CoreHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style!.subContainer, style]}>
				<Image
					style={[eva.style!.image, style]}
					source={require('../../../../assets/featureImages/manjaro_kernels.png')}
				/>
				<Text category="h6">Switch the core with one click</Text>
			</Layout>
		</Layout>
	);
	const TravelHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style!.subContainer, style]}>
				<Image
					style={[eva.style!.image, style]}
					source={require('../../../../assets/featureImages/manjaro_timeanddate.png')}
				/>
				<Text category="h6">Traveling a lot?</Text>
			</Layout>
		</Layout>
	);
	return (
		<Layout style={[eva.style!.container, style]}>
			<ScrollView>
				<Card disabled>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro comes with its own tools that help you configuring your computer the way you want - without
						searching for scattered settings across the whole system and looking things up on the internet. Just open
						the system control panel, open the tool and select what you want.
					</Text>
				</Card>
				<Card disabled status="warning" header={ChooseHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro maintains its own program to install, update and remove packages from the system. Just open it,
						choose what you want and click ‘install’. Any additionaly required packages will be installed automatically
						and all you have to do is to start the program.
					</Text>
				</Card>
				<Card disabled status="danger" header={DivideHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						If multiple people use your computer, just create an account for each of them. Each user has their personal
						storage and appropriate permissions on the system individually.
					</Text>
				</Card>
				<Card disabled status="info" header={LanguageHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro speaks your language! Just start our locale settings and select the language you want. After logging
						out and in again, everything is exactly the way you want. We also offer a special tool to automatically
						install language packs for a variety of programs and notifies you about new translations for your favorite
						programs.
					</Text>
				</Card>
				<Card disabled status="warning" header={GraphicCardHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro comes with MHWD, the Manjaro Hardware Detection. If you need drivers for your hardware, just open
						it, click on “Auto Install” and wait until it’s finished. That’s it.
					</Text>
				</Card>
				<Card disabled status="danger" header={CoreHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Power-users and people who need special features of the Linux Kernel that don’t come with the default one,
						can just switch to a different Kernel with one click. Do you make music or need other realtime features?
						Just switch to an RT-Kernel. Do you need the newest improved open-source graphics drivers? Just switch to a
						newer one. Manjaro supports multiple installed Kernels at the same time. Just re-boot your system and make
						your selection in the boot menu.
					</Text>
				</Card>
				<Card disabled status="info" header={TravelHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						If you need to change your system’s timezone because you are on holiday or a business trip, we provide you
						with a handy tool, so you have more time to get things done or simply enjoy life.
					</Text>
				</Card>
			</ScrollView>
		</Layout>
	);
};

export const ConfiguredWithOneClickScreen = withStyles(ConfiguredWithOneClickScreenThemed, (theme) => ({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	sideContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	subContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: 48,
		height: 48,
	},
	sharp: {
		color: theme['color-primary-500'],
		paddingRight: 3,
	},
	description: {
		backgroundColor: 'rgba(53, 191, 92, 0.3)',
		marginTop: 10,
		marginHorizontal: 15,
		padding: 20,
	},
	image: {
		marginBottom: 10,
		width: Dimensions.get('window').width - 50,
		height: Dimensions.get('window').height / 2,
		resizeMode: 'contain',
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
