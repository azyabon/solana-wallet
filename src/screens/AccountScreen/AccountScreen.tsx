import React, {useState} from 'react';
import {Image, RefreshControl, ScrollView, Text, View} from 'react-native';
import Button from '../../ui/Button';
import SendIcon from '../../icons/SendIcon';
import {colors} from '../../styles/colors';
import CoinItem from '../../shared/CoinItem/CoinItem';

import {styles} from './AccountScreenStyles';
import ListingIcon from '../../icons/ListingIcon';

const solana = require('../../../assets/images/solana.webp');

export default function AccountScreen() {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.AccountScreen}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => setRefreshing(false), 1000);
            }}
          />
        }>
        <View style={styles.AccountScreen_top}>
          <View style={styles.AccountScreen__balance}>
            <Text
              selectable
              selectionColor={colors.white}
              style={styles.AccountScreen__balance_text}>
              $0.29
            </Text>
          </View>
          <View style={styles.AccountScreen__controls}>
            <Button
              onPress={() => {}}
              label={'Listing'}
              beforeIcon={<ListingIcon color={colors.black} size={18} />}
            />
            <Button
              onPress={() => {}}
              label={'Send'}
              beforeIcon={<SendIcon color={colors.black} size={18} />}
            />
          </View>
        </View>
        <View style={styles.AccountScreen__line} />
        <View style={styles.AccountScreen__coins}>
          <CoinItem
            name={'Solana'}
            text={'0.00293 SOL'}
            value={'$0.29'}
            image={solana}
          />
        </View>
      </ScrollView>
      <View style={styles.AccountScreen__course}>
        <Image style={styles.AccountScreen__solana} source={solana} />
        <Text style={styles.AccountScreen__course_text}>
          {`${1}SOL = ${80}$`}
        </Text>
      </View>
    </View>
  );
}
