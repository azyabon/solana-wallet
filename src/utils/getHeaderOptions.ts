import React from 'react';
import {colors} from '../styles/colors';

export const getHeaderOptions = (
  name: string,
  rightElement?: React.ReactNode,
  leftElement?: React.ReactNode,
) => ({
  headerTitle: name,
  headerRight: () => rightElement,
  headerLeft: () => leftElement,
  headerTitleStyle: {
    color: colors.n4,
    fontSize: 20,
  },
  headerTintColor: colors.n4,
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.n5,
  },
});
