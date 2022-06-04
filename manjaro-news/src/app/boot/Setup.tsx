import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

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
	const [isLoadingComplete, setLoadingComplete] = useState(false);
	let customFonts = {
		ComfortaaRegular: require('../../../assets/fonts/Comfortaa-Regular.ttf'),
		ComfortaaBold: require('../../../assets/fonts/Comfortaa-Bold.ttf'),
	};
	if (!isLoadingComplete) {
		loadResourcesAsync().then(() => handleFinishLoading(true))
		return null

	} else {
		return <ApplicationProvider />;
	}
	async function loadResourcesAsync() {
		await Font.loadAsync(customFonts);
	}

	function handleFinishLoading(loadingComplete: boolean) {
		setLoadingComplete(loadingComplete);
	}
};
export default Setup;
