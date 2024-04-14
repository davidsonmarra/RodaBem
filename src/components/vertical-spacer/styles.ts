import {StyleSheet} from 'react-native';

const getStyles = (height: number) => {
  return StyleSheet.create({
    container: {
      height,
    },
  });
};

export default getStyles;
