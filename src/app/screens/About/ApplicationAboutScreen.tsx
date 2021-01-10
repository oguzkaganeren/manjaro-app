import * as React from 'react';
import { ScrollView, ViewStyle, Dimensions, Linking } from 'react-native';
import { Text, Layout, Card, Icon, Avatar, Divider, Button, EvaProp } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';


import { expo } from '../../../../app.json'


export interface LinuxProps {
    navigation: any;
    route: any;
    eva: EvaProp;
    style: ViewStyle;
}

const ApplicationAboutScreenThemed: React.FC<LinuxProps> = (props) => {
    const { eva, style, ...restProps } = props;

    return (
        <Layout style={[eva.style!.container, style]}>
            <ScrollView>
                <Card disabled>
                    <Text category="h6" style={{ textAlign: 'justify' }}>
                        About Manjaro Application
					</Text>
                    <Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
                    <Text appearance="hint" style={{ textAlign: 'justify' }}>

                        The application is free and no-ads, also{' '}
                        <Text
                            style={{ color: 'green' }}
                            onPress={() => {
                                Linking.openURL('https://github.com/oguzkaganeren/manjaro-app');
                            }}
                        >
                            open source.
						</Text>{' '}
                    You can contribute the application.
                    </Text>
                    <Text></Text>
                    <Text appearance="hint" style={{ textAlign: 'justify' }}>
                        Version: {expo.version}
                    </Text>
                </Card>
            </ScrollView>
        </Layout>
    );
};

export const ApplicationAboutScreen = withStyles(ApplicationAboutScreenThemed, (theme) => ({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    sideContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 32,
        height: 32,
        marginHorizontal: 5,
    },
    sharp: {
        color: theme['color-primary-500'],
        paddingRight: 3,
    },
    description: {
        backgroundColor: 'rgba(53, 191, 92, 0.3)',
        marginTop: 10,
        marginHorizontal: 15,
        padding: 20,
    },
    image: {
        marginVertical: 10,
        width: Dimensions.get('window').width - 50,
        height: Dimensions.get('window').height / 2,
        overflow: 'visible',
        resizeMode: 'contain',
        backgroundColor: '#EBEBEB',
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
