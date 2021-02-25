import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';

import reduxLogger from 'redux-logger';

import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';
import createReducer from './rootReducer';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const { run: runSaga } = sagaMiddleware;

// sagaMiddleware: Makes redux-sagas work
// const middlewares = [sagaMiddleware];

const middlewares = process.env.NODE_ENV === 'production' ? [sagaMiddleware] : [reduxLogger, sagaMiddleware];

const enhancers = [
	createInjectorsEnhancer({
		createReducer,
		runSaga,
	}),
];

const store = configureStore({
	reducer: createReducer(),
	middleware: [
		...getDefaultMiddleware({
			serializableCheck: false,
			// serializableCheck: {
			// 	// Ignore these action types
			// 	ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			// }
		}),
		...middlewares,
	],
	preloadedState: {},
	devTools: process.env.NODE_ENV !== 'production',
	enhancers,
});

// sagaMiddleware.run(rootSaga);

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
	if (store.asyncReducers[key]) {
		return false;
	}

	store.asyncReducers[key] = reducer;
	store.replaceReducer(createReducer(store.asyncReducers));
	return store;
};

export const persistor = persistStore(store);

// Make reducers hot reloadable, see http://mxs.is/googmo
/* istanbul ignore next */
// if (module.hot) {
// 	module.hot.accept('./reducers', () => {
// 		forceReducerReload(store);
// 	});
// }

export default store;
