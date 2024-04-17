import {StyleSheet} from 'react-native';
import {colors} from '@theme';

const getStyles = ({error = '', isFocus = false}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      width: '100%',
    },
    inputContainer: {
      width: '100%',
      height: 62,
      borderRadius: 10,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: error
        ? colors.error
        : isFocus
        ? colors.primary
        : colors.border,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
    },
    tailError: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: colors.error,
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    error: {
      width: '100%',
      marginLeft: 24,
    },
  });

export default getStyles;
