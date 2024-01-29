import React from 'react';
import {ScrollView, View} from 'react-native';
import NftCard from './views/NFTCard/NFTCard';

import {styles} from './NFTsScreenStyles';

export default function NFTsScreen() {
  return (
    <View style={styles.NFTsScreen}>
      <ScrollView contentContainerStyle={styles.NFTsScreen__content}>
        <NftCard name={''} url={''} />
      </ScrollView>
    </View>
  );
}
