import { DefaultTheme } from 'react-native-paper';
import colors from '../Colors';

const theme = {
	...DefaultTheme,
	id: 1,
	dark: false,
	roundness: 7,
	colors: {
		...DefaultTheme.colors,
		primary: '#002842',
		accent: '#a5be00',
		// background: colors.issabeline,
		background: colors.white,
		text: colors.panegrey,
		placeholder: colors.ashgrey,
		header: '#5c80bc',
		headerTitle: colors.white,

		//react-native-paper theme colors
		// surface: colors.white,
		surface: colors.issabeline,
		primaryText: colors.darkgunmetal,
	},
};

export default theme;
