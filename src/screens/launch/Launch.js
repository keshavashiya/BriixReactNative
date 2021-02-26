import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';

import {
	// useSelector,
	useDispatch,
	//   shallowEqual
} from 'react-redux';

import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

import sagaApp from '../../services/store/saga';
import { name as nameApp, actions as actionsApp } from '../../services/store/slice';
// import { APP_STATE } from '../../constants';

// import NavigationService from '../../navigation';
// import Routes from '../../navigation/routes';

const Launch = () => {
	useInjectSaga({ key: nameApp, saga: sagaApp });

	// const { state } = useAppContext();
	const dispatch = useDispatch();

	// const { appReducer } = useSelector(
	// 	reducer => ({
	// 		appReducer: reducer.app.app,
	// 	}),
	// 	shallowEqual,
	// );

	// useEffect(() => {
	// 	if (appReducer.stateSuccess) {
	// 		// console.log(appReducer.stateSuccess);
	// 		if (appReducer.stateSuccess === APP_STATE.PUBLIC) {
	// 			NavigationService.navigate(Routes.SIGNUP_SCREEN);
	// 		} else if (appReducer.stateSuccess === APP_STATE.PRIVATE) {
	// 			NavigationService.navigate(Routes.MAIN_APP);
	// 		}
	// 	}
	// }, [appReducer]);

	useEffect(() => {
		dispatch(actionsApp.state());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" />
		</View>
	);
};

export default Launch;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
