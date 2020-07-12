import * as React from 'react';
import { ScrollView, Dimensions, Linking } from 'react-native';
import { Text, Layout, Card, Icon, Button } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import YoutubePlayer from 'react-native-youtube-iframe';
export interface ConfiguredWithOneClickProps {
	navigation: any;
	route: any;
}

const XfceScreenThemed: React.FC<ConfiguredWithOneClickProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const playerRef = React.useRef(null);
	const [playing, setPlaying] = React.useState(false);
	const DownloadIcon = (props) => <Icon {...props} name="arrow-circle-down-outline" />;
	const ChooseHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Text category="h4">XFCE</Text>
				<Button
					style={[eva.style.download, style]}
					onPress={() => {
						props.navigation.navigate('DownloadScreen');
					}}
					appearance="outline"
					status="primary"
					accessoryLeft={DownloadIcon}
				>
					Download XFCE
				</Button>
			</Layout>
		</Layout>
	);

	return (
		<Layout style={[eva.style.container, style]}>
			<ScrollView>
				<Card header={ChooseHeader}>
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						For people who want a reliable and fast desktop
					</Text>
					<Text></Text>
					<YoutubePlayer
						ref={playerRef}
						height={200}
						width={Dimensions.get('window').width - 50}
						videoId={'zb_9tc-DiIs'}
						play={playing}
						volume={50}
						playbackRate={1}
						initialPlayerParams={{
							cc_lang_pref: 'us',
							showClosedCaptions: true,
						}}
					/>
				</Card>
				<Card status="warning">
					<Text appearance="hint" style={{ textAlign: 'justify' }}>
						This edition is supported by the Manjaro team and comes with XFCE, a reliable desktop with high
						configurability. Xfce is a lightweight desktop environment for UNIX-like operating systems. It aims to be
						fast and low on system resources, while still being visually appealing and user friendly. Xfce embodies the
						traditional UNIX philosophy of modularity and re-usability. It consists of a number of components that
						provide the full functionality one can expect of a modern desktop environment. They are packaged separately
						and you can pick among the available packages to create the optimal personal working environment. If you are
						looking for older images check the{' '}
						<Text
							style={{ color: 'green' }}
							category="h6"
							onPress={() => {
								Linking.openURL('https://osdn.net/projects/manjaro-archive/storage/xfce/');
							}}
						>
							XFCE
						</Text>{' '}
						archive.
					</Text>
				</Card>
			</ScrollView>
		</Layout>
	);
};

export const XfceScreen = withStyles(XfceScreenThemed, (theme) => ({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	sideContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
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
