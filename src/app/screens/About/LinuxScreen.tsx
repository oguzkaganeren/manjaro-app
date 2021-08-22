import * as React from 'react';
import { ScrollView, ViewStyle, Dimensions, Linking } from 'react-native';
import { Text, Layout, Card, Icon, EvaProp, Divider, useTheme } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import globalStyle from './../../theme/GlobalStyle';
export interface LinuxProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const LinuxScreenThemed: React.FC<LinuxProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const theme = useTheme();
	return (
		<Layout style={[globalStyle.container, style]}>
			<ScrollView>
				<Card disabled>
					<Text category="h6" style={{ textAlign: 'justify' }}>
						What is Linux
					</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						<Text
							style={{ color: theme['color-primary-400'] }}
							onPress={() => {
								Linking.openURL('https://en.wikipedia.org/wiki/Linux');
							}}
						>
							Linux
						</Text>{' '}
						is the name of the kernel powering the GNU system. GNU/Linux, also called Linux is a free and{' '}
						<Text
							style={{ color: theme['color-primary-400'] }}
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
							style={{ color: theme['color-primary-400'] }}
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

export const LinuxScreen = withStyles(LinuxScreenThemed, (theme) => ({}));
