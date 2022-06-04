import * as React from 'react';
import { Layout, Tab, TabView, useTheme, Icon, EvaProp, IconProps, withStyles, TabBar } from '@ui-kitten/components';
import { SafeAreaView, ViewStyle } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BranchScreen } from './BranchScreen';
import { DiscoverScreen } from './DiscoverScreen';
import { MirrorsScreen } from './MirrorsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { PlaceHolderComponent } from '../../components/Public/PlaceHolderComponent';
export interface AboutProps {
	navigation: any;
	route: any;
	eva: EvaProp;
	style: ViewStyle;
}

const PackagesScreenThemed: React.FC<AboutProps> = (props) => {
	const { eva, style, ...restProps } = props;
	const [subTabIndex, setSubTabIndex] = React.useState(0);
	const TopTab = createMaterialTopTabNavigator();
	const theme = useTheme();
	const X64Icon = (props: IconProps) => <Icon {...props} name="monitor-outline" />;
	const ARMIcon = (props: IconProps) => <Icon {...props} name="smartphone-outline" />;

	const SubTabBar = () => (
		<TabBar
			selectedIndex={subTabIndex}
			indicatorStyle={{ backgroundColor: '#ffaa00' }}
			onSelect={(index) => setSubTabIndex(index)}
		>
			<Tab icon={X64Icon} title="X64" />
			<Tab icon={ARMIcon} title="ARM" />
		</TabBar>
	);
	const BranchScreenWithSubBar = () => (
		<Layout>
			<SubTabBar />
			<BranchScreen tabIndex={subTabIndex} {...props} />
		</Layout>
	);
	return (
		<NavigationContainer independent={true}>
			<TopTab.Navigator
				screenOptions={{
					tabBarLabelStyle: { fontFamily: 'ComfortaaRegular', color: '#fff' },
					tabBarStyle: { backgroundColor: theme['color-primary-default'] },
					tabBarIndicatorStyle: {
						backgroundColor: '#fff',
					},
					lazy: true,
					swipeEnabled: false,
					lazyPlaceholder: () => <PlaceHolderComponent {...props} />,
				}}
			>
				<TopTab.Screen name="Mirrors" component={MirrorsScreen} />
				<TopTab.Screen name="Discover" component={DiscoverScreen} />
				<TopTab.Screen name="Branch" component={BranchScreenWithSubBar} />
			</TopTab.Navigator>
		</NavigationContainer>
	);
};

export const PackagesScreen = withStyles(PackagesScreenThemed, (theme) => ({
	container: {
		flex: 1,
	},
	tabContainer: {
		justifyContent: 'center',
		alignItems: 'center',
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
}));
