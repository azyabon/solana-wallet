import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../styles/colors';

interface ICopyIconProps {
  color?: string;
  size?: number;
}

export default function CopyIcon({
  color = colors.n4,
  size = 24,
}: ICopyIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg"
      fill="none">
      <Path
        fill={color}
        fill-rule="evenodd"
        d="M4 2a2 2 0 00-2 2v9a2 2 0 002 2h2v2a2 2 0 002 2h9a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2H4zm9 4V4H4v9h2V8a2 2 0 012-2h5zM8 8h9v9H8V8z"
      />
    </Svg>
  );
}
