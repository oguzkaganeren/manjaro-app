import * as React from 'react';
import { Text, Layout, Modal, Icon, Input, BottomNavigationTab, Card, withStyles, Spinner } from '@ui-kitten/components';
import { Linking, Dimensions, ScrollView, useWindowDimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import HTML from "react-native-render-html";
import axios from 'axios';
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';
export interface NewsScreenProps {
	navigation: any;
	route: any;
}

const NewsSingleScreenThemed: React.FC<NewsScreenProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const { idOfTopic } = props.route.params;
	const [singleTopicInfo, setSingleTopicInfo] = React.useState({ item: { post_stream: { posts: [{}] }, created_at: '' } });
	const [isLoading, setIsLoading] = React.useState(true);
	const contentWidth = useWindowDimensions().width;

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
			console.log(error);
		})
	}, [])
	const renderItemFooter = (footerProps, info) => (
		<BottomNavigationTab
			icon={(footerProps) => (
				<Layout style={[eva.style.sideContainer, style]}>
					<Icon
						{...footerProps}
						name="eye-outline"
					/>
					<Text style={[eva.style.iconText, style]}>
						{info.item.views}
					</Text>
					<Icon
						{...footerProps}
						name="heart-outline"
					/>
					<Text style={[eva.style.iconText, style]}>
						{info.item.like_count}
					</Text>
					<Icon
						{...footerProps}
						name="message-circle-outline"
					/>
					<Text style={[eva.style.iconText, style]}>
						{info.item.reply_count}
					</Text>
					<Icon
						{...footerProps}
						name="calendar-outline"
					/>
					<Text style={[eva.style.iconText, style]}>
						{info.item.created_at.split('T')[0]}
					</Text>
				</Layout>
			)}
		/>
	);
	//TODO: add html code tag support
	return (
		<Layout style={[eva.style.container, style]}>
			{!isLoading ? (<ScrollView style={[eva.style.scrollView, style]}><Card
				disabled
				status='success'
				header={headerProps => renderItemHeader(headerProps, singleTopicInfo)}
				footer={footerProps => renderItemFooter(footerProps, singleTopicInfo)}>

				<HTML source={{ html: singleTopicInfo.item.post_stream.posts[0].cooked }} textSelectable={true} listsPrefixesRenderers={{
					ul: (_htmlAttribs, _children, _convertedCSSStyles, passProps) => (
						<Text appearance="hint">{'\u2B24'} </Text>
					)
				}}
					ignoredTags={[...IGNORED_TAGS, 'br', 'code']}

					renderers={{
						p: (htmlAttribs, children, convertedCSSStyles, passProps) => (<Text appearance="hint" style={{ textAlign: 'justify' }}>{children}</Text>),
						a: (htmlAttribs, children, convertedCSSStyles, passProps) => (<Text appearance="hint" onPress={() => {
							Linking.openURL(htmlAttribs.href);
						}} style={{ textAlign: 'justify' }}>{children}</Text>),
						img: (htmlAttribs, children, convertedCSSStyles, passProps) => (<Layout><Image style={[eva.style.image, style]} source={{
							uri: htmlAttribs.src
						}} /></Layout>),
						li: (htmlAttribs, children, convertedCSSStyles, passProps) => (<Text appearance="hint" style={{ textAlign: 'justify' }}>{children}</Text>),
						em: (htmlAttribs, children, convertedCSSStyles, passProps) => (<Text appearance="hint" style={{ textAlign: 'justify', fontStyle: 'italic' }}>{children}</Text>),


					}}
					contentWidth={contentWidth}
					ignoreNodesFunction={(node, parentTagName, parentIsText) => {
						if (typeof node.attribs !== "undefined") {
							if (typeof node.attribs.class !== "undefined") {
								if (node.attribs.class == "poll" || node.attribs.class == "informations") {
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
		color: 'rgba(255, 255, 255, 0.4)',
		marginRight: 20,
		marginLeft: 5
	},
	codeLayout: {
		width: Dimensions.get('window').width - 50,
		height: Dimensions.get('window').height / 2,
	}
}));
