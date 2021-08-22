import * as React from 'react';
import { ViewStyle, Text, View } from 'react-native';
import { Layout, Tab, TabView, EvaProp, Icon, withStyles, useTheme, Spinner } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DownloadEditionScreen } from './DownloadEditionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useFetch } from '../../hooks/JsonFetcher';
export interface HomeProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const DownloadScreenThemed: React.FC<HomeProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const downloadJson = useFetch('https://manjaro.org/download/index.json', {});
	const theme = useTheme();
	const TopTab = createMaterialTopTabNavigator();
	const Official = (props) => (
		<DownloadEditionScreen key="Official" responseJson={downloadJson.response!.Official} {...props} />
	);
	const Community = (props) => (
		<DownloadEditionScreen key="Community" responseJson={downloadJson.response!.Community} {...props} />
	);
	const ARM = (props) => <DownloadEditionScreen key="ARM" responseJson={downloadJson.response!.ARM} {...props} />;
	const Development = (props) => (
		<DownloadEditionScreen key="Development" responseJson={downloadJson.response!.Development} {...props} />
	);
	const PlaceHolderLoading = () => (
		<Layout style={[eva.style!.container, style]}>
			<Spinner />
		</Layout>
	);
	return (
		<NavigationContainer independent={true}>
			{downloadJson.response ? (
				<TopTab.Navigator
					screenOptions={{
						tabBarLabelStyle: { fontFamily: 'ComfortaaRegular', color: '#fff' },
						tabBarStyle: { backgroundColor: theme['color-primary-default'] },
						tabBarIndicatorStyle: {
							backgroundColor: '#fff',
						},
						lazy: true,
						swipeEnabled: false,
						lazyPlaceholder: () => <PlaceHolderLoading />,
						tabBarScrollEnabled: true,
					}}
				>
					<TopTab.Screen name="Official" component={Official} />
					<TopTab.Screen name="Community" component={Community} />
					<TopTab.Screen name="ARM" component={ARM} />
					<TopTab.Screen name="Development" component={Development} />
				</TopTab.Navigator>
			) : (
				<PlaceHolderLoading />
			)}
		</NavigationContainer>
	);
};

export const DownloadScreen = withStyles(DownloadScreenThemed, (theme) => ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	download: {
		marginHorizontal: 15,
	},
}));
