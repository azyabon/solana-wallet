import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  NftCard: {
    position: 'relative',
    width: '49%',
  },

  NftCard__image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },

  NftCard__overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: 12,
  },

  NftCard__name: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    color: colors.n4,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
});
