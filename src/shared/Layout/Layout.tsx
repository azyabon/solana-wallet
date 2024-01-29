import React from 'react';
import {StatusBar} from 'react-native';
import MainNavigation from '../../screens/MainNavigation';
import ConnectScreen from '../../screens/ConnectScreen';

export default function Layout() {
  if (true) {
    return <ConnectScreen />;
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <MainNavigation />
    </>
  );
}
