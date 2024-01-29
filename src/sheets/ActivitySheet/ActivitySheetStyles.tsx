import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  ActivitySheet: {
    backgroundColor: colors.n6,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '100%',
  },

  ActivitySheet__content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  ActivitySheet__status: {
    color: colors.n4,
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 24,
  },

  ActivitySheet__imageWrap: {
    alignItems: 'center',
  },

  ActivitySheet__image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
