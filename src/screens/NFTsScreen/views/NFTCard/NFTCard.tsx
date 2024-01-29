import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {styles} from './NFTCardStyles';
import {SheetManager} from 'react-native-actions-sheet';
import {SheetsId} from '../../../../config/sheetsId';

interface INftCardProps {
  name: string;
  url: string;
}

const overlay = require('../../../../../assets/images/overlay.png');
const MOCK_URL =
  'https://www.bybit.com/bycsi-root/static-nft/nft/image/f96LWUkQeTphqG4U__s2eLngVBf9pIBH-sbQfYuMU6I.png';

export default function NftCard(props: INftCardProps) {
  return (
    <TouchableOpacity
      onPress={() => SheetManager.show(SheetsId.NFT_SHEET)}
      style={styles.NftCard}>
      <Image
        style={styles.NftCard__image}
        source={{
          uri: MOCK_URL,
        }}
      />
      <Image style={styles.NftCard__overlay} source={overlay} />
      <Text numberOfLines={1} style={styles.NftCard__name}>
        BYBIT
      </Text>
    </TouchableOpacity>
  );
}
