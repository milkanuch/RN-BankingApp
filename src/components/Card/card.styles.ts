import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors';
import { width } from 'constants/dimensions';

const cardWidth = width - 40;
const aspectRatio = 1.57;
const cardHeight = cardWidth / aspectRatio;
const transparentBlack = 'rgba(0, 0, 0, 0.7)';

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    aspectRatio: aspectRatio,
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: colors.black,
    overflow: 'hidden',
  },
  triangle: {
    position: 'absolute',
    right: 0,
    borderTopWidth: cardHeight * 0.5,
    borderTopColor: colors.transparent,
    borderBottomWidth: cardHeight * 0.5,
    borderBottomColor: colors.transparent,
    borderRightWidth: cardHeight * 0.9,
    borderRightColor: colors.light.primary[200],
    opacity: 0.1,
  },
  rectangle: {
    position: 'absolute',
    right: 0,
    width: '32%',
    height: '100%',
    backgroundColor: colors.light.primary[200],
    opacity: 0.1,
  },
  circle: {
    position: 'absolute',
    right: 0,
    width: '64%',
    height: '100%',
    borderRadius: 1000,
    backgroundColor: colors.light.primary[200],
    opacity: 0.1,
  },
  blocked: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: transparentBlack,
  },
  blockedBackground: {},
});

export default styles;
