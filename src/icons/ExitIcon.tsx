import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../styles/colors';

interface IExitIconProps {
  color?: string;
  size?: number;
}

export default function ExitIcon({
  color = colors.n4,
  size = 24,
}: IExitIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14 7.63636L14 4.5C14 4.22386 13.7761 4 13.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 19.5C4 19.7761 4.22386 20 4.5 20L13.5 20C13.7761 20 14 19.7761 14 19.5L14 16.3636"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 12L21 12M21 12L18.0004 8.5M21 12L18 15.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
