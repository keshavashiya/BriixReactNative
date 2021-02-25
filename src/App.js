/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import Navigator from './navigation/Navigator';
import { ThemeProvider } from './theme/context/ThemeContext';
import { NetInfoProvider } from './lib/netinfo/Context';
import { AppContextProvider } from './services/auth/AppContext';
import store from './store';

import useAppTheme from './theme/context';

const App = () => {
	return (
		// <Screen>
		<NetInfoProvider>
			{/* <LocaleContextProvider> */}
			<StoreProvider store={store}>
				<StatusBar
					// translucent
					backgroundColor={'rgba(0,0,0,0.2)'}
				/>
				<ThemeProvider>
					<ThemeConsumer />
				</ThemeProvider>
			</StoreProvider>
			{/* </LocaleContextProvider> */}
		</NetInfoProvider>
		// </Screen>
	);
};

const ThemeConsumer = () => {
	const { theme } = useAppTheme();

	return (
		<PaperProvider theme={theme}>
			<AppContextProvider>
				<Navigator />
			</AppContextProvider>
		</PaperProvider>
	);
};

//temp workaround for react-native-gesture-handler in react-native 0.61
// take a look https://github.com/react-native-community/releases/issues/140#issuecomment-532819601
export default App;
