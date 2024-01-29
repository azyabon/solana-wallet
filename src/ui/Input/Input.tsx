import React from 'react';
import {Pressable, TextInput, View} from 'react-native';
import CrossIcon from '../../icons/CrossIcon';
import {colors} from '../../styles/colors';

import {styles} from './InputStyles';

interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  editable?: boolean;
  style?: any;
  isPassword?: boolean;
  leftIcon?: React.ReactNode;
  onFocus?: () => void;
  onEndEditing?: () => void;
  onPressIn?: () => void;
  withoutRadius?: boolean;
  numberOfLines?: number;
  ref?: any;
  onLayout?: (e: any) => void;
  multiline?: boolean;
  width?: string | number;
}

export default function Input(props: IInputProps) {
  const renderPassword = (value: string) => {
    return value
      .split('')
      .map(() => '*')
      .join('');
  };

  return (
    <View
      style={[
        styles.Input,
        {
          ...props.style,
          borderRadius: props.withoutRadius ? 0 : 8,
          width: props.width ?? '100%',
        },
      ]}>
      <View style={{marginRight: 4}}>{props.leftIcon}</View>
      <TextInput
        onLayout={props.onLayout}
        ref={props.ref}
        multiline={props.multiline}
        onPressIn={props.onPressIn}
        onFocus={props.onFocus}
        onEndEditing={props.onEndEditing}
        style={styles.Input__input}
        numberOfLines={props.numberOfLines ?? 1}
        value={props.isPassword ? renderPassword(props.value) : props.value}
        onChangeText={props.onChange}
        placeholder={props.placeholder}
        editable={props.editable}
        placeholderTextColor={'rgba(229,184,244,0.5)'}
      />
      {props.value && (
        <Pressable onPress={() => props.onChange('')}>
          <CrossIcon color={colors.n4} />
        </Pressable>
      )}
    </View>
  );
}
