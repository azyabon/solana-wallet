import React from 'react';
import {TABS_SCREEN} from '../config/routes';
import TabsNavigation from './AppTabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {reduceAddress} from '../utils/reduceAddress';
import CopyIcon from '../icons/CopyIcon';
import {getHeaderOptions} from '../utils/getHeaderOptions';
import ExitIcon from '../icons/ExitIcon';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName={TABS_SCREEN}>
      <Stack.Screen
        name={TABS_SCREEN}
        options={{
          ...getHeaderOptions(
            reduceAddress('3pn4bAamSaXz4egLHi59FkS58PtGiFCRzmaLGSitRBeu'),
            <CopyIcon />,
            <ExitIcon />,
          ),
          headerTitleAlign: 'center',
        }}
        component={TabsNavigation}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
