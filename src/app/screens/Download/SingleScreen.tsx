import * as React from 'react';
import { ScrollView, Dimensions, Linking, Image } from 'react-native';
import { Text, Layout, Card, Icon, Button, Modal, Divider, Spinner } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useFetch } from '../../hooks/JsonFetcher';
import HTML from "react-native-render-html";
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';
export interface ConfiguredWithOneClickProps {
	navigation: any;
	route: any;
	jsonOrder: Number;
	type: String;
}

const SingleScreenThemed: React.FC<ConfiguredWithOneClickProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const playerRef = React.useRef(null);
	const [playing, setPlaying] = React.useState(false);
	const [downloadModalVisible, setDownloadModalVisible] = React.useState(false);
	const downloadJson = useFetch('https://manjaro.org/download/index.json', {});
	const DownloadIcon = (props) => <Icon {...props} name="arrow-circle-down-outline" />;

	const ChooseHeader = (subprops) => (
		<Layout {...subprops}>
			<Layout style={[eva.style.sideContainer, style]}>
				{downloadJson.response ? (<Text category="h4">{downloadJson.response.[props.type][props.jsonOrder].name.substring(0, 9)}{downloadJson.response.[props.type][props.jsonOrder].name.length > 9 ? '...' : ''}</Text>) : null}
				{downloadJson.response ? (
					<Button
						style={[eva.style.download, style]}
						onPress={() => setDownloadModalVisible(true)}
						appearance="outline"
						status="primary"
						accessoryLeft={DownloadIcon}
					>
						Download {downloadJson.response.[props.type][props.jsonOrder].Version}
					</Button>
				) : (
						<Spinner status="success" />
					)}
			</Layout>
		</Layout>
	);

	return (
		<Layout style={[eva.style.container, style]}>
			<ScrollView>
				<Card disabled header={ChooseHeader} disabled={true}>

					{downloadJson.response ? (
						downloadJson.response.[props.type][props.jsonOrder].Youtube ? (
							<YoutubePlayer
								ref={playerRef}
								height={200}
								width={Dimensions.get('window').width - 50}
								videoId={downloadJson.response.[props.type][props.jsonOrder].Youtube}
								play={playing}
								volume={50}
								playbackRate={1}
								initialPlayerParams={{
									cc_lang_pref: 'us',
									showClosedCaptions: true,
								}}
							/>
						) : (
								<Image
									style={[eva.style.image, style]}
									source={{
										uri:
											'https://hacked.manjaro.org/img/editions/' +
											downloadJson.response.[props.type][props.jsonOrder].Screenshot,
									}}
								/>
							)
					) : null}
				</Card>
				<Card disabled status="warning">
					{downloadJson.response ? (
						<HTML
							ignoredTags={[...IGNORED_TAGS, 'br']}
							html={downloadJson.response.[props.type][props.jsonOrder].content}
							textSelectable={true}
							listsPrefixesRenderers={{
								ul: (_htmlAttribs, _children, _convertedCSSStyles, passProps) => (
									<Text appearance="hint">{'\u2B24'} </Text>
								)
							}}
							renderers={{
								p: (htmlAttribs, children, convertedCSSStyles, passProps) => (<Text appearance="hint" style={{ textAlign: 'justify' }}>{children}</Text>),
								a: (htmlAttribs, children, convertedCSSStyles, passProps) => (<Text appearance="hint" onPress={() => {
									Linking.openURL(htmlAttribs.href);
								}} style={{ textAlign: 'justify' }}>{children}</Text>),

								li: (htmlAttribs, children, convertedCSSStyles, passProps) => (<Text appearance="hint" style={{ textAlign: 'justify' }}>{children}</Text>),

							}}
							imagesMaxWidth={Dimensions.get("window").width}
						/>) : null}
				</Card>
			</ScrollView>
			{downloadJson.response ? (
				<Modal
					visible={downloadModalVisible}
					backdropStyle={[eva.style.backdrop, style]}
					onBackdropPress={() => setDownloadModalVisible(false)}
				>
					<Card disabled>
						{downloadJson.response ? (<Text category="h6">{downloadJson.response.[props.type][props.jsonOrder].name}</Text>) : null}
						<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
						<Text>Only 64 bit is available for modern hardware</Text>
						<Text></Text>

						<Button
							onPress={() => {
								Linking.openURL(downloadJson.response.[props.type][props.jsonOrder].Download_x64);
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
								Linking.openURL(downloadJson.response.[props.type][props.jsonOrder].Download_x64_Torrent);
							}}
						>
							Download Torrent
						</Text>
						<Text
							style={{ color: 'green' }}
							category="p1"
							onPress={() => {
								Linking.openURL(downloadJson.response.[props.type][props.jsonOrder].Download_x64_Sig);
							}}
						>
							Download GPG signature
						</Text>
						<Text appearance="hint">SHA1: {downloadJson.response.[props.type][props.jsonOrder].Download_x64_Checksum}</Text>
						<Text></Text>
						<Button
							onPress={() => {
								Linking.openURL(downloadJson.response.[props.type][props.jsonOrder].Download_Minimal_x64);
							}}
							style={[eva.style.download, style]}
							appearance="outline"
							status="primary"
							accessoryLeft={DownloadIcon}
						>
							Download Minimal Version of {downloadJson.response.[props.type][props.jsonOrder].name}
						</Button>

						<Text></Text>
						<Text appearance="hint">
							Minimal SHA1: {downloadJson.response.[props.type][props.jsonOrder].Download_Minimal_x64_Checksum}
						</Text>
						<Text
							style={{ color: 'green' }}
							category="p1"
							onPress={() => {
								Linking.openURL(downloadJson.response.[props.type][props.jsonOrder].Download_Minimal_x64_Torrent);
							}}
						>
							Download Minimal Torrent
						</Text>
						<Text
							style={{ color: 'green' }}
							category="p1"
							onPress={() => {
								Linking.openURL(downloadJson.response.[props.type][props.jsonOrder].Download_x64_Sig);
							}}
						>
							Download GPG signature
						</Text>
					</Card>
				</Modal>
			) : null}
		</Layout>
	);
};

export const SingleScreen = withStyles(SingleScreenThemed, (theme) => ({
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