import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../styles/colors';

interface IProps {
  onPress: () => void;
  label: string;
  maxWidth?: string | number;
  beforeIcon?: React.ReactNode;
  isDisabled?: boolean;
  style?: any;
  isLoading?: boolean;
  isOutline?: boolean;
  paddingVertical?: number;
}

function Button(props: IProps) {
  const {
    onPress,
    label,
    isOutline,
    beforeIcon = null,
    maxWidth,
    isDisabled = false,
    style,
    isLoading,
  } = props;

  return (
    <View
      style={{
        flex: 1,
        maxWidth,
        overflow: 'hidden',
        borderRadius: 8,
        borderWidth: isOutline ? 1 : 0,
        borderColor: colors.n4,
        ...style,
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: isOutline ? 'transparent' : colors.n4,
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: props.paddingVertical ?? 15,
          opacity: isDisabled ? 0.5 : 1,
        }}
        disabled={isDisabled || isLoading}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
          }}>
          {isLoading ? (
            <ActivityIndicator color={colors.n1} />
          ) : (
            <>
              {beforeIcon && beforeIcon}
              <Text
                style={{
                  textAlign: 'center',
                  color: isOutline ? colors.n4 : colors.black,
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                {label}
              </Text>
            </>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
