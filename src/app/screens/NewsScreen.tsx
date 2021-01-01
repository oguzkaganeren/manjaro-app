import * as React from 'react';
import { Text, Layout, Modal, Icon, List, BottomNavigationTab, Card, withStyles } from '@ui-kitten/components';
import { Image, Dimensions, ScrollView, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import HTML from "react-native-render-html";
import axios from 'axios';
export interface NewsScreenProps {
	navigation: any;
	route: any;
}

const NewsScreenThemed: React.FC<NewsScreenProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const [allFeed, setAllFeed] = React.useState([]);
	const [singleTopicInfo, setSingleTopicInfo] = React.useState({ item: { post_stream: { posts: [{}] } } });
	const [modalVisible, setModalVisible] = React.useState(false);
	const contentWidth = useWindowDimensions().width;
	function getStableJson() {
		return axios.get('https://forum.manjaro.org/c/announcements/stable-updates/12.json');
	}
	React.useEffect(() => {
		Promise.all([getStableJson()])
			.then(function (results) {
				console.log(results[0].data);
				setAllFeed(Object.values(results[0].data.topic_list.topics))
			});
	}, [])
	const renderItemHeader = (headerProps, info) => (
		<Layout {...headerProps}>
			<Text category='h6'>
				{info.item.title}
			</Text>
		</Layout>
	);
	const onPressTopic = (idOfTopic) => {
		axios.get('https://forum.manjaro.org/t/' + idOfTopic + '.json').then(function (response) {
			//console.log(response);
			setSingleTopicInfo({ item: response.data })
			setModalVisible(true);
		}).catch(function (error) {
			// handle error
			console.log(error);
		})
	}
	const renderItemFooter = (footerProps, info) => (
		<BottomNavigationTab
			icon={(props) => (
				<Layout style={[eva.style.sideContainer, style]}>
					<Icon
						{...props}
						name="eye-outline"
					/>
					<Text style={[eva.style.iconText, style]}>
						{info.item.views}
					</Text>
					<Icon
						{...props}
						name="heart-outline"
					/>
					<Text style={[eva.style.iconText, style]}>
						{info.item.like_count}
					</Text>
					<Icon
						{...props}
						name="message-circle-outline"
					/>
					<Text style={[eva.style.iconText, style]}>
						{info.item.reply_count}
					</Text>
					<Icon
						{...props}
						name="calendar-outline"
					/>
					<Text style={[eva.style.iconText, style]}>
						{info.item.created_at.split('T')[0]}
					</Text>
				</Layout>
			)}
		/>
	);

	const renderItem = (info) => (
		<TouchableOpacity
			onPress={() => onPressTopic(info.item.id)}
		>
			<Card
				status='success'
				header={headerProps => renderItemHeader(headerProps, info)}
				footer={footerProps => renderItemFooter(footerProps, info)}>
				<Image style={[eva.style.image, style]} source={{
					uri: info.item.image_url,
				}} />
			</Card>
		</TouchableOpacity>
	);

	return (
		<Layout style={[eva.style.container, style]}>
			<List
				data={allFeed}
				renderItem={renderItem}
			/>
			<Modal
				visible={modalVisible}
				onBackdropPress={() => setModalVisible(false)}>
				<Card
					disabled
					status='success'
					header={headerProps => renderItemHeader(headerProps, singleTopicInfo)}
					footer={footerProps => renderItemFooter(footerProps, singleTopicInfo)}>
					<Layout>
						<HTML source={{ html: singleTopicInfo.item.post_stream.posts[0].cooked }} contentWidth={contentWidth} />

					</Layout>

				</Card>
			</Modal>
		</Layout>
	);
};

export const NewsScreen = withStyles(NewsScreenThemed, (theme) => ({
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
	}
}));
