// import SplashScreen from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { isMountedRef, navigationRef } from './index';
// import Home from './home/Home';
// import Landing from './landing/Landing';
// import Login from '../screens/login/Login';

// import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

import Routes from './routes';
import LaunchScreen from '../screens/launch/Launch';
// Screens Objects
import LoginStack from './LoginStack';
// import MainStack from './mainStack';
import MainStack from './mainStack/MainStack';
import { useAppContext } from '../services/auth/AppContext';
import { APP_STATE } from '../constants';

// import sagaApp from '../services/store/saga';
// import { name as nameApp, actions as actionsApp } from '../services/store/slice';

// export type RootStackParamsList = {
//   Home: undefined
//   Landing: undefined
// }

// const Stack = createStackNavigator<RootStackParamsList>()

const Stack = createStackNavigator();

function Navigator() {
	/**
	 * Hide the splash screen on mount
	 * Keep track of nav container mounts for usage of {@link NavigationService}
	 */

	// useInjectSaga({ key: nameApp, saga: sagaApp });

	// const dispatch = useDispatch();

	// const { appReducer } = useSelector(
	// 	reducer => ({
	// 		appReducer: reducer.app.app,
	// 	}),
	// 	shallowEqual,
	// );

	useEffect(() => {
		isMountedRef.current = true;
		// SplashScreen.hide({ duration: 250 });
		return () => {
			isMountedRef.current = false;
		};
	}, []);

	// console.log(appReducer.stateSuccess === APP_STATE.PUBLIC);

	const { state } = useAppContext();

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator headerMode="none">
				{state === APP_STATE.PRIVATE ? (
					<Stack.Screen name={Routes.MAIN_APP} component={MainStack} />
				) : state === APP_STATE.PUBLIC ? (
					<Stack.Screen name={Routes.LOGIN_STACK} component={LoginStack} />
				) : (
					<Stack.Screen name={Routes.LOADING} component={LaunchScreen} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);

	// return (
	// 	<NavigationContainer ref={navigationRef}>
	// 		<Stack.Navigator initialRouteName="Login">
	// 			<Stack.Screen name="Landing" component={Landing} />
	// 			<Stack.Screen name="Home" component={Home} />
	// 			<Stack.Screen name="Login" component={Login} />
	// 		</Stack.Navigator>
	// 	</NavigationContainer>
	// );
}

export default Navigator;
