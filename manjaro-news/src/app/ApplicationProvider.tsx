import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
import { default as manjaroTheme } from './theme/manjaro-theme.json'; // <-- Import app theme
import { default as mapping } from './theme/manjaro-mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AwesomeIconsPack } from './theme/awesome-icons';
import { AppNavigator } from '../app/navigator/AppNavigator';
import { ThemeContext } from '../../theme-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
	const [theme, setTheme] = React.useState('dark');

	React.useEffect(() => {
		getTheme().then((value: string | undefined) => {
			if (value) {
				setTheme(value);
			}
		});
	}, []);

	const storeTheme = async (value: string) => {
		try {
			await AsyncStorage.setItem('@THEME', value);
		} catch (e) {
			// saving error
		}
	};
	async function getTheme() {
		try {
			const value = await AsyncStorage.getItem('@THEME');
			if (value !== null) {
				return value;
			}
		} catch (e) {
			// error reading value
		}
	}

	const toggleTheme = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		storeTheme(nextTheme);
		setTheme(nextTheme);
	};
	return (
		<>
			<IconRegistry icons={[EvaIconsPack, AwesomeIconsPack]} />
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				<ApplicationProvider
					{...eva}
					customMapping={{ ...eva.mapping, mapping }}
					theme={{ ...eva[theme], ...manjaroTheme }}
				>
					<AppNavigator />
				</ApplicationProvider>
			</ThemeContext.Provider>
		</>
	);
};
