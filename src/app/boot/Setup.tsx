import { AppLoading } from 'expo';
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';

import ApplicationProvider from '../ApplicationProvider';
export interface SetupProps {
	navigation: any;
	route: any;
}
/**
 *
 * @param props
 */
const Setup: React.FC<SetupProps> = (props) => {
	const [loaded, error] = useFonts({
		ComfortaaRegular: require('../../../assets/fonts/Comfortaa-Regular.ttf'),
		ComfortaaBold: require('../../../assets/fonts/Comfortaa-Bold.ttf'),
		ComfortaaLight: require('../../../assets/fonts/Comfortaa-Light.ttf'),
		OpenSansLight: require('../../../assets/fonts/OpenSans-Light.ttf'),
		OpenSansRegular: require('../../../assets/fonts/OpenSans-Regular.ttf'),
	});

	if (!loaded) {
		return <AppLoading />;
	} else {
		return <ApplicationProvider />;
	}
};
export default Setup;
