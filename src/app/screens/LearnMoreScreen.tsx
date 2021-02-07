import * as React from 'react';
import { ScrollView, Image, Dimensions, Linking, ViewStyle } from 'react-native';
import { Text, Layout, Card, Icon, Avatar, Divider, useTheme, EvaProp } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

export interface LearnMoreProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const LearnMoreScreenThemed: React.FC<LearnMoreProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const theme = useTheme();
	return (
		<Layout style={[eva.style!.container, style]}>
			<ScrollView>
				<Card disabled>
					<Layout style={[eva.style!.sideContainer, style]}>
						<Avatar
							style={[eva.style!.logo, style]}
							shape="square"
							size="small"
							source={require('../../../assets/logo.png')}
						/>
						<Text category="h5" style={{ textAlign: 'justify' }}>
							Manjaro
						</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Is an accessible, friendly, open-source operating system. Providing all the benefits of cutting-edge
						software combined with a focus on getting started quickly, automated tools to require less manual
						intervention, and help readily available when needed. Manjaro is suitable for both newcomers and experienced
						computer users.
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Unlike proprietary operating systems, you have full control over your hardware, without restrictions. This
						makes it ideal for people who want to learn how Linux works and how it is different to other operating
						systems. From this perspective, it is also suitable for beginners similar to the way an Arduino is an
						excellent entry-point to embedded hardware development.
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						It is easily possible to run many popular Windows applications, using compatibility software such as{' '}
						<Text
							style={{ color: theme['color-primary-400'] }}
							onPress={() => {
								Linking.openURL('https://www.winehq.org/');
							}}
						>
							Wine
						</Text>
						,
						<Text
							style={{ color: theme['color-primary-400'] }}
							onPress={() => {
								Linking.openURL('https://www.playonlinux.com/');
							}}
						>
							{' '}
							PlayonLinux
						</Text>{' '}
						or{' '}
						<Text
							style={{ color: theme['color-primary-400'] }}
							onPress={() => {
								Linking.openURL('https://www.protondb.com/');
							}}
						>
							Proton
						</Text>{' '}
						via{' '}
						<Text
							style={{ color: theme['color-primary-400'] }}
							onPress={() => {
								Linking.openURL('https://store.steampowered.com/about/');
							}}
						>
							Steam
						</Text>{' '}
						. The examples given here are far from comprehensive!
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Representing a perfect middle-ground for those who want good performance, full control, and cutting-edge
						software but also a degree of software stability.
					</Text>
					<Text></Text>

					<Layout style={[eva.style!.sideContainer, style]}>
						<Icon style={[eva.style!.icon, style]} fill="#1E88E5" name="credit-card-outline" />
						<Text category="h6" style={{ textAlign: 'justify' }}>
							Free is better
						</Text>
					</Layout>

					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro will always be completely free. We create it, so we can have a operating system that is easy to use
						and stable, you the user, are the main focus, we do not take control away from you and respect your privacy.
					</Text>
					<Text></Text>

					<Layout style={[eva.style!.sideContainer, style]}>
						<Icon style={[eva.style!.icon, style]} fill="#EC407A" name="download-outline" />
						<Text category="h6" style={{ textAlign: 'justify' }}>
							Install Anything
						</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						There are thousands of software applications available in the software center, including fully compatible
						equivalents of popular Windows software such as MS Office. Any additional software is also completely free.
						Searching for applications to install on the internet is not necessary.
					</Text>
					<Text></Text>

					<Layout style={[eva.style!!.sideContainer, style]}>
						<Icon style={[eva.style!!.icon, style]} fill="#AB47BC" name="people-outline" />
						<Text category="h6" style={{ textAlign: 'justify' }}>
							Great Community
						</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						We have a polite, friendly and cheerful{' '}
						<Text
							style={{ color: theme['color-primary-400'] }}
							onPress={() => {
								Linking.openURL('https://forum.manjaro.org/');
							}}
						>
							Forum
						</Text>
						, where everyone is welcoming and supportive. The forum is the right place to share knowledge and talk Linux
						with the community we love all it.
					</Text>
					<Text></Text>

					<Layout style={[eva.style!.sideContainer, style]}>
						<Icon style={[eva.style!.icon, style]} fill="#FFA726" name="hard-drive-outline" />
						<Text category="h6" style={{ textAlign: 'justify' }}>
							Availability
						</Text>
					</Layout>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Manjaro is available for 64 Bit architectures.{' '}
						<Text
							style={{ color: theme['color-primary-400'] }}
							onPress={() => {
								Linking.openURL('https://www.xfce.org/');
							}}
						>
							XFCE
						</Text>
						,{' '}
						<Text
							style={{ color: theme['color-primary-400'] }}
							onPress={() => {
								Linking.openURL('https://kde.org/');
							}}
						>
							KDE
						</Text>{' '}
						and{' '}
						<Text
							style={{ color: theme['color-primary-400'] }}
							onPress={() => {
								Linking.openURL('https://www.gnome.org/gnome-3/');
							}}
						>
							Gnome
						</Text>{' '}
						editions are officially supported. Other flavors, including editions for 32 Bit architectures are maintained
						by the community. ARM editions are specifically available for certain devices. Pre-built images can be
						downloaded.
					</Text>
				</Card>
			</ScrollView>
		</Layout>
	);
};

export const LearnMoreScreen = withStyles(LearnMoreScreenThemed, (theme) => ({
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
	logo: {
		marginHorizontal: 5,
	},
	image: {
		marginVertical: 10,
		width: Dimensions.get('window').width - 50,
		height: Dimensions.get('window').height / 2,
		overflow: 'visible',
		resizeMode: 'contain',
		backgroundColor: '#EBEBEB',
	},
}));
