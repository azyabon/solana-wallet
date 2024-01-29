import React from 'react';
import SheetBase from '../../shared/SheetBase';
import {ScrollView} from 'react-native-gesture-handler';
import {SheetsId} from '../../config/sheetsId';
import {Image, Text, View} from 'react-native';
import {TransactionsEnum} from '../../enums/TransactionsEnum';

import {styles} from './ActivitySheetStyles';

const solana = require('../../../assets/images/solana.webp');

export default function ActivitySheet() {
  return (
    <SheetBase
      sheetId={SheetsId.ACTIVITY_SHEET}
      containerStyle={styles.ActivitySheet}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ActivitySheet__content}>
        <Text style={styles.ActivitySheet__status}>
          {TransactionsEnum.RECEIVED}
        </Text>
        <View style={styles.ActivitySheet__imageWrap}>
          <Image style={styles.ActivitySheet__image} source={solana} />
        </View>
      </ScrollView>
    </SheetBase>
  );
}
