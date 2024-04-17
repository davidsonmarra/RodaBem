import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {HorizontalSpacer, Text, TextType} from '@components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {BackSvg} from '@assets';

export interface Props {
  text?: string;
  onBack?: () => void;
  showLeftIcon?: boolean;
}

const Header = ({text, onBack, showLeftIcon = true}: Props) => {
  const {goBack} = useNavigation();
  if (!onBack) {
    onBack = goBack;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={onBack}>
        {showLeftIcon && <BackSvg />}
      </TouchableOpacity>
      <HorizontalSpacer width={12} />
      {text && (
        <Text style={styles.text} type={TextType.header}>
          {text}
        </Text>
      )}
      <HorizontalSpacer width={12} />
      <View style={styles.icon} />
    </View>
  );
};

export default Header;
