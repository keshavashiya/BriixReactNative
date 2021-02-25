import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
import Launch from '../screens/launch/Launch';

const Stack = createStackNavigator();

export default props => {
	return (
		<Stack.Navigator headerMode="none" initialRouteName={Routes.APP_INTRO}>
			<Stack.Screen name={Routes.APP_INTRO} component={Launch} />
		</Stack.Navigator>
	);
};
