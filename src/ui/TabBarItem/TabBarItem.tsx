import React from 'react';
import {View} from 'react-native';

import {styles} from './TabBarItemStyles';

interface ITabBarItemProps {
  icon: React.ReactNode;
  isFocused: boolean;
}

export default function TabBarItem(props: ITabBarItemProps) {
  return <View style={styles.TabBarItem}>{props.icon}</View>;
}
