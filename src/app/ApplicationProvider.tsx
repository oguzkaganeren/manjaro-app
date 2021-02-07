import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { default as manjaroTheme } from './theme/manjaro-theme.json'; // <-- Import app theme
import { default as mapping } from './theme/manjaro-mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AwesomeIconsPack } from './theme/awesome-icons';
import { AppNavigator } from '../app/navigator/AppNavigator';
import { ThemeContext } from '../../theme-context';
export default () => {
	const [theme, setTheme] = React.useState('dark');

	const toggleTheme = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(nextTheme);
	};
	return <>
		<IconRegistry icons={[EvaIconsPack, AwesomeIconsPack]} />
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ApplicationProvider {...eva} customMapping={{ ...eva.mapping, mapping }} theme={{ ...eva[theme], ...manjaroTheme }}>
				<AppNavigator />
			</ApplicationProvider>
		</ThemeContext.Provider>
	</>
};
