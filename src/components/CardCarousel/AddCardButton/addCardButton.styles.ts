import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { width } from 'constants/dimensions';

const cardWidth = width - 40;
const aspectRatio = 1.57;
const cardHeight = cardWidth / aspectRatio;

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: cardHeight,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  buttonContainer: {
    padding: 10,
    borderRadius: 1000,
    backgroundColor: COLORS.grey,
  },
  triangle: {
    position: 'absolute',
    right: 0,
    borderTopWidth: cardHeight * 0.5,
    borderTopColor: COLORS.transparent,
    borderBottomWidth: cardHeight * 0.5,
    borderBottomColor: COLORS.transparent,
    borderRightWidth: cardHeight * 0.9,
    borderRightColor: COLORS.light.primary[200],
    opacity: 0.1,
  },
  rectangle: {
    position: 'absolute',
    right: 0,
    width: '32%',
    height: '100%',
    backgroundColor: COLORS.light.primary[200],
    opacity: 0.1,
  },
  circle: {
    position: 'absolute',
    right: 0,
    width: '64%',
    height: '100%',
    borderRadius: 1000,
    backgroundColor: COLORS.light.primary[200],
    opacity: 0.1,
  },
});

export default styles;
