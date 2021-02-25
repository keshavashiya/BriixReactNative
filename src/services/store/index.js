import { combineReducers } from '@reduxjs/toolkit';
import { reducer as app } from './slice';

const appReducers = combineReducers({
	app,
});

export default appReducers;
