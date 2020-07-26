import * as React from 'react';
import { ScrollView, Image, Dimensions, Linking } from 'react-native';
import { Text, Layout, Card, Icon, Avatar, Divider, Button } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

export interface UsefulForEveryoneProps {
	navigation: any;
	route: any;
}

const UsefulForEveryoneScreenThemed: React.FC<UsefulForEveryoneProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const ScientistsHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Text category="h6">Scientists</Text>
			</Layout>
		</Layout>
	);
	const GamersHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Text category="h6">Gamers</Text>
			</Layout>
		</Layout>
	);
	const TSHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Text category="h6">Teachers/Students</Text>
			</Layout>
		</Layout>
	);
	const DevelopersHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Text category="h6">Developers</Text>
			</Layout>
		</Layout>
	);
	const HomeUsersHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Text category="h6">Home Users</Text>
			</Layout>
		</Layout>
	);
	const ArtistsHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Text category="h6">Artists</Text>
			</Layout>
		</Layout>
	);
	return (
		<Layout style={[eva.style.container, style]}>
			<ScrollView>
				<Card disabled>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro is an efficient companion to serve your variety of needs and it is versatile to adapt to all of your
						needs. Our user base varies from home users to students & teachers, programmers & developers, professionals,
						art enthusiast, music lovers, multimedia professionals and many more, For a overview of all available
						applications visit{' '}
						<Text
							style={{ color: 'green' }}
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org');
							}}
						>
							discover.manjaro.org.
						</Text>
					</Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						We asked our users why they use Manjaro and what software they use to relax, learn or do their work. Here
						you can find an incomplete list of software, that in most cases is instantly available via the{' '}
						<Text
							style={{ color: 'green' }}
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org');
							}}
						>
							pamac
						</Text>{' '}
						repositories without the need to hunt them down or risking potential download of malware.
					</Text>
				</Card>

				<Card disabled status="warning" header={ScientistsHeader}>
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://www.latex-project.org/');
							}}
						>
							Latex
						</Text>
						<Text appearance="hint"> Create documents and more</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/texstudio');
							}}
						>
							Texstudio
						</Text>
						<Text appearance="hint"> Creating LaTeX documents</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/lyx');
							}}
						>
							Lyx
						</Text>
						<Text appearance="hint"> Easy-to-use GUI for LaTeX</Text>
					</Layout>
				</Card>

				<Card disabled status="danger" header={GamersHeader}>
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/packages/steam-manjaro');
							}}
						>
							Steam
						</Text>
						<Text appearance="hint"> Software store</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/0ad');
							}}
						>
							0 A.D.
						</Text>
						<Text appearance="hint"> Strategy game</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/playonlinux');
							}}
						>
							PlayOnLinux
						</Text>
						<Text appearance="hint"> Play Windows games</Text>
					</Layout>
				</Card>

				<Card disabled status="info" header={TSHeader}>
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/gcompris-qt');
							}}
						>
							Gcompris
						</Text>
						<Text appearance="hint"> Learning software</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/geogebra');
							}}
						>
							Geogebra
						</Text>
						<Text appearance="hint"> Geometry/mathematics</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/minuet');
							}}
						>
							Minuet
						</Text>
						<Text appearance="hint"> Teach/learn music</Text>
					</Layout>
				</Card>

				<Card disabled status="warning" header={DevelopersHeader}>
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/code');
							}}
						>
							Visual Studio Code
						</Text>
						<Text appearance="hint"> Code editing</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/kdevelop');
							}}
						>
							KDevelop
						</Text>
						<Text appearance="hint"> IDE</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/geany');
							}}
						>
							Geany
						</Text>
						<Text appearance="hint"> Text-Editor</Text>
					</Layout>
				</Card>

				<Card disabled status="danger" header={HomeUsersHeader}>
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/libreoffice-still');
							}}
						>
							LibreOffice
						</Text>
						<Text appearance="hint"> Complete office-suite</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/thunderbird');
							}}
						>
							Thunderbird
						</Text>
						<Text appearance="hint"> E-Mail client</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/firefox');
							}}
						>
							Firefox
						</Text>
						<Text appearance="hint"> Web browser</Text>
					</Layout>
				</Card>

				<Card disabled status="info" header={ArtistsHeader}>
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/krita');
							}}
						>
							Krita
						</Text>
						<Text appearance="hint"> Graphics editing, drawing</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/kdenlive');
							}}
						>
							Kdenlive
						</Text>
						<Text appearance="hint"> Video editing</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Layout style={[eva.style.sideContainer, style]}>
						<Icon style={[eva.style.icon, style]} fill="#1E88E5" name="info-outline" />
						<Text
							style={{ color: '#1E88E5' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://discover.manjaro.org/applications/ardour');
							}}
						>
							Ardour
						</Text>
						<Text appearance="hint"> Sound recording, mixing & editing</Text>
					</Layout>
				</Card>
			</ScrollView>
		</Layout>
	);
};

export const UsefulForEveryoneScreen = withStyles(UsefulForEveryoneScreenThemed, (theme) => ({
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
		width: 32,
		height: 32,
		marginHorizontal: 5,
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
		width: Dimensions.get('window').width / 1.1,
		height: Dimensions.get('window').height / 3,
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
