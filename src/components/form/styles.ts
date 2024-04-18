import {colors} from '@theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const getStyles = ({stepType = ''}) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    wrapper: {
      flex: 1,
    },
    stepContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    step: {
      flex: 1,
      height: 12,
      backgroundColor:
        stepType === 'active' ? colors.primary : colors.stepIncomplete,
    },
    item: {
      width: width - 48,
    },
  });

export default getStyles;
