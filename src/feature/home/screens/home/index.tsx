import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HomeContainer from './ui';
import {RootStackParamList} from 'src/feature/home/navigation';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

interface Props extends NavigationProps {}

const HomeScreen = ({navigation}: Props) => {
  const handleCardPress = () => {
    navigation.navigate('Test');
  };

  const handleAddCarPress = () => {
    navigation.navigate('Test');
  };

  return (
    <HomeContainer
      onCardPress={handleCardPress}
      onAddCarPress={handleAddCarPress}
    />
  );
};

export default HomeScreen;
