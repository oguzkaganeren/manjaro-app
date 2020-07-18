import * as React from 'react';
import { ScrollView, Dimensions, Linking } from 'react-native';
import { Text, Layout, Card, Icon, Button, Modal, Divider } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import YoutubePlayer from 'react-native-youtube-iframe';
import * as rssParser from 'react-native-rss-parser';
export interface ConfiguredWithOneClickProps {
	navigation: any;
	route: any;
}

const XfceScreenThemed: React.FC<ConfiguredWithOneClickProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const playerRef = React.useRef(null);
	const [playing, setPlaying] = React.useState(false);
	const [downloadModalVisible, setDownloadModalVisible] = React.useState(false);

	const DownloadIcon = (props) => <Icon {...props} name="arrow-circle-down-outline" />;
	const ChooseHeader = (props) => (
		<Layout {...props}>
			<Layout style={[eva.style.sideContainer, style]}>
				<Text category="h4">XFCE</Text>
				<Button
					style={[eva.style.download, style]}
					onPress={() => setDownloadModalVisible(true)}
					appearance="outline"
					status="primary"
					accessoryLeft={DownloadIcon}
				>
					Download XFCE
				</Button>
			</Layout>
		</Layout>
	);
	var xfceUrls = [];
	React.useEffect(() => {
		fetch('https://osdn.net/projects/manjaro/storage/!rss')
			.then((response) => response.text())
			.then((responseData) => rssParser.parse(responseData))
			.then((rss) => {
				//console.log(typeof rss.items);
				rss.items.reduce(function (filtered, item) {
					//console.log(item.links[0].url);
					/*if (item.links[0].url.endsWith('.iso')) {
						console.log(item.links[0].url);
					}*/
					console.log(item);
					return filtered;
				}, []);
			});
	});

	return (
		<Layout style={[eva.style.container, style]}>
			<ScrollView>
				<Card header={ChooseHeader} disabled={true}>
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
			<Modal
				visible={downloadModalVisible}
				backdropStyle={[eva.style.backdrop, style]}
				onBackdropPress={() => setDownloadModalVisible(false)}
			>
				<Card disabled={true}>
					<Text category="h6">XFCE 64 bit version</Text>
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text>Only 64 bit is available for modern hardware</Text>
					<Text></Text>

					<Button
						onPress={() => {
							Linking.openURL(
								'https://osdn.net/projects/manjaro/storage/xfce/20.0.3/manjaro-xfce-20.0.3-200606-linux56.iso'
							);
						}}
						style={[eva.style.download, style]}
						appearance="outline"
						status="primary"
						accessoryLeft={DownloadIcon}
					>
						Download
					</Button>
					<Text></Text>
					<Text
						style={{ color: 'green' }}
						category="p1"
						onPress={() => {
							Linking.openURL(
								'https://osdn.net/projects/manjaro/storage/xfce/20.0.3/manjaro-xfce-20.0.3-200606-linux56.iso.torrent'
							);
						}}
					>
						Download Torrent
					</Text>
					<Text
						style={{ color: 'green' }}
						category="p1"
						onPress={() => {
							Linking.openURL(
								'https://osdn.net/projects/manjaro/storage/xfce/20.0.3/manjaro-xfce-20.0.3-200606-linux56.iso.sig'
							);
						}}
					>
						Download GPG signature
					</Text>
					<Text appearance="hint">SHA1: c44a2984aa2fada53c1db8c6b919b45152780489</Text>
				</Card>
			</Modal>
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
	backdrop: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
}));
