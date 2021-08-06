import * as React from 'react';
import { ScrollView, ViewStyle, Dimensions, Linking } from 'react-native';
import { Text, Layout, Card, Icon, Avatar, Divider, useTheme, EvaProp } from '@ui-kitten/components';
import { withStyles } from '@ui-kitten/components';
import globalStyle from './../../theme/GlobalStyle'
import { expo } from '../../../../app.json'


export interface LinuxProps {
    navigation: any;
    route: any;
    eva: EvaProp;
    style: ViewStyle;
}

const ApplicationAboutScreenThemed: React.FC<LinuxProps> = (props) => {
    const { eva, style, ...restProps } = props;
    const theme = useTheme();
    return (
        <Layout style={[globalStyle.containerCentered, style]}>
            <ScrollView>
                <Card disabled>
                    <Text category="h6" style={{ textAlign: 'justify' }}>
                        About Manjaro Application
					</Text>
                    <Divider style={{ backgroundColor: 'gray', marginVertical: 10 }} />
                    <Text appearance="hint" style={{ textAlign: 'justify' }}>
                        The application is free and no-ads, also{' '}
                        <Text
                            style={{ color: theme['color-primary-500'] }}
                            onPress={() => {
                                Linking.openURL('https://github.com/oguzkaganeren/manjaro-app');
                            }}
                        >
                            open source.
						</Text>{' '}
                    Free to feel to contribute the application ;)
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
   
}));
