import React from 'react';
import Svg, {Rect} from 'react-native-svg';
import {colors} from '../styles/colors';

interface INftsIconProps {
  color?: string;
  size?: number;
}

export default function NftsIcon({
  color = colors.n4,
  size = 24,
}: INftsIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 48 48"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Rect x="5.5" y="5.5" width="15.8571" height="15.8571" />
      <Rect
        x="27.5004"
        y="6.3575"
        width="14.1421"
        height="14.1421"
        transform="translate(0.6303 28.3788) rotate(-45)"
      />
      <Rect x="5.5" y="26.6429" width="15.8571" height="15.8571" />
      <Rect x="26.6429" y="26.6429" width="15.8571" height="15.8571" />
    </Svg>
  );
}
