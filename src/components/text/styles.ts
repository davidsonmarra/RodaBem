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
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.buttonText,
    padding: 8,
  },
  buttonSecondary: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    padding: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.text,
  },
  error: {
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.error,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.title,
  },
});

export default styles;
