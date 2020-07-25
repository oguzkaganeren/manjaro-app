import * as React from 'react';
import { ScrollView, Image, Dimensions, Linking } from 'react-native';
import { Text, Layout, Card, Icon, Avatar, Divider, Button } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';

export interface FirstStepsProps {
	navigation: any;
	route: any;
}
/**
 * Props first steps screen themed
 * @param props
 * @returns
 */
const FirstStepsScreenThemed: React.FC<FirstStepsProps> = (props) => {
	const { eva, style, ...restProps } = props;

	return (
		<Layout style={[eva.style.container, style]}>
			<ScrollView>
				<Card>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Introduction
					</Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						After you{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								props.navigation.navigate('DownloadScreen');
							}}
						>
							downloaded
						</Text>{' '}
						Manjaro. This guide covers the basic’s, If you want more information look into the{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								//TODO: Change the onpress navigate
								props.navigation.navigate('DownloadScreen');
							}}
						>
							Manjaro User Guide
						</Text>{' '}
						or the{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://wiki.manjaro.org/');
							}}
						>
							Manjaro Wiki
						</Text>
						.
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						You downloaded Manjaro as an ISO file. An ISO file contains all files Manjaro needs to start an installation
						compressed into a handy file, which you can then use to make a{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File');
							}}
						>
							DVD
						</Text>{' '}
						or{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL(
									'https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File#Writing_to_a_USB_Stick_in_Linux'
								);
							}}
						>
							USB-Stick
						</Text>{' '}
						that can be run by your computer. This file can be directly used by a virtual machine if you don’t want to
						try out Manjaro on your actual computer, yet.
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Different ways to try Manjaro
					</Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						To try out Manjaro, you can either directly load it from a DVD or USB-Drive or use a{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://en.wikipedia.org/wiki/Virtual_machine');
							}}
						>
							USB-Stick
						</Text>{' '}
						if you are unsure or want to be able to use your current operating-system without{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://en.wikipedia.org/wiki/Multi-booting');
							}}
						>
							dual-booting
						</Text>
						. Here you can find a list of all options you have and their pros and cons.
					</Text>
				</Card>
			</ScrollView>
		</Layout>
	);
};

export const FirstStepsScreen = withStyles(FirstStepsScreenThemed, (theme) => ({
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
