import * as React from 'react';
import { Text, Layout, ListItem, Toggle, Icon, EvaProp } from '@ui-kitten/components';
import { Linking, ViewStyle } from 'react-native';
import { withStyles } from '@ui-kitten/components';
export interface NewsScreenProps {
    navigation: any;
    route: any;
    eva: EvaProp;
    style: ViewStyle;
}

const SettingsScreenThemed: React.FC<NewsScreenProps> = (props) => {
    const { eva, style, ...restProps } = props;
    const [checked, setChecked] = React.useState(false);

    const onCheckedChange = (isChecked: boolean) => {
        setChecked(isChecked);
    };

    function InstallButton(props) {
        return (
            <Toggle {...props} checked={checked} onChange={onCheckedChange} />
        );
    }
    return (
        <Layout style={[eva.style!.container, style]}>
            <ListItem
                title={props => <Text {...props}>Notification</Text>}
                description={props => <Text {...props}>It sends you news</Text>}
                accessoryRight={InstallButton}
            />
        </Layout>
    );
};

export const SettingsScreen = withStyles(SettingsScreenThemed, (theme) => ({
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
}));
