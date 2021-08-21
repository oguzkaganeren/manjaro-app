import * as React from 'react';
import { Text, Layout, useTheme, Icon, Input, BottomNavigationTab, Card, withStyles, Spinner, EvaProp } from '@ui-kitten/components';
import { Linking, Dimensions, ScrollView, useWindowDimensions, Image, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import HTML from "react-native-render-html";
import axios from 'axios';
export interface NewsScreenProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const NewsSingleScreenThemed: React.FC<NewsScreenProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const { idOfTopic } = props.route.params;
	const [singleTopicInfo, setSingleTopicInfo] = React.useState({ item: { post_stream: { posts: [{}] }, created_at: '' } });
	const [isLoading, setIsLoading] = React.useState(true);
	const contentWidth = useWindowDimensions().width;
	const theme = useTheme();
	const renderItemHeader = (headerProps, info) => (
		<Layout {...headerProps}>
			<Text category='h6'>
				{info.item.title}
			</Text>
		</Layout>
	);
	React.useEffect(() => {
		axios.get('https://forum.manjaro.org/t/' + idOfTopic + '.json').then(function (response) {
			//console.log(response);
			setIsLoading(false)
			setSingleTopicInfo({ item: response.data })

		}).catch(function (error) {
			// handle error
			//console.log(error);
		})
	}, [])
	const renderItemFooter = (footerProps, info) => (
		<BottomNavigationTab
			icon={(footerProps) => (
				<Layout style={[eva.style!.sideContainer, style]}>
					<Icon
						{...footerProps}
						name="eye-outline"
					/>
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.views}
					</Text>
					<Icon
						{...footerProps}
						name="heart-outline"
					/>
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.like_count}
					</Text>
					<Icon
						{...footerProps}
						name="message-circle-outline"
					/>
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.reply_count}
					</Text>
					<Icon
						{...footerProps}
						name="calendar-outline"
					/>
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.created_at.split('T')[0]}
					</Text>
				</Layout>
			)}
		/>
	);
	return (
		<Layout style={[eva.style!.container, style]}>
			{!isLoading ? (<ScrollView style={[eva.style!.scrollView, style]}><Card
				disabled
				status='success'
				header={headerProps => renderItemHeader(headerProps, singleTopicInfo)}
				footer={footerProps => renderItemFooter(footerProps, singleTopicInfo)}>

				<HTML source={{ html: singleTopicInfo.item.post_stream.posts[0].cooked }} listsPrefixesRenderers={{
					ul: (_htmlAttribs, _children, _convertedCSSStyles, passProps) => (
						<Text appearance="hint">{'\u2B24'} </Text>
					)
				}}
					ignoredTags={[ 'br', 'code', 'aside']}
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
						}
					}}
					contentWidth={contentWidth}
					ignoreNodesFunction={(node, parentTagName, parentIsText) => {
						if (typeof node.attribs !== "undefined") {
							if (typeof node.attribs.class !== "undefined") {
								if (node.attribs.class == "poll" || node.attribs.class == "informations" || node.attribs.class == "filename") {
									return true
								}
							}
						}
						return false
					}}
				/>



			</Card></ScrollView>) : (<Spinner status='success' />)}

		</Layout>
	);
};

export const NewsSingleScreen = withStyles(NewsSingleScreenThemed, (theme) => ({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	icon: {
		width: 16,
		height: 16,
	},
	sideContainer: {
		flexDirection: 'row',
		alignItems: 'center',

	},
	sharp: {
		color: theme['color-primary-500'],
		paddingRight: 3,
	},
	description: {
		backgroundColor: 'rgba(53, 191, 92, 0.1)',
		marginTop: 10,
		marginHorizontal: 15,
		padding: 20,
	},
	logo: {
		marginBottom: 10,
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
	image: {
		marginVertical: 10,
		width: Dimensions.get('window').width - 50,
		height: Dimensions.get('window').height / 3,
		overflow: 'visible',
		resizeMode: 'contain',
	},
	iconText: {
		marginRight: 20,
		marginLeft: 5
	},
	codeLayout: {
		width: Dimensions.get('window').width - 50,
		height: Dimensions.get('window').height / 2,
	},
	emoji: {
		width: 20,
		height: 20,
		overflow: 'visible',
	},
}));
