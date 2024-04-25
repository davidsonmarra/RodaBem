import {StyleSheet} from 'react-native';
import {colors} from '@theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.borderLight,
    borderWidth: 1,
    backgroundColor: colors.cardBackground,
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    marginLeft: 8,
  },
});

export default styles;
