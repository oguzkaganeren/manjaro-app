import * as React from 'react';
import { ScrollView, ViewStyle, ViewProps } from 'react-native';
import { Text, Layout, Card, Icon, Avatar, EvaProp, CardProps, withStyles, LayoutProps } from '@ui-kitten/components';

export interface TeamProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const TeamScreenThemed: React.FC<TeamProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const PhilipHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/philip.jpg', cache: 'only-if-cached'

					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, style]}>
					Philip Müller{'\n'}
					<Text category="s2">Project Lead Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DE.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const BernhardHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/bernhard.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, style]}>
					Bernhard Landauer{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/AT.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const GuillaumeHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style!.subHeader, style]}>
					Guillaume Benoit{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/FR.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const StefanoHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/stefano.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Stefano Capitani{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/IT.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const FredeHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Frede Hundewadt{'\n'}
					<Text category="s2">DevOps | Engineer | SysAdmin</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DK.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const MattiHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/matti.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Matti Hyttinen{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/FI.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const DanHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/dan.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Dan Johansen{'\n'}
					<Text category="s2">ARM Lead Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DK.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const JoshHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Josh Crowder{'\n'}
					<Text category="s2">ARM Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/US.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const VitorHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/vitor.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Vitor Lopes{'\n'}
					<Text category="s2">Web Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/PT.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const HelmutHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/helmut.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Helmut Stult{'\n'}
					<Text category="s2">Developer | Speaker</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DE.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const BogdanHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/bogan.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Bogdan Covaciu{'\n'}
					<Text category="s2">Designer | Illustrator</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/RO.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const ArtemHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/artem.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Artem Grinev{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/RU.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const OguzHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/oguz.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Oğuz Kağan Eren{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/TR.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const TobiasHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/tobias.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Tobias Mädel{'\n'}
					<Text category="s2">ARM Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DE.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const SchrammHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Tobias Schramm{'\n'}
					<Text category="s2">ARM Kernel Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DE.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const FurkanHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Furkan Kardame{'\n'}
					<Text category="s2">ARM Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/IN.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const RayHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Ray Sherwin{'\n'}
					<Text category="s2">ARM Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/US.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);

	const MarkHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Mark Wagie{'\n'}
					<Text category="s2">Package Maintainer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style!.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/US.png', cache: 'only-if-cached'
					}}
				/>
			</Layout>
		</Layout>
	);
	const CoffeeHeader = (props: ViewProps) => (
		<Layout {...props}>
			<Layout style={[eva.style!.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style!.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/coffee.jpg', cache: 'only-if-cached'
					}}
				/>
				<Text category="h6" style={[eva.style!.subHeader, { textAlign: 'center' }]}>
					Coffee{'\n'}
					<Text category="s2">Motivator</Text>
				</Text>
			</Layout>
		</Layout>
	);
	return (
		<Layout style={[eva.style!.container, style]}>
			<ScrollView>
				<Card disabled>
					<Text category="h6" style={{ textAlign: 'center' }}>
						Meet Our Awesome Team
					</Text>
					<Text category="h6" style={{ textAlign: 'center' }}>
						We all do our part in bringing Manjaro to your life.
					</Text>
				</Card>
				<Card disabled status="primary" header={PhilipHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Started the project together with Roland and Guillaume back in 2011. In mid 2013 Manjaro was still in beta
						stage! Now he is working with the community to build an amazing Linux distribution.
					</Text>
				</Card>
				<Card disabled status="primary" header={BernhardHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Coordinating Community Editions with a focus on Cinnamon, Deepin and i3. He is involved in our development
						tools, package maintaining and optimisation within our hardware projects.
					</Text>
				</Card>
				<Card disabled status="primary" header={GuillaumeHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						He is working on libpamac, Pamac Gtk, libpamac Python bindings, and everything Gnome related.
					</Text>
				</Card>
				<Card disabled status="primary" header={StefanoHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Supporting the Development in multiple ways. Gnome is his daily desktop environment. Talk to him about
						packaging, Gnome, Budgie and GTK Themes.
					</Text>
				</Card>
				<Card disabled status="primary" header={FredeHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Works on Openbox, lxde, lxqt editions also maintains pacman-mirrors, manjaro-application-utility and does
						forum support.
					</Text>
				</Card>
				<Card disabled status="primary" header={MattiHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Works on manjaro-architect and gnome-layout-switcher. Maintains Bspwm edition and related packages, while
						also lending a helping hand on the Gnome edition.
					</Text>
				</Card>
				<Card disabled status="primary" header={DanHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Works on ARM editions including tools and infrastructure.
					</Text>
				</Card>
				<Card disabled status="primary" header={JoshHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						He collaborates on ARM editions, tools and infrastructure.
					</Text>
				</Card>
				<Card disabled status="primary" header={VitorHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Maintains manjaro.org/Discover WEB Service/JAK backend, some occasional packaging and a conceptual DE.
					</Text>
				</Card>
				<Card disabled status="primary" header={HelmutHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Speaker at Linux Events in Germany and Austria. He also collaborates on the Cinnamon edition, and develops
						Manjaro backup and security solutions.
					</Text>
				</Card>
				<Card disabled status="primary" header={BogdanHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Joined the Manjaro artwork team with energetic and passionate involvement.
					</Text>
				</Card>
				<Card disabled status="primary" header={ArtemHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						He is involved in our development tools, codes on Pamac-QT and other Manjaro Software.
					</Text>
				</Card>
				<Card disabled status="primary" header={OguzHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Works on website, documentation and some related native apps.
					</Text>
				</Card>
				<Card disabled status="primary" header={TobiasHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Works on ARM support, focused on the Pinebook Pro.
					</Text>
				</Card>
				<Card disabled status="primary" header={SchrammHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Wrote mainline Linux kernel support for the Pinebook Pro, hardware and electronics debugging, works on ARM
						device support.
					</Text>
				</Card>
				<Card disabled status="primary" header={FurkanHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Collaborates on ARM editions, tools and infrastructure.
					</Text>
				</Card>
				<Card disabled status="primary" header={RayHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Maintains the Raspberry Pi devices, the Raspberry Pi kernels and some of the Edition profiles.
					</Text>
				</Card>
				<Card disabled status="primary" header={MarkHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Helps keep your software fresh and stable, assists with GNOME development.
					</Text>
				</Card>
				<Card disabled status="primary" header={CoffeeHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						I keep the team sharp, they start working when I do.
					</Text>
				</Card>
			</ScrollView>
		</Layout>
	);
};

export const TeamScreen = withStyles(TeamScreenThemed, (theme) => ({
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
	avatar: {
		marginHorizontal: 10,
	},
	flag: {
		marginHorizontal: 15,
	},
	buttonContainer: {
		flexDirection: 'row',
		padding: 20,
	},
	subHeader: {
		lineHeight: 25,
	},
	download: {
		marginHorizontal: 15,
	},
	learnMore: {
		marginHorizontal: 15,
	},
}));
