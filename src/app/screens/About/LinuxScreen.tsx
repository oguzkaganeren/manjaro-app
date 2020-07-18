import * as React from 'react';
import { ScrollView, Image, Dimensions, Linking } from 'react-native';
import { Text, Layout, Card, Icon, Avatar, Divider, Button } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

export interface LinuxProps {
	navigation: any;
	route: any;
}

const LinuxScreenThemed: React.FC<LinuxProps> = (props) => {
	const { eva, style, ...restProps } = props;

	return (
		<Layout style={[eva.style.container, style]}>
			<ScrollView>
				<Card disabled>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						What is Linux
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						<Text
							style={{ color: 'green' }}
							onPress={() => {
								Linking.openURL('https://en.wikipedia.org/wiki/Linux');
							}}
						>
							Linux
						</Text>{' '}
						is the name of the kernel powering the GNU system. GNU/Linux, also called Linux is a free and{' '}
						<Text
							style={{ color: 'green' }}
							onPress={() => {
								Linking.openURL('https://en.wikipedia.org/wiki/Open-source_software');
							}}
						>
							open source
						</Text>{' '}
						operating system, that can be freely used and distributed.
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						{' '}
						The kernel can be seen as the bridge between software and hardware and the central module of the operating
						system, it is responsible for process management for application execution, memory management, allocation,
						and input output, device management through the use of device drivers and system call control.
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						{' '}
						Originally developed in 1991 by Finnish Programmer{' '}
						<Text
							style={{ color: 'green' }}
							onPress={() => {
								Linking.openURL('https://en.wikipedia.org/wiki/Linus_Torvalds');
							}}
						>
							Linus Torvalds
						</Text>
						, Linux is an exceptionally robust and reliable kernel, which combined with the GNU system is most commonly
						used for Internet servers, mobile phones, tablets mostly known as Android devices. Additionally, the use of
						GNU/Linux as an alternative operating system, for personal computers such as desktops or laptops, has also
						been growing over the years, with several million users having already discovered the benefits of it.
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Benefits of using Linux
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						It is highly efficient, very fast and any hardware device works out of the box, only on rare occasions you
						will need to install a device driver, The 64 bit version of Manjaro with the Xfce desktop, boots up in only
						a few seconds and uses only 200MB of memory to run. Linux systems are very secure and not affected by the
						huge amount of Windows viruses, trojans, worms or malware out there. Anti-virus software is not required.
					</Text>
				</Card>
			</ScrollView>
		</Layout>
	);
};

export const LinuxScreen = withStyles(LinuxScreenThemed, (theme) => ({
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
		marginVertical: 10,
		width: Dimensions.get('window').width - 50,
		height: Dimensions.get('window').height / 2,
		overflow: 'visible',
		resizeMode: 'contain',
		backgroundColor: '#EBEBEB',
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
