import {StyleSheet} from 'react-native';
import {colors} from '@theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    right: 24,
    bottom: 16,
  },
});

export default styles;
