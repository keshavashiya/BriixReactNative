import React, { useEffect, useCallback, useContext, useState } from 'react';
import { Alert } from 'react-native';
// import { APP_STATE } from '../../constants';
// import { resetLoginCredentials } from '../Keychain';
// import { useStoreActions, useStoreState } from 'easy-peasy';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
// import useCheckVersion from '../CheckVersion';
import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

// import sagaLogin from '../../screens/login/store/saga';
// import { name as nameLogin, actions as actionsLogin } from '../../screens/login/store/slice';

import saga from '../store/saga';
// eslint-disable-next-line no-unused-vars
import { name, actions } from '../store/slice';

const AppStateContext = React.createContext();

export const useAppContext = () => {
	return useContext(AppStateContext);
};

export const AppContextProvider = props => {
	useInjectSaga({ key: name, saga });
	// useInjectSaga({ key: nameLogin, saga: sagaLogin });

	// eslint-disable-next-line no-unused-vars
	const dispatch = useDispatch();
	// const { loginUser, setState, checkLogin } = useSelector(reducer => ({
	// 	loginUser: reducer.login.loginUser,
	// 	// setState: actions.login.changeAppState,
	// 	// checkLogin: actions.login.checkLogin,
	// }));

	const {
		// loginUser,
		// setState,
		//  checkLogin,
		stateReducer,
	} = useSelector(
		reducer => ({
			// loginUser: reducer.auth.auth,
			// setState: reducer.login.changeAppState,
			// checkLogin: reducer.login.checkLogin,
			stateReducer: reducer.app.app,
		}),
		shallowEqual,
	);

	const [state, setState] = useState(null);

	useEffect(() => {
		if (stateReducer.stateSuccess) {
			setState(stateReducer.stateSuccess);
		}
	}, [stateReducer]);

	// useCheckVersion();
	// const state = useSelector(store => store.login.appstate);
	// const state = useSelector(reducer => reducer.app.app);

	const _logoutUser = useCallback(
		async () => {
			// const reset = resetLoginCredentials();
			// if (reset) {
			// 	// do logout
			// 	setState(APP_STATE.PUBLIC);
			// }
		},
		[
			// setState
		],
	);

	const logout = useCallback(() => {
		Alert.alert('Please comfirm Logout', 'Are you sure you want to logout from the app', [
			{
				text: 'Yes, Logout',
				onPress: _logoutUser,
			},
			{
				type: 'cancel',
				text: 'No, Stay here',
			},
		]);
	}, [_logoutUser]);

	const login = useCallback(
		reqData => {
			// dispatch(loginUser(reqData));
			// dispatch(actionsLogin.login(reqData));
		},
		[
			// loginUser
		],
	);

	// check loggedin on mount
	// useEffect(() => {
	// 	state === APP_STATE.UNKNOWN && dispatch(checkLogin());
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [checkLogin, state]);

	// useEffect(() => {
	// 	if (stateReducer.stateSuccess === null) {
	// 		dispatch(actions.state());
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	return (
		<AppStateContext.Provider
			value={{
				state,
				logout,
				login,
			}}>
			{props.children}
		</AppStateContext.Provider>
	);
};

export default AppStateContext;
