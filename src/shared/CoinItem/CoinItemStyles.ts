import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  CoinItem: {
    backgroundColor: colors.n5,
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: colors.n4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },

  CoinItem__left: {
    flexDirection: 'row',
    gap: 10,
  },

  CoinItem__info: {
    justifyContent: 'space-around',
  },

  CoinItem__right: {},

  CoinItem__value: {
    fontSize: 16,
  },

  CoinItem__name: {
    color: colors.n4,
    fontSize: 18,
    fontWeight: '500',
  },

  CoinItem__text: {
    color: colors.n4,
    fontSize: 16,
  },

  CoinItem__image: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
});
