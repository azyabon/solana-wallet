import React from 'react';
import SheetBase from '../../shared/SheetBase';
import {ScrollView} from 'react-native-gesture-handler';
import {SheetsId} from '../../config/sheetsId';
import {Image, Text, useWindowDimensions} from 'react-native';

import {styles} from './NFTSheetStyles';

const MOCK_URL =
  'https://www.bybit.com/bycsi-root/static-nft/nft/image/f96LWUkQeTphqG4U__s2eLngVBf9pIBH-sbQfYuMU6I.png';

export default function NFTSheet() {
  const {width} = useWindowDimensions();
  return (
    <SheetBase sheetId={SheetsId.NFT_SHEET} containerStyle={styles.NFTSheet}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.NFTSheet__content}>
        <Image
          style={[styles.NFTSheet__image, {width: '100%', height: width - 40}]}
          source={{uri: MOCK_URL}}
        />
        <Text numberOfLines={2} style={styles.NFTSheet__title}>
          BYBIT
        </Text>
      </ScrollView>
    </SheetBase>
  );
}
