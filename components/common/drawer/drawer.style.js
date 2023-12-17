import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    paddingTop: 45,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  userRoleTxt: {
    fontSize: 10,
  },
  drawerItemsContainer: {
    borderStyle: 'solid',
    borderTopWidth: 0.2,
  },
  drawerItemContainer: {
    marginVertical: SIZES.small,
  },
  drawerItemWrapper: (isActive) => ({
    backgroundColor: isActive ? COLORS.tertiary : COLORS.gray2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: SIZES.medium,
    borderTopEndRadius: 4,
    borderBottomEndRadius: 4,

    marginVertical: SIZES.small / 1.25,
  }),

  drawerItem: (isActive) => ({
    fontSize: SIZES.medium,
    color: isActive ? COLORS.white : COLORS.secondary,

    fontFamily: FONT.bold,
    marginLeft: SIZES.small,
    padding: 4,
  }),

  footerIcon: {
    width: 22,
    height: 22,
    borderRadius: 100,
  },
});

export default styles;
