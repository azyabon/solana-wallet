import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountScreen from './AccountScreen';
import {colors} from '../styles/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ACTIVITY_SCREEN, MAIN_SCREEN, NFTS_SCREEN} from '../config/routes';
import TabBarItem from '../ui/TabBarItem';
import MoneyIcon from '../icons/MoneyIcon';
import FlashIcon from '../icons/FlashIcon';
import NftsIcon from '../icons/NftsIcon';
import {StyleSheet} from 'react-native';
import ActivitiesScreen from './ActivitiesScreen';
import NFTsScreen from './NFTsScreen';

const Tabs = createBottomTabNavigator();

const TabsNavigation = () => {
  const insets = useSafeAreaInsets();

  const iconColor = (focused: boolean) => (focused ? colors.n3 : colors.n4);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles(insets.bottom).tabbar,
        tabBarLabelStyle: {
          display: 'none',
        },
      }}
      initialRouteName={MAIN_SCREEN}>
      <Tabs.Screen
        name={MAIN_SCREEN}
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarItem
              isFocused={focused}
              icon={<MoneyIcon size={30} color={iconColor(focused)} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={NFTS_SCREEN}
        component={NFTsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarItem
              isFocused={focused}
              icon={<NftsIcon color={iconColor(focused)} />}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={ACTIVITY_SCREEN}
        component={ActivitiesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarItem
              isFocused={focused}
              icon={<FlashIcon color={iconColor(focused)} />}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = (bottom: number) =>
  StyleSheet.create({
    tabbar: {
      backgroundColor: colors.n5,
      height: 66 + bottom,
      borderTopWidth: 0,
      paddingBottom: bottom,
    },
  });

export default TabsNavigation;
