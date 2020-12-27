import * as React from 'react';
import { Layout, BottomNavigation, BottomNavigationTab, Text, Icon, Tab, TabView } from '@ui-kitten/components';
import { Dimensions, SafeAreaView, Linking } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';
import { NavigationContainer } from '@react-navigation/native';
import { SingleScreen } from '../SingleScreen';
export interface HomeProps {
    navigation: any;
    route: any;
}

const DevelopmentScreenThemed: React.FC<HomeProps> = (props) => {
    const { eva, style, ...restProps } = props;

    const TabNavigator = () => (
        <Layout style={[eva.style.container, style]}>
            {/*<ScrollableTabView
                tabBarPosition={'bottom'}
                tabBarActiveTextColor="#32C15A"
                tabBarInactiveTextColor="#8F9BB3"
                renderTabBar={() => (
                    <TabBar
                        tabBarStyle={{
                            borderTopColor: '#8F9BB3',

                            borderTopWidth: 1,
                            paddingTop: 1,
                            borderBottomWidth: 0,
                        }}
                        tabBarTextStyle={{
                            fontSize: 14,
                            fontFamily: 'ComfortaaBold',
                            fontWeight: '600',
                            paddingTop: 15,
                            paddingBottom: 10,
                        }}
                        underlineBottomPosition={52}
                        underlineColor="#32C15A"
                        underlineHeight={4}
                    />
                )}
            >
                <SingleScreen
                    tabLabel={{ label: 'Development' }}
                    route={props.route}
                    navigation={props.navigation}

                    jsonOrder={0}
                    type={'Development'}
                />

                    </ScrollableTabView>*/}
        </Layout>
    );
    return <TabNavigator />;
};

export const DevelopmentScreen = withStyles(DevelopmentScreenThemed, (theme) => ({
    container: {
        flex: 1,
    },
    tabContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - Dimensions.get('window').height / 6,
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
