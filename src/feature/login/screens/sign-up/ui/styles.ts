import {colors} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  formContainer: {
    flex: 1,
  },
});

export default styles;
