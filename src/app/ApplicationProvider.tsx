import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme/manjaro-theme.json'; // <-- Import app theme
import { default as mapping } from './theme/manjaro-mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from '../app/navigator/AppNavigator';
export default () => (
	<ApplicationProvider {...eva} customMapping={mapping} theme={{ ...eva.dark, ...theme }}>
		<IconRegistry icons={EvaIconsPack} />
		<AppNavigator />
	</ApplicationProvider>
);
