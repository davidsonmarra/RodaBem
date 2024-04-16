import {StyleSheet} from 'react-native';
import {colors} from '@theme';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.title,
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.text,
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  buttonPrimary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    padding: 8,
  },
  buttonSecondary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    padding: 8,
  },
});

export default styles;
