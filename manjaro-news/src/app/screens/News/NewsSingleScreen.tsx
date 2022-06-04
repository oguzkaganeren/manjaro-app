import * as React from 'react';
import {
	Text,
	Layout,
	useTheme,
	Icon,
	Input,
	BottomNavigationTab,
	Card,
	withStyles,
	EvaProp,
} from '@ui-kitten/components';
import { Linking, Dimensions, ScrollView, useWindowDimensions, Image, ViewStyle } from 'react-native';
import HTML, { HTMLElementModel, HTMLContentModel } from 'react-native-render-html';
import axios from 'axios';
import { PlaceHolderComponent } from '../../components/Public/PlaceHolderComponent';
export interface NewsScreenProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const NewsSingleScreenThemed: React.FC<NewsScreenProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const { idOfTopic } = props.route.params;
	const [singleTopicInfo, setSingleTopicInfo] = React.useState({
		item: { post_stream: { posts: [{}] }, created_at: '' },
	});
	const [isLoading, setIsLoading] = React.useState(true);
	const contentWidth = useWindowDimensions().width;
	const theme = useTheme();

	const renderItemHeader = (headerProps, info) => (
		<Layout {...headerProps}>
			<Text category="h6">{info.item.title}</Text>
		</Layout>
	);
	const customHTMLElementModels = {
		details: HTMLElementModel.fromCustomModel({
			tagName: 'details',
			mixedUAStyles: {
				color: theme['color-basic-600'],
			},
			contentModel: HTMLContentModel.textual,
		}),
		summary: HTMLElementModel.fromCustomModel({
			tagName: 'summary',
			mixedUAStyles: {
				color: theme['color-basic-600'],
			},
			contentModel: HTMLContentModel.textual,
		}),
		code: HTMLElementModel.fromCustomModel({
			tagName: 'code',
			mixedUAStyles: {
				color: theme['color-basic-600'],
				backgroundColor: theme['color-basic-900'],
				borderRadius: 5,
				padding: 10,
			},
			contentModel: HTMLContentModel.textual,
		}),
	};
	const defaultTextProps = {
		selectable: true,
	};
	React.useEffect(() => {
		axios
			.get('https://forum.manjaro.org/t/' + idOfTopic + '.json')
			.then(function (response) {
				setSingleTopicInfo({ item: response.data });
				setIsLoading(false);
			})
			.catch(function (error) {
				// handle error
				//console.log(error);
			});
	}, []);
	const renderItemFooter = (footerProps, info) => (
		<BottomNavigationTab
			icon={(footerProps) => (
				<Layout style={[eva.style!.sideContainer, style]}>
					<Icon {...footerProps} name="eye-outline" />
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.views}
					</Text>
					<Icon {...footerProps} name="heart-outline" />
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.like_count}
					</Text>
					<Icon {...footerProps} name="message-circle-outline" />
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.reply_count}
					</Text>
					<Icon {...footerProps} name="calendar-outline" />
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.created_at.split('T')[0]}
					</Text>
				</Layout>
			)}
		/>
	);
	return (
		<Layout style={[eva.style!.container, style]}>
			{!isLoading ? (
				<ScrollView style={[eva.style!.scrollView, style]}>
					<Card
						disabled
						status="success"
						header={(headerProps) => renderItemHeader(headerProps, singleTopicInfo)}
						footer={(footerProps) => renderItemFooter(footerProps, singleTopicInfo)}
					>
						<HTML
							source={{ html: singleTopicInfo.item.post_stream.posts[0].cooked }}
							ignoredDomTags={['br', 'aside', 'svg']}
							ignoredStyles={['height', 'width']}
							defaultTextProps={defaultTextProps}
							baseStyle={{ marginRight: 40 }}
							tagsStyles={{
								p: {
									color: theme['color-basic-600'],
								},
								li: {
									color: theme['color-basic-600'],
								},
								em: {
									color: theme['color-basic-600'],
									fontStyle: 'italic',
								},
								h1: { color: theme['color-basic-600'] },
								h2: { color: theme['color-basic-600'] },
								h3: { color: theme['color-basic-600'] },
								h4: { color: theme['color-basic-600'] },
								h5: { color: theme['color-basic-600'] },
								h6: { color: theme['color-basic-600'] },
								a: { color: theme['color-primary-400'] },
								ul: { color: theme['color-basic-600'] },
							}}
							enableExperimentalMarginCollapsing={true}
							contentWidth={contentWidth}
							customHTMLElementModels={customHTMLElementModels}
							ignoreDomNode={(node, parentTagName) => {
								if (typeof node.attribs !== 'undefined') {
									if (typeof node.attribs.class !== 'undefined') {
										if (
											node.attribs.class === 'poll' ||
											node.attribs.class === 'informations' ||
											node.attribs.class === 'filename'
										) {
											return true;
										}
									}
								}
								return false;
							}}
						/>
					</Card>
				</ScrollView>
			) : (
				<PlaceHolderComponent {...props} />
			)}
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
	description: {
		backgroundColor: 'rgba(53, 191, 92, 0.1)',
		marginTop: 10,
		marginHorizontal: 15,
		padding: 20,
	},
	buttonContainer: {
		flexDirection: 'row',
		padding: 20,
	},
	download: {
		marginHorizontal: 15,
	},
	iconText: {
		marginRight: 20,
		marginLeft: 5,
	},
	scrollView: {
		flexGrow: 1,
	},
}));
