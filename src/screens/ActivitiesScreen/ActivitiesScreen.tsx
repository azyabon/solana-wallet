import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import CoinItem from '../../shared/CoinItem/CoinItem';
import {colors} from '../../styles/colors';
import {TransactionsEnum} from '../../enums/TransactionsEnum';
import {SheetManager} from 'react-native-actions-sheet';
import {SheetsId} from '../../config/sheetsId';

import {styles} from './ActivitiesScreenStyles';

const solana = require('../../../assets/images/solana.webp');

export default function ActivitiesScreen() {
  return (
    <View style={styles.ActivitiesScreen}>
      <ScrollView contentContainerStyle={{gap: 10, padding: 20}}>
        <Text style={styles.ActivitiesScreen__title}>Recent Activity</Text>
        <CoinItem
          onPress={() => SheetManager.show(SheetsId.ACTIVITY_SHEET)}
          name={TransactionsEnum.RECEIVED}
          text={'From: 2E4N...kNa1'}
          value={'+0.00293 SOL'}
          image={solana}
          valueTextColor={colors.green}
        />
        <CoinItem
          onPress={() => {}}
          name={TransactionsEnum.SENT}
          text={'To: 2E4N...kNa1'}
          value={'-0.00293 SOL'}
          image={solana}
          valueTextColor={colors.red}
        />
      </ScrollView>
    </View>
  );
}
