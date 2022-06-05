import * as React from 'react';
import { Text, Layout, Icon, List, BottomNavigationTab, Card, withStyles, EvaProp } from '@ui-kitten/components';
import { Image, Dimensions, ScrollView, useWindowDimensions, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import globalStyle from './../../theme/GlobalStyle';
import axios from 'axios';
import { scale, verticalScale } from 'react-native-size-matters';
import { PlaceHolderComponent } from '../../components/Public/PlaceHolderComponent';
export interface NewsScreenProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const NewsScreenThemed: React.FC<NewsScreenProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const [isLoading, setIsLoading] = React.useState(true);
	const [allFeed, setAllFeed] = React.useState([]);
	function getStableJson() {
		return axios.get('https://forum.manjaro.org/c/announcements/stable-updates/12.json');
	}
	function getTestingJson() {
		return axios.get('https://forum.manjaro.org/c/announcements/testing-updates/13.json');
	}
	function getUnstableJson() {
		return axios.get('https://forum.manjaro.org/c/announcements/unstable-updates/15.json');
	}
	function getNewsJson() {
		return axios.get('https://forum.manjaro.org/c/announcements/news/18.json');
	}
	function getArmJson() {
		return axios.get('https://forum.manjaro.org/c/arm/news/101.json');
	}
	function getReleaseJson() {
		return axios.get('https://forum.manjaro.org/c/announcements/releases/19.json');
	}
	function getArmReleaseJson() {
		return axios.get('https://forum.manjaro.org/c/arm/releases/102.json');
	}
	function getArmStableJson() {
		return axios.get('https://forum.manjaro.org/c/arm/stable-updates/79.json');
	}
	function getArmTestingJson() {
		return axios.get('https://forum.manjaro.org/c/arm/testing-updates/80.json');
	}
	function getArmUnstableJson() {
		return axios.get('https://forum.manjaro.org/c/arm/unstable-updates/81.json');
	}
	React.useEffect(() => {
		Promise.all([
			getStableJson(),
			getTestingJson(),
			getUnstableJson(),
			getNewsJson(),
			getArmJson(),
			getReleaseJson(),
			getArmReleaseJson(),
			getArmStableJson(),
			getArmTestingJson(),
			getArmUnstableJson(),
		]).then(function (results) {
			let allResults = [];
			results.forEach((element) => {
				element.data.topic_list.topics.forEach((elementTopic) => {
					allResults.push(elementTopic);
				});
			});
			allResults
				.sort((a, b) => {
					return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
				})
				.reverse();
			setIsLoading(false);
			setAllFeed(allResults);
		});
	}, []);
	const renderItemHeader = (headerProps, info) => (
		<Layout {...headerProps}>
			<Text category="h6">{info.item.title}</Text>
		</Layout>
	);
	const onPressTopic = (idOfTopic) => {
		props.navigation.navigate('NewsSingle', {
			idOfTopic: idOfTopic,
		});
	};
	const renderItemFooter = (footerProps, info) => (
		<BottomNavigationTab
			icon={(props) => (
				<Layout style={[globalStyle.sideContainer, style]}>
					<Icon {...props} name="eye-outline" />
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.views}
					</Text>
					<Icon {...props} name="heart-outline" />
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.like_count}
					</Text>
					<Icon {...props} name="message-circle-outline" />
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.reply_count}
					</Text>
					<Icon {...props} name="calendar-outline" />
					<Text appearance="hint" style={[eva.style!.iconText, style]}>
						{info.item.created_at.split('T')[0]}
					</Text>
				</Layout>
			)}
		/>
	);

	const renderItem = (info) => (
		<TouchableOpacity onPress={() => onPressTopic(info.item.id)}>
			<Card
				status="success"
				header={(headerProps) => renderItemHeader(headerProps, info)}
				footer={(footerProps) => renderItemFooter(footerProps, info)}
			>
				{info.item.image_url ? (
					<Image
						style={[eva.style!.image, style]}
						source={{
							uri: info.item.image_url,
							cache: 'only-i- cached',
						}}
					/>
				) : (
					<Image style={[eva.style!.image, style]} source={require('./../../../../assets/splash.png')} />
				)}
			</Card>
		</TouchableOpacity>
	);

	return (
		<Layout style={[globalStyle.container, style]}>
			{!isLoading ? <List data={allFeed} renderItem={renderItem} /> : <PlaceHolderComponent {...props} />}
		</Layout>
	);
};

export const NewsScreen = withStyles(NewsScreenThemed, (theme) => ({
	icon: {
		width: 16,
		height: 16,
	},
	image: {
		width: scale(300),
		height: verticalScale(150),
	},
	iconText: {
		marginRight: 20,
		marginLeft: 5,
	},
}));
