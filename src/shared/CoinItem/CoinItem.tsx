import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './CoinItemStyles';
import {colors} from '../../styles/colors';

interface ICoinItemProps {
  image: any;
  name: string;
  text: string;
  value: string;
  valueTextColor?: string;
  onPress?: () => void;
}

export default function CoinItem(props: ICoinItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={props.onPress ? 0.5 : 1}
      onPress={props.onPress}
      style={styles.CoinItem}>
      <View style={styles.CoinItem__left}>
        <Image style={styles.CoinItem__image} source={props.image} />
        <View style={styles.CoinItem__info}>
          <Text style={styles.CoinItem__name}>{props.name}</Text>
          <Text style={styles.CoinItem__text}>{props.text}</Text>
        </View>
      </View>
      <View style={styles.CoinItem__right}>
        <Text
          style={[
            styles.CoinItem__value,
            {color: props.valueTextColor ?? colors.n4},
          ]}>
          {props.value}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
