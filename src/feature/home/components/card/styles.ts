import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    marginLeft: 8,
  },
});

export default styles;
