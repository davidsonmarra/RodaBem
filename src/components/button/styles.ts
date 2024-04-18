import {StyleSheet} from 'react-native';
import {colors} from '@theme';

interface Props {
  isDisabled: boolean;
}

const getStyles = ({isDisabled}: Props) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 8,
      borderRadius: 12,
      width: '100%',
    },
    primary: {
      backgroundColor: isDisabled ? colors.stepIncomplete : colors.primary,
    },
    secondary: {},
  });

export default getStyles;
