import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';
// import Launch from '../screens/launch/Launch';
import Signin from '../screens/signin/Signin';
import Signup from '../screens/signup/Signup';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import Otp from '../screens/otp/Otp';

const Stack = createStackNavigator();

export default props => {
	return (
		<Stack.Navigator headerMode="none" initialRouteName={Routes.APP_INTRO}>
			{/* <Stack.Screen name={Routes.APP_INTRO} component={Launch} /> */}
			{/* <Stack.Screen name={Routes.OTP_SCREEN} component={Otp} /> */}
			<Stack.Screen name={Routes.SIGNIN_SCREEN} component={Signin} />
			<Stack.Screen name={Routes.SIGNUP_SCREEN} component={Signup} />
			<Stack.Screen name={Routes.RESET_PASSWORD_SCREEN} component={ResetPassword} />
		</Stack.Navigator>
	);
};
