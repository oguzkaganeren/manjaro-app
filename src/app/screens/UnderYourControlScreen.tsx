import * as React from 'react';
import { ScrollView } from 'react-native';
import { Text, Layout, Card, Icon } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

export interface UnderYourControlProps {
	navigation: any;
	route: any;
}

const UnderYourControlScreenThemed: React.FC<UnderYourControlProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const ChangeHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="options-2-outline" />
				<Text category="h6">Change everything you need</Text>
			</Layout>
		</Layout>
	);
	const ControlYourPCHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Icon style={[eva.style.icon, style]} fill="#EC407A" name="settings-2-outline" />
				<Text category="h6">Control Your PC</Text>
			</Layout>
		</Layout>
	);
	const UpdateHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Icon style={[eva.style.icon, style]} fill="#AB47BC" name="download-outline" />
				<Text category="h6">Update when you want</Text>
			</Layout>
		</Layout>
	);
	const YourDataHeaderHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Icon style={[eva.style.icon, style]} fill="#FFA726" name="shield-outline" />
				<Text category="h6">Your data not ours</Text>
			</Layout>
		</Layout>
	);
	return (
		<Layout style={[eva.style.container, style]}>
			<ScrollView>
				<Card status="primary" header={ChangeHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Every person is different and needs an operating system that doesn’t try to enforce a specific workflow,
						visual style or certain programs. Manjaro comes with default settings, that we believe are helpful to most
						users. But as with most Linux distributions, you still have every option to configure, change, remove or
						replace whatever you like. Most of these options are directly available via an easy to use configuration
						program.
					</Text>
				</Card>
				<Card status="warning" header={ControlYourPCHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						As like many other Linux distributions, we believe that privacy, security and keeping control are among the
						most valuable things for a user. We have included some clever tools to accomplish everything needed to make
						room for actual work, entertainment and relaxation. But you, the user, will always be in control of your own
						computer. It’s your hardware and your operating system.
					</Text>
				</Card>
				<Card status="danger" header={UpdateHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						When updates are available Manjaro will just show an unobtrusive notification. If you have important work to
						do, are currently in a ranked game or watching a movie, you can just hide it with one click. “Not now” for
						us still means that you don’t have time and don’t want to update right now. There are no hidden downloads or
						automatic restarts. Manjaro does exactly what you want.
					</Text>
				</Card>
				<Card status="info" header={YourDataHeaderHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro does not send any data to anybody. Why should it? It’s your data and you decide what you want to do
						with it. You can decide if you want to use services that finance themselves with the data you generate. But
						you also can decide to secure, hide and protect your data and use open source software which is directly
						available in Manjaro’s repositories and has been additionally checked by the package maintainer.
					</Text>
				</Card>
			</ScrollView>
		</Layout>
	);
};

export const UnderYourControlScreen = withStyles(UnderYourControlScreenThemed, (theme) => ({
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
