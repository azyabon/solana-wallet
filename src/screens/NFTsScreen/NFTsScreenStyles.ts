import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  NFTsScreen: {
    flex: 1,
    backgroundColor: colors.n6,
  },

  NFTsScreen__content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 6,
    padding: 20,
  },
});
