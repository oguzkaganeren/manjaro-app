import * as React from 'react';
import {
	Text,
	Layout,
	List,
	Card,
	EvaProp,
	Input,
	withStyles,
	Icon,
	TabView,
	Tab,
	IconProps,
} from '@ui-kitten/components';
import { View, ViewStyle, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios';
import { PlaceHolderComponent } from '../../components/Public/PlaceHolderComponent';
export interface BranchProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
	tabIndex: Number;
}

const BranchScreenThemed: React.FC<BranchProps> = (props) => {
	const { eva, style, tabIndex, ...restProps } = props;
	const [isLoading, setIsLoading] = React.useState(true);
	const [x64fullData, setX64FullData] = React.useState([]);
	const [ARMfullData, setARMFullData] = React.useState([]);
	const [listDataSource, setListDataSource] = React.useState([]);
	const [query, setQuery] = React.useState('');

	const TopTab = createMaterialTopTabNavigator();
	let filteredData;

	function getX64Json() {
		return axios.get('https://manjaro.org/branch-compare/packages.x86_64.json');
	}
	function getARMJson() {
		return axios.get('https://manjaro.org/branch-compare/packages.arm.json');
	}
	const SearchIcon = (props) => <Icon {...props} name="search-outline" />;

	React.useEffect(() => {
		Promise.all([getX64Json()])
			.then(function (results) {
				let allResults = [];
				results.forEach((element) => {
					element.data.packages.forEach((elementTopic) => {
						allResults.push(elementTopic);
					});
				});
				setIsLoading(false);
				setX64FullData(allResults);
				setListDataSource(allResults);
			})
			.then(function () {
				Promise.all([getARMJson()]).then(function (results) {
					let allResults = [];
					results.forEach((element) => {
						element.data.packages.forEach((elementTopic) => {
							allResults.push(elementTopic);
						});
					});
					setARMFullData(allResults);
				});
			});
	}, []);

	const renderItemHeader = (headerProps, info) => {
		return (
			<View {...headerProps}>
				<Text category="h6">{info.item[0].replace('core#', '').replace('extra#', '').replace('community#', '')}</Text>
			</View>
		);
	};
	const renderItemFooter = (footerProps, info) => (
		<Text appearance="hint" {...footerProps}>
			{info.item[1].repository} repository
		</Text>
	);
	const stableHeader = (headerProps) => (
		<Layout {...props} style={{ margin: 10 }}>
			<Text category="h6">Stable</Text>
		</Layout>
	);
	const testingHeader = (headerProps) => (
		<Layout {...props} style={{ margin: 10 }}>
			<Text category="h6">Testing</Text>
		</Layout>
	);
	const unstableHeader = (headerProps) => (
		<Layout {...props} style={{ margin: 10 }}>
			<Text category="h6">Unstable</Text>
		</Layout>
	);
	const searchFilterFunction = (text) => {
		// Check if searched text is not blank
		if (text) {
			if (tabIndex == 0) {
				filteredData = x64fullData.filter(function (item) {
					const itemData = item[0];
					const textData = text.toLowerCase();
					return itemData.indexOf(textData) > -1;
				});
			} else {
				filteredData = ARMfullData.filter(function (item) {
					const itemData = item[0];
					const textData = text.toLowerCase();
					return itemData.indexOf(textData) > -1;
				});
			}
			setListDataSource(filteredData);
		} else {
			if (tabIndex == 0) {
				setListDataSource(x64fullData);
			} else {
				setListDataSource(ARMfullData);
			}
		}

		setQuery(text);
	};

	const renderItem = (info) => (
		<Card
			status="basic"
			header={(headerProps) => renderItemHeader(headerProps, info)}
			footer={(footerProps) => renderItemFooter(footerProps, info)}
		>
			<View style={{ flexDirection: 'row' }}>
				<Card status="primary" style={{ width: Dimensions.get('window').width / 4 }} header={stableHeader}>
					<Text>{info.item[1].stable}</Text>
				</Card>

				<Card status="warning" style={{ width: Dimensions.get('window').width / 4 }} header={testingHeader}>
					<Text>{info.item[1].testing}</Text>
				</Card>

				<Card status="danger" style={{ width: Dimensions.get('window').width / 3 }} header={unstableHeader}>
					<Text>{info.item[1].unstable}</Text>
				</Card>
			</View>
		</Card>
	);
	return (
		<Layout>
			<Input
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Search"
				value={query}
				accessoryRight={SearchIcon}
				onChangeText={searchFilterFunction}
			/>

			{!isLoading ? <List data={listDataSource} renderItem={renderItem} /> : <PlaceHolderComponent {...props} />}
		</Layout>
	);
};

export const BranchScreen = withStyles(BranchScreenThemed, (theme) => ({
	container: {
		flex: 1,
		paddingVertical: 15,
	},
	icon: {
		width: 16,
		height: 16,
	},
	sideContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 15,
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
}));
