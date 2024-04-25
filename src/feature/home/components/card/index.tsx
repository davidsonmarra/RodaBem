import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, View} from 'react-native';
import {Text, TextType, VerticalSpacer} from '@components';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  data: {
    name: string;
    brand: string;
    kmDriven?: string;
    kmPerLiter: string;
  };
}

const Card = ({data, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.leftContent}>
        <Text type={TextType.title}>{data.name}</Text>
        <Text type={TextType.text}>{data.brand}</Text>
        <VerticalSpacer height={12} />
        {data.kmDriven && (
          <Text type={TextType.text}>{`${data.kmDriven} Km rodados`}</Text>
        )}
      </View>
      <View style={styles.rightContent}>
        <Text type={TextType.title}>{`${data.kmDriven} Km/L`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
