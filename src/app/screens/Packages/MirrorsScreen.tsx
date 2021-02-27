import * as React from 'react';
import { Text, Layout, Spinner, List, Card, EvaProp, Input, withStyles, Icon, Tab, IconProps } from '@ui-kitten/components';
import { View, ViewStyle, Dimensions, Linking } from 'react-native';
import axios from 'axios';
export interface MirrorsProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const MirrorsScreenThemed: React.FC<MirrorsProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const [isLoading, setIsLoading] = React.useState(true);
	const [mirrorsData, setMirrorsData] = React.useState([]);
	const [listDataSource, setListDataSource] = React.useState([]);
	const [query, setQuery] = React.useState('');

	let filteredData;


	function getStatusOfMirrorsJson() {
		return axios.get('https://repo.manjaro.org/status.json');
	}
	const SearchIcon = (props) => (
		<Icon {...props} name='search-outline' />
	);
	const SyncIcon = (props) => (
		<Icon {...props} name='checkmark-outline' />
	);
	const NotSyncIcon = (props) => (
		<Icon {...props} name='close-outline' />
	);
	const UnknownIcon = (props) => (
		<Icon {...props} name='question-mark-circle-outline' />
	);
	React.useEffect(() => {
		Promise.all([getStatusOfMirrorsJson()])
			.then(function (results) {
				let allResults = [];
				results.forEach(element => {
					element.data.forEach(elementTopic => {
						allResults.push(elementTopic);
					});

				});
				setIsLoading(false)
				setMirrorsData(allResults)
				setListDataSource(allResults)
			})
	}, [])

	const renderItemHeader = (headerProps, info) => {
		return <View {...headerProps}>
			<Text category='h6'>
				{info.item.country}
			</Text>
		</View>
	};
	const renderItemFooter = (footerProps, info) => (
		<Layout style={[eva.style!.sideContainer, style]}>
			<Text appearance="hint"  {...footerProps}>
				Last sync : {info.item.last_sync == -1 ? 'N/A' : info.item.last_sync}
			</Text>
			<Text appearance="hint"  {...footerProps}>
				Protocol(s): {info.item.protocols.join(", ")}
			</Text>
		</Layout>

	);
	const stableHeader = (headerProps) => (
		<Layout {...props} style={{ margin: 10 }}>
			<Text category='h6'>Stable</Text>
		</Layout>
	)
	const testingHeader = (headerProps) => (
		<Layout {...props} style={{ margin: 10 }}>
			<Text category='h6'>Testing</Text>
		</Layout>
	)
	const unstableHeader = (headerProps) => (
		<Layout {...props} style={{ margin: 10 }}>
			<Text category='h6'>Unstable</Text>
		</Layout>
	)
	const searchFilterFunction = text => {
		// Check if searched text is not blank
		if (text) {
			filteredData = mirrorsData.filter(
				function (item) {
					const itemData = item.country.toLowerCase();
					const textData = text.toLowerCase();
					return itemData.indexOf(textData) > -1;
				});
			setListDataSource(filteredData)
		} else {
			setListDataSource(mirrorsData)

		}

		setQuery(text)
	};
	const renderStatusIcon = (info, order) => (

		info.item.branches[order] == 1 ? <SyncIcon fill='#8F9BB3' style={[eva.style!.icon, style]} /> : (info.item.branches[order] == 0 ? <NotSyncIcon fill='#8F9BB3' style={[eva.style!.icon, style]} /> : <UnknownIcon fill='#8F9BB3' style={[eva.style!.icon, style]} />)
	)
	const renderItem = (info) => (
		<Card
			status='basic'
			header={headerProps => renderItemHeader(headerProps, info)}
			footer={footerProps => renderItemFooter(footerProps, info)}
			onPress={() => {
				Linking.openURL(info.item.url);
			}}>
			<View style={{ flexDirection: "row" }}>
				<Card status='primary' disabled style={{ width: Dimensions.get('window').width / 4 }} header={stableHeader}>
					{renderStatusIcon(info, 0)}
				</Card>

				<Card status='warning' disabled style={{ width: Dimensions.get('window').width / 4 }} header={testingHeader}>
					{renderStatusIcon(info, 1)}
				</Card>

				<Card status='danger' disabled style={{ width: Dimensions.get('window').width / 3 }} header={unstableHeader}>
					{renderStatusIcon(info, 2)}
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

			{!isLoading ? <List
				data={listDataSource}
				renderItem={renderItem}
			/> : (<Spinner status='success' />)}
		</Layout>
	);
};

export const MirrorsScreen = withStyles(MirrorsScreenThemed, (theme) => ({
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
