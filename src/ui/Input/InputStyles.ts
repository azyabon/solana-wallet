import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  Input: {
    backgroundColor: colors.n5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Input__input: {
    padding: 0,
    flex: 1,
    color: colors.n4,
  },
});
