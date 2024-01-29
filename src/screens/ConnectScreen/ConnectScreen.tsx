import React, {useState} from 'react';
import {
  Clipboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import {solanaConnect} from '../../libs/solanaConnect';

import {styles} from './ConnectScreenStyles';

const TWELVE_SEED = 12;
const TWENTY_FOUR_SEED = 24;

export default function ConnectScreen() {
  const [seedLength, setSeedLength] = useState(TWELVE_SEED);
  const [seed, setSeed] = useState(new Array(TWELVE_SEED).fill(''));
  const [lengthArray, setLengthArray] = useState(
    new Array(TWELVE_SEED).fill(0),
  );
  const [loading, setLoading] = useState(false);

  const onInsert = async () => {
    const copied = await Clipboard.getString();

    if (copied.split(' ').length === seedLength) {
      setSeed(copied.split(' '));
    }
  };

  const onChangeSeedWord = (value: string, index: number) => {
    setSeed([
      ...seed.slice(0, index - 1),
      value.toLowerCase(),
      ...seed.slice(index, seed.length),
    ]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.ConnectScreen}>
      <View style={styles.ConnectScreen__connect}>
        <Text style={styles.ConnectScreen__title}>Connect to wallet</Text>
        <Text style={styles.ConnectScreen__subtitle}>
          {`Enter your seed phrase (${seedLength} words)`}
        </Text>
        <View style={styles.ConnectScreen__tabs}>
          <Button
            paddingVertical={8}
            style={{opacity: seedLength === TWELVE_SEED ? 0.6 : 1}}
            onPress={() => {
              setSeedLength(TWELVE_SEED);
              setLengthArray(new Array(TWELVE_SEED).fill(0));
            }}
            label={'12-words'}
          />
          <Button
            paddingVertical={8}
            style={{opacity: seedLength === TWENTY_FOUR_SEED ? 0.6 : 1}}
            onPress={() => {
              setSeedLength(TWENTY_FOUR_SEED);
              setLengthArray(new Array(TWENTY_FOUR_SEED).fill(0));
            }}
            label={'24-words'}
          />
        </View>
        <View style={styles.ConnectScreen__seed}>
          {lengthArray.map((_, index) => (
            <Input
              key={index}
              width={'32%'}
              placeholder={'word'}
              value={seed[index]}
              onChange={value => onChangeSeedWord(value, index + 1)}
            />
          ))}
        </View>
        <View style={styles.ConnectScreen__seed}>
          <Button
            isLoading={loading}
            onPress={() => {
              setLoading(true);
              solanaConnect(seed.join(' ')).finally(() => setLoading(false));
            }}
            label={'Connect'}
          />
          <Button
            onPress={() => setSeed(new Array(seedLength).fill(''))}
            label={'Clear'}
          />
          <Button onPress={onInsert} label={'Insert'} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
