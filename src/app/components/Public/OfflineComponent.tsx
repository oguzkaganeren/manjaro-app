import React, { PureComponent } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { withStyles } from '@ui-kitten/components';
import NetInfo from "@react-native-community/netinfo";
const { width } = Dimensions.get('window');
export interface OfflineProps {

}
const OfflineComponentThemed: React.FC<HomeProps> = (props) => {
    const { eva, style, ...restProps } = props;
    const [isConnected, setIsConnected] = React.useState(true);
    function handleConnectivityChange(isConnected: boolean) {
        setIsConnected(isConnected)
    }
    React.useEffect(() => {
        let unsubscribe = NetInfo.addEventListener(state => {
            handleConnectivityChange(state.isConnected)
        });
        return () => {
            //componentWillUmount
            unsubscribe();
        }
    }, [])
    const OfflineSign = () => {
        return !isConnected ? (<View style={[eva.style.offlineContainer, style]} >
            <Text style={[eva.style.offlineText, style]}>No Internet Connection</Text>
        </View >) : (null)
    }


    return <OfflineSign />;

}

export const OfflineComponent = withStyles(OfflineComponentThemed, (theme) => ({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    offlineText: {
        color: '#fff'
    }
}));