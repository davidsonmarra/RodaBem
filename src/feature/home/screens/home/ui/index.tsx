import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Header, VerticalSpacer} from '@components';
import {Card} from 'src/feature/home/components';
import styles from './styles';
import ButtonIcon from 'src/components/button-icon';
import {AddIcon} from '@assets';

const data = [
  {
    name: 'Name',
    brand: 'Brand',
    kmDriven: '10',
    kmPerLiter: '13',
  },
  {
    name: 'Name',
    brand: 'Brand',
    kmDriven: '10',
    kmPerLiter: '13',
  },
  {
    name: 'Name',
    brand: 'Brand',
    kmDriven: '10',
    kmPerLiter: '13',
  },
  {
    name: 'Name',
    brand: 'Brand',
    kmDriven: '10',
    kmPerLiter: '13',
  },
  {
    name: 'Name',
    brand: 'Brand',
    kmDriven: '10',
    kmPerLiter: '13',
  },
  {
    name: 'Name',
    brand: 'Brand',
    kmDriven: '10',
    kmPerLiter: '13',
  },
  {
    name: 'Name',
    brand: 'Brand',
    kmDriven: '10',
    kmPerLiter: '13',
  },
  {
    name: 'Name',
    brand: 'Brand',
    kmDriven: '10',
    kmPerLiter: '13',
  },
  {
    name: 'Name',
    brand: 'Brand',
    kmDriven: '10',
    kmPerLiter: '13',
  },
];

interface Props {
  onCardPress: () => void;
  onAddCarPress: () => void;
}

const HomeContainer = ({onCardPress, onAddCarPress}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Carros" showLeftIcon={false} />
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({item}) => <Card onPress={onCardPress} data={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <VerticalSpacer height={12} />}
          contentContainerStyle={{paddingBottom: 64 + 24}}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonIcon onPress={onAddCarPress}>
          <AddIcon />
        </ButtonIcon>
      </View>
    </SafeAreaView>
  );
};

export default HomeContainer;
