import * as React from 'react';
import { ScrollView, Dimensions, Linking, Image, ViewStyle } from 'react-native';
import { Text, Layout, Card, Icon, Button, Modal, Divider, withStyles, EvaProp, useTheme } from '@ui-kitten/components';
import YoutubePlayer from 'react-native-youtube-iframe';
import HTML from "react-native-render-html";
import globalStyle from './../../theme/GlobalStyle'
export interface ConfiguredWithOneClickProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
	responseJson: JSON;
}

const SingleScreenThemed: React.FC<ConfiguredWithOneClickProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const jsonData = props.responseJson;
	const playerRef = React.useRef(null);
	const [playing, setPlaying] = React.useState(false);
	const [downloadModalVisible, setDownloadModalVisible] = React.useState(false);
	const theme = useTheme();
	const DownloadIcon = (props) => <Icon {...props} name="arrow-circle-down-outline" />;
	function showModal() {
		setDownloadModalVisible(true)
	}
	const ChooseHeader = (subprops) => (
		<Layout {...subprops}>
			<Layout style={[globalStyle.sideContainer, style]}>
				<Text category="h4">{jsonData.name.substring(0, 7)}{jsonData.name.length > 7 ? '...' : ''}</Text>

				<Button
					style={[eva.style!.download, style]}
					onPress={showModal}
					status="primary"
					accessoryLeft={DownloadIcon}
				>
					Download {jsonData.Version}
				</Button>

			</Layout>
		</Layout>
	);

	return (
		<Layout style={[globalStyle.containerCentered, style]}>
			<ScrollView>
				<Card disabled header={ChooseHeader}>
					{
						jsonData.Youtube ? (
							<YoutubePlayer
								ref={playerRef}
								height={Dimensions.get('window').height / 4}
								width={Dimensions.get('window').width - 50}
								videoId={jsonData.Youtube}
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
								style={[eva.style!.image, style]}
								source={{
									uri:
										'https://hacked.manjaro.org/img/editions/' +
										jsonData.Screenshot, cache: 'only-if-cached'
								}}
							/>
						)
					}
					<Card disabled={true} status="warning">

						<HTML
							ignoredTags={[ 'br']}
							source={{ html: jsonData.content }}
							defaultWebViewProps={{ textSelectable: true }}
							listsPrefixesRenderers={{
								ul: (_htmlAttribs, _children, _convertedCSSStyles, passProps) => (
									<Text appearance="hint">{'\u2B24'} </Text>
								)
							}}
							tagsStyles={{
								p: {
									color: theme['color-basic-600'],
									textAlign: 'justify',
									marginTop: 5
								},
								li: {
									color: theme['color-basic-600'],
									textAlign: 'justify',
									marginTop: 5
								},
								em: {
									color: theme['color-basic-600'],
									textAlign: 'justify',
									fontStyle: 'italic'
								},
								h1: { color: theme['color-basic-600'], },
								h2: { color: theme['color-basic-600'], },
								h3: { color: theme['color-basic-600'], },
								h4: { color: theme['color-basic-600'], },
								h5: { color: theme['color-basic-600'], },
								h6: { color: theme['color-basic-600'], },
								a: { color: theme['color-primary-400'], }
							}}
							renderers={{
								img: (htmlAttribs, children, convertedCSSStyles, passProps) => {
									if (typeof htmlAttribs.class !== "undefined") {
										if (htmlAttribs.class == "emoji") {
											return (<Layout><Image style={[eva.style!.emoji, style]} source={{
												uri: htmlAttribs.src, cache: 'only-if-cached'
											}} /></Layout>)
										}
									}
									return (<Layout><Image style={[eva.style!.image, style]} source={{
										uri: htmlAttribs.src, cache: 'only-if-cached'
									}} /></Layout>)
								},

							}}
							imagesMaxWidth={Dimensions.get("window").width}
						/>
					</Card>
				</Card>
			</ScrollView>

			<Modal
				visible={downloadModalVisible}
				backdropStyle={[eva.style!.backdrop, style]}
				onBackdropPress={() => setDownloadModalVisible(false)}
			>
				<Card disabled>
					{jsonData ? (<Text category="h6">{jsonData.name}</Text>) : null}
					<Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
					<Text>Only 64 bit is available for modern hardware</Text>
					<Text></Text>

					<Button
						onPress={() => {
							Linking.openURL(jsonData.Download_x64);
						}}
						style={[eva.style!.download, style]}
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
							Linking.openURL(jsonData.Download_x64_Torrent);
						}}
					>
						Download Torrent
						</Text>
					<Text
						style={{ color: 'green' }}
						category="p1"
						onPress={() => {
							Linking.openURL(jsonData.Download_x64_Sig);
						}}
					>
						Download GPG signature
						</Text>
					<Text appearance="hint">SHA1: {jsonData.Download_x64_Checksum}</Text>
					<Text></Text>
					<Button
						onPress={() => {
							Linking.openURL(jsonData.Download_Minimal_x64);
						}}
						style={[eva.style!.download, style]}
						appearance="outline"
						status="primary"
						accessoryLeft={DownloadIcon}
					>
						Download Minimal Version of {jsonData.name}
					</Button>

					<Text></Text>
					<Text appearance="hint">
						Minimal SHA1: {jsonData.Download_Minimal_x64_Checksum}
					</Text>
					<Text
						style={{ color: 'green' }}
						category="p1"
						onPress={() => {
							Linking.openURL(jsonData.Download_Minimal_x64_Torrent);
						}}
					>
						Download Minimal Torrent
						</Text>
					<Text
						style={{ color: 'green' }}
						category="p1"
						onPress={() => {
							Linking.openURL(jsonData.Download_x64_Sig);
						}}
					>
						Download GPG signature
						</Text>
				</Card>
			</Modal>

		</Layout>
	);
};

export const SingleScreen = withStyles(SingleScreenThemed, (theme) => ({

	image: {
		width: Dimensions.get('window').width - 50,
		height: Dimensions.get('window').height / 3,
		resizeMode: 'contain',
	},
	download: {
		marginHorizontal: 15,
	},
	backdrop: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
}));
