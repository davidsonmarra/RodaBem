import {StyleSheet} from 'react-native';
import {colors} from '@theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 12,
    width: '100%',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {},
});

export default styles;
