import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../styles/colors';

interface IFlashIconProps {
  color?: string;
  size?: number;
}

export default function FlashIcon({
  color = colors.n4,
  size = 24,
}: IFlashIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      // @ts-ignore
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.9105 10.7209H14.8205V3.52087C14.8205 1.84087 13.9105 1.50087 12.8005 2.76087L12.0005 3.67087L5.2305 11.3709C4.3005 12.4209 4.6905 13.2809 6.0905 13.2809H9.1805V20.4809C9.1805 22.1609 10.0905 22.5009 11.2005 21.2409L12.0005 20.3309L18.7705 12.6309C19.7005 11.5809 19.3105 10.7209 17.9105 10.7209Z"
        fill={color}
      />
    </Svg>
  );
}
