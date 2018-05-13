import { Dimensions, PixelRatio } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;

export const responsiveWidth = widthPercent =>
  PixelRatio.roundToNearestPixel(screenWidth * widthPercent / 100);

export const responsiveHeight = heightPercent =>
  PixelRatio.roundToNearestPixel(screenHeight * heightPercent / 100);

export const responsiveFontSize = fontSize => fontSize * PixelRatio.getFontScale();
