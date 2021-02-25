import React from 'react';

import { CommonActions, StackActions } from '@react-navigation/native';

// export { Routes } from './Routes';

/**
 * Used in {@link Navigator} to keep track of navigation container mounts.
 */
export const isMountedRef = React.createRef();

/**
 * Used for navigation by NavigationService
 */
export const navigationRef = React.createRef();

const ERROR_NOT_INIT = 'Navigation Service: attempting to navigate with an unintialized ref.';

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigate(routeName, params) {
	// console.log('LOG_navigate', routeName, params);
	if (isMountedRef.current && navigationRef.current) {
		// Perform navigation if the app has mounted
		navigationRef.current.navigate(routeName, params);
	} else {
		throw new Error(ERROR_NOT_INIT);
		// You can decide what to do if the app hasn't mounted
		// You can ignore this, or add these actions to a queue you can call later
	}
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(routeName, params) {
	if (isMountedRef.current && navigationRef.current) {
		// Perform navigation if the app has mounted
		navigationRef.current.dispatch(
			CommonActions.reset({
				routes: [{ routeName, params }],
			}),
		);
	} else {
		throw new Error(ERROR_NOT_INIT);
	}
}

/**
 * Pop the current screen.
 */
function goBack() {
	if (isMountedRef.current && navigationRef.current) {
		navigationRef.current.goBack();
	} else {
		throw new Error(ERROR_NOT_INIT);
	}
}

/**
 * Replace the current screen.
 */
function replace(routeName, params) {
	if (isMountedRef.current && navigationRef.current) {
		navigationRef.current.dispatch(StackActions.replace(routeName, params));
	} else {
		throw new Error(ERROR_NOT_INIT);
	}
}

/**
 * Custom navigation stack reset.
 * e.g.
 * navigationService.reset([
 *        { name: "Screen1" },
 *        { name: "Screen2" },
 *        { name: "Screen3" },
 *        { name: "Screen4" },
 *      ], 3)
 */
function reset(routes, index) {
	if (isMountedRef.current && navigationRef.current) {
		navigationRef.current.dispatch(
			CommonActions.reset({
				index,
				routes,
			}),
		);
	} else {
		throw new Error(ERROR_NOT_INIT);
	}
}

/**
 * Pop the desired number of screens.
 */
function pop(count) {
	if (isMountedRef.current && navigationRef.current) {
		navigationRef.current.dispatch(StackActions.pop(count));
	} else {
		throw new Error(ERROR_NOT_INIT);
	}
}

function toggleDrawer() {
	// navigator.dispatch(DrawerActions.toggleDrawer());
}

function openDrawer() {
	// navigator.dispatch(DrawerActions.openDrawer());
}

function closeDrawer() {
	// navigator.dispatch(DrawerActions.closeDrawer());
}

const NavigationService = {
	navigate,
	toggleDrawer,
	openDrawer,
	closeDrawer,
	navigateAndReset,
	goBack,
	replace,
	reset,
	pop,
};

export default NavigationService;
