import { StyleSheet } from 'react-native';
// import { isAndroid } from '../constants';
import metrics from '../theme/Metrics';
// import { Colors } from '../../Themes/'

export default StyleSheet.create({
	header: {
		height: 60,
		elevation: 1,
	},
	headerTitle: {
		width: (metrics.screenWidth * 2) / 3,
		fontWeight: '300',
	},
});
