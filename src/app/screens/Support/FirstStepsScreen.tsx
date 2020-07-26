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
	const VirtualHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Icon pack="awesome" style={{ height: 24, tintColor: '#FCA326' }} name="window-maximize" />
				<Text category="h6">Using a virtual machine</Text>
			</Layout>
		</Layout>
	);
	const LiveHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Icon pack="awesome" style={{ height: 24, tintColor: '#AB47BC' }} name="usb" />
				<Text category="h6">Using a live-system</Text>
			</Layout>
		</Layout>
	);
	const InstallHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.subContainer, style]}>
				<Icon pack="awesome" style={{ height: 24, tintColor: '#FFA726' }} name="desktop" />
				<Text category="h6">Install Manjaro</Text>
			</Layout>
		</Layout>
	);
	return (
		<Layout style={[eva.style.container, style]}>
			<ScrollView>
				<Card>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Introduction
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
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
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
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
					<Card status="danger" header={VirtualHeader}>
						<Text appearance="hint">{'\u2B24'} Leaves your current system untouched.</Text>
						<Text appearance="hint">{'\u2B24'} Experiment without modifying your current setup.</Text>
						<Text appearance="hint">{'\u2B24'} Work parallel with Manjaro and your current system.</Text>
						<Text appearance="hint">{'\u2B24'} Manjaro runs slower due to emulation.</Text>
						<Text appearance="hint">{'\u2B24'} Emulation needs many system resources.</Text>
					</Card>
					<Text></Text>
					<Card status="basic" header={LiveHeader}>
						<Text appearance="hint">{'\u2B24'} Leaves your current system untouched.</Text>
						<Text appearance="hint">{'\u2B24'} Experiment without modifying your current setup.</Text>
						<Text appearance="hint">{'\u2B24'} No settings get stored on the medium.</Text>
						<Text appearance="hint">{'\u2B24'} Manjaro runs slower due to slower speed of DVD or USB.</Text>
					</Card>
					<Text></Text>
					<Card status="warning" header={InstallHeader}>
						<Text appearance="hint">{'\u2B24'} Always backup your data.</Text>
						<Text appearance="hint">{'\u2B24'} Install along side your current system or replace it.</Text>
					</Card>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Using a virtual machine
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						A virtual machine is a computer that runs “in” your current computer. If you just want to try or use Manjaro
						without rebooting your computer, you can set up a virtual machine. We will give you a quick step-by-step
						guide, but if you want to know more, visit our{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://wiki.manjaro.org/index.php?title=VirtualBox#Running_Manjaro_in_VirtualBox');
							}}
						>
							wiki
						</Text>
						. Keep in mind that if you use a virtual machine, you only wipe the machine, not your actual computer.
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						1. Download an application that allows creating virtual machines and install it.
					</Text>
					<Text></Text>
					<Text appearance="hint">
						{'\u2B24'}{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://www.virtualbox.org/');
							}}
						>
							VirtualBox
						</Text>
					</Text>
					<Text appearance="hint">
						{'\u2B24'}{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('http://www.vmware.com/');
							}}
						>
							VmWare Player
						</Text>
					</Text>
					<Text appearance="hint">
						{'\u2B24'}{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://www.qemu.org/');
							}}
						>
							Qemu
						</Text>
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						2. Create a virtual machine
					</Text>
					<Text></Text>
					<Text appearance="hint">{'\u2B24'} Select Linux.</Text>
					<Text appearance="hint">{'\u2B24'} At least 20-30GB virtual hard drive space.</Text>
					<Text appearance="hint">{'\u2B24'} At least 2GB RAM/Memory.</Text>
					<Text appearance="hint">{'\u2B24'} increase the graphics memory.</Text>
					<Text appearance="hint">{'\u2B24'} Enable 3D acceleration if possible.</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						3. Loading Manjaro
					</Text>
					<Text></Text>
					<Text appearance="hint">
						{'\u2B24'} Start the virtual machine and select the Manjaro ISO to be loaded into the virtual DVD drive.
					</Text>
					<Text appearance="hint">
						{'\u2B24'} Manjaro will now boot. Select Manjaro (Free drivers) or leave it until it’s automatically
						selected.
					</Text>
					<Text appearance="hint">{'\u2B24'} Manjaro now boots into the live environment.</Text>
					<Text appearance="hint">{'\u2B24'} Install Manjaro into the virtual machine.</Text>
					<Text appearance="hint">{'\u2B24'} Grab a coffee and wait for the instalation process to finish.</Text>
					<Text appearance="hint">{'\u2B24'} Go to the virtual machine settings and unload the Manjaro ISO.</Text>
					<Text appearance="hint">{'\u2B24'} All done. Reboot and enjoy.</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Now you can just start your virtual computer with Manjaro, play around with it and use software that is not
						well supported on other operating systems! Note that this is (while being virtual) an actual computer, so
						you have to shut down Manjaro just like all operating systems. If you want to know what you can do after
						installing Manjaro, give a look at our{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								//TODO:Change the link
								Linking.openURL('https://www.qemu.org/');
							}}
						>
							user guide
						</Text>{' '}
						and our{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://wiki.manjaro.org/index.php?title=Main_Page#Customisation_and_Configuration');
							}}
						>
							wiki
						</Text>
						.
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Making a Live-System
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						To be able to install or try Manjaro on your computer, you need to put it on a DVD or USB-Drive. Then the
						computer will start (or “boot”) from this medium into Manjaro’s live-system¹.
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Create a bootable USB-Stick
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Download an application that is able to create a bootable USB-Drive.
					</Text>
					<Text></Text>
					<Text appearance="hint">
						{'\u2B24'}{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://launchpad.net/win32-image-writer/');
							}}
						>
							ImageWriter
						</Text>{' '}
						or{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://rufus.akeo.ie/');
							}}
						>
							Rufus
						</Text>{' '}
						, see our{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File');
							}}
						>
							wiki
						</Text>{' '}
						for more information.
					</Text>
					<Text appearance="hint">{'\u2B24'} Use dd as copy option to make a working bootable USB-Stick.</Text>
					<Text appearance="hint">{'\u2B24'} Any data already in the USB stick will be lost.</Text>
					<Text appearance="hint">{'\u2B24'} Select the ISO and put Manjaro in.</Text>
					<Text appearance="hint">{'\u2B24'} Boot from USB</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Burn a DVD
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Download an application that is able to burn a disk.
					</Text>
					<Text appearance="hint">
						{'\u2B24'}{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('http://www.deepburner.com/');
							}}
						>
							DeepBurner
						</Text>
						, or if available the software that comes with your operating system
					</Text>
					<Text appearance="hint">
						{'\u2B24'}{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File');
							}}
						>
							Burn the Manjaro ISO to the DVD
						</Text>
					</Text>
					<Text appearance="hint">
						{'\u2B24'}{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://manjaro.org/support/firststeps/#booting-into-the-live-environment');
							}}
						>
							Boot from DVD
						</Text>
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Booting into the Live-System
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Boot from USB or DVD
					</Text>
					<Text appearance="hint">
						{'\u2B24'} Sometimes you need to configure your system to allow{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL(
									'https://www.howtogeek.com/129815/beginner-geek-how-to-change-the-boot-order-in-your-computers-bios/'
								);
							}}
						>
							booting
						</Text>
					</Text>
					<Text appearance="hint">
						{'\u2B24'}{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://wiki.manjaro.org/index.php?title=BIOS_and_UEFI');
							}}
						>
							BIOS and UEFI - Manjaro Wiki
						</Text>
					</Text>
					<Text appearance="hint">
						{'\u2B24'}{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								//TODO:change the url
								Linking.openURL('https://wiki.manjaro.org/index.php?title=BIOS_and_UEFI');
							}}
						>
							Manjaro User Guide
						</Text>
					</Text>
					<Text appearance="hint">{'\u2B24'} After booting you can choose your drivers.</Text>
					<Text appearance="hint">
						{'\u2B24'} Choose “proprietary” if you use a Nvidia graphics card or need wireless.
					</Text>
					<Text appearance="hint">
						{'\u2B24'} Choose “free” if you are using a virtual machine or know that everything will work without
						proprietary drivers.
					</Text>
					<Text appearance="hint">
						{'\u2B24'} For more information, have a look at{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								//TODO:change the url
								Linking.openURL('https://wiki.manjaro.org/index.php?title=BIOS_and_UEFI');
							}}
						>
							Manjaro User Guide
						</Text>
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Now you have booted into Manjaro’s live-environment and can begin to play around with it or proceed to
						install Manjaro on your computer (or the virtual machine). In the next section, you can find a quick
						step-by-step guide how to install Manjaro.
					</Text>
					<Text></Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Install Manjaro
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						There are many different ways to install Manjaro and the process depends heavily from your current hardware.
						If you want more detailed steps, you will find them in our{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								//TODO:change the url
								Linking.openURL('https://wiki.manjaro.org/index.php?title=BIOS_and_UEFI');
							}}
						>
							user guide
						</Text>
						. Here we will give you a rough outline how to install Manjaro. The installer offers plenty of options such
						as installing Manjaro alongside your current operating system. Experienced users also can partition
						manually.
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						We recommend to make backups of your important data before installing Manjaro on your hard drive. You can do
						this directly in the live-environment if you forgot it.
					</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Start the installer
					</Text>
					<Text appearance="hint">
						{'\u2B24'} After you boot, there’s a welcome-window that has an option to Install Manjaro.
					</Text>
					<Text appearance="hint">
						{'\u2B24'} If you closed the welcome-window, you can find it in the application menu as “Manjaro Welcome”.
					</Text>
					<Text appearance="hint">{'\u2B24'} Chose timezone, keyboard layout and language.</Text>
					<Text appearance="hint">{'\u2B24'} Determine where Manjaro should be installed.</Text>
					<Text appearance="hint">{'\u2B24'} Insert your account data.</Text>
					<Text appearance="hint">{'\u2B24'} Grab a coffee and wait until the installation is finished.</Text>
					<Text appearance="hint">{'\u2B24'} You can use the live-environment while you wait.</Text>
					<Text appearance="hint">{'\u2B24'} When instalation finish restart your machine.</Text>
					<Text></Text>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Congratulations! You have now installed Manjaro. If there are any problems, you can maybe find a solution
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								//TODO:change the url
								Linking.openURL('https://wiki.manjaro.org/index.php?title=BIOS_and_UEFI');
							}}
						>
							here
						</Text>
						, our{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								//TODO:change the url
								Linking.openURL('https://wiki.manjaro.org/index.php?title=BIOS_and_UEFI');
							}}
						>
							user guide
						</Text>{' '}
						or our{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								Linking.openURL('https://wiki.manjaro.org/');
							}}
						>
							wiki
						</Text>
						. Our{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								//TODO:change the url
								Linking.openURL('https://wiki.manjaro.org/index.php?title=BIOS_and_UEFI');
							}}
						>
							user guide
						</Text>{' '}
						also contains information how to use Manjaro. Also we recommend to visit our{' '}
						<Text
							style={{ color: '#1E88E5' }}
							onPress={() => {
								//TODO:change the url
								Linking.openURL('https://forum.manjaro.org/');
							}}
						>
							forums
						</Text>{' '}
						where people discuss about problems, new programs and make customizations like wallpapers.
					</Text>
					<Text> </Text>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						Glossary
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						Live-Environment / Live-System Manjaro and many other Linux distributions allow running the system directly
						from a USB-Drive or DVD. Those “Live-Enviroments” are completely functional systems and can be used as
						portable operating-system or to rescue data if something went wrong.
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
