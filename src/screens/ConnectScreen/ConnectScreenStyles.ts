import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  ConnectScreen: {
    flex: 1,
    backgroundColor: colors.n6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ConnectScreen__connect: {
    flexDirection: 'column',
    width: '100%',
    padding: 20,
  },

  ConnectScreen__tabs: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'space-between',
  },

  ConnectScreen__title: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.n4,
  },

  ConnectScreen__subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.n4,
    marginBottom: 10,
  },

  ConnectScreen__seed: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
