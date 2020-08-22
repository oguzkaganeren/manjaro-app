import * as React from 'react';
import { ScrollView } from 'react-native';
import { Text, Layout, Card, Icon, Avatar } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

export interface TeamProps {
	navigation: any;
	route: any;
}

const TeamScreenThemed: React.FC<TeamProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const PhilipHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/philip.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, style]}>
					Philip Müller{'\n'}
					<Text category="s2">Project Lead Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DE.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const BernhardHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/bernhard.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, style]}>
					Bernhard Landauer{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/AT.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const GuillaumeHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style.subHeader, style]}>
					Guillaume Benoit{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/FR.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const StefanoHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/stefano.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Stefano Capitani{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/IT.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const FredeHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Frede Hundewadt{'\n'}
					<Text category="s2">DevOps | Engineer | SysAdmin</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DK.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const MattiHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/matti.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Matti Hyttinen{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/FI.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const DanHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/dan.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Dan Johansen{'\n'}
					<Text category="s2">ARM Lead Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DK.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const JoshHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Josh Crowder{'\n'}
					<Text category="s2">ARM Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/US.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const VitorHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/vitor.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Vitor Lopes{'\n'}
					<Text category="s2">Web Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/PT.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const HelmutHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/helmut.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Helmut Stult{'\n'}
					<Text category="s2">Developer | Speaker</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DE.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const BogdanHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/bogan.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Bogdan Covaciu{'\n'}
					<Text category="s2">Designer | Illustrator</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/RO.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const ArtemHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/artem.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Artem Grinev{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/RU.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const OguzHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/oguz.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Oğuz Kağan Eren{'\n'}
					<Text category="s2">Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/TR.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const TobiasHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/tobias.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Tobias Mädel{'\n'}
					<Text category="s2">ARM Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DE.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const SchrammHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Tobias Schramm{'\n'}
					<Text category="s2">ARM Kernel Developer</Text>
				</Text>
				<Avatar
					shape="rounded"
					size="tiny"
					style={[eva.style.flag, style]}
					source={{
						uri: 'https://manjaro.org/img/flags/DE.png',
					}}
				/>
			</Layout>
		</Layout>
	);
	const FurkanHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Furkan Kardame{'\n'}
					<Text category="s2">ARM Developer</Text>
				</Text>
			</Layout>
		</Layout>
	);
	const RayHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={require('../../../../assets/logo.png')}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Ray Sherwin{'\n'}
					<Text category="s2">ARM Developer</Text>
				</Text>
			</Layout>
		</Layout>
	);
	const CoffeeHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Avatar
					shape="round"
					size="giant"
					style={[eva.style.avatar, style]}
					source={{
						uri: 'https://manjaro.org/img/team/coffee.jpg',
					}}
				/>
				<Text category="h6" style={[eva.style.subHeader, { textAlign: 'center' }]}>
					Coffee{'\n'}
					<Text category="s2">Motivator</Text>
				</Text>
			</Layout>
		</Layout>
	);
	return (
		<Layout style={[eva.style.container, style]}>
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
						Works on Pamac-QT
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
