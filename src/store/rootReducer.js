import { combineReducers } from '@reduxjs/toolkit';

/** App */

import appReducers from '../services/store';

/** Auth */
// import signInReducers from '../main/auth/store';
// import loginReducers from '../screens/login/store';

/** User */
// import userReducers from '../main/users/users/store';

/** Role */
// import roleReducers from '../main/users/roles/store';

/** Setting */
// import settingReducers from '../main/users/settings/store';

/** Session */
// import sessionReducers from '../main/users/sessions/store';

/** Notification Permission */
// import notificationPermissionReducers from '../main/notifications/store';

/** Masters */
// import countryReducers from '../main/masters/countries/store';
// import stateReducers from '../main/masters/states/store';
// import cityReducers from '../main/masters/cities/store';
// import areaReducers from '../main/masters/areas/store';

const createReducer = asyncReducers =>
	combineReducers({
		...asyncReducers,

		app: appReducers,

		/** User */
		// user: userReducers,
		// role: roleReducers,

		/** User Setting */
		// setting: settingReducers,

		/** Session */
		// session: sessionReducers,

		/** Notification Permission */
		// notificationPermission: notificationPermissionReducers,

		/** Auth */
		// signin: signInReducers,
		// auth: loginReducers,

		/** Masters */
		// country: countryReducers,
		// state: stateReducers,
		// city: cityReducers,
		// area: areaReducers
		// ...AppReducer
	});

export default createReducer;
