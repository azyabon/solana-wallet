import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  AccountScreen: {
    flex: 1,
    backgroundColor: colors.n6,
  },

  AccountScreen_top: {
    padding: 20,
  },

  AccountScreen__balance: {
    alignItems: 'center',
    marginBottom: 20,
  },

  AccountScreen__balance_text: {
    color: colors.n4,
    fontSize: 46,
    fontWeight: '700',
  },

  AccountScreen__controls: {
    flexDirection: 'row',
    gap: 8,
  },

  AccountScreen__line: {
    height: 1,
    backgroundColor: colors.n4,
  },

  AccountScreen__coins: {
    padding: 20,
    gap: 8,
  },

  AccountScreen__course: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  AccountScreen__course_text: {
    color: colors.n4,
    fontSize: 18,
    fontWeight: '700',
  },

  AccountScreen__solana: {
    width: 24,
    height: 24,
    borderRadius: 100,
  },
});
