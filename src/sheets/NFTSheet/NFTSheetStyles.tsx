import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  NFTSheet: {
    backgroundColor: colors.n6,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '100%',
  },

  NFTSheet__content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  NFTSheet__image: {
    borderRadius: 12,
  },

  NFTSheet__title: {
    color: colors.n4,
    fontSize: 26,
    fontWeight: '500',
    marginVertical: 10,
  },
});
