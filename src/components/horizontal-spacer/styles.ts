import {StyleSheet} from 'react-native';

const getStyles = (width: number) => {
  return StyleSheet.create({
    container: {
      width,
    },
  });
};

export default getStyles;
