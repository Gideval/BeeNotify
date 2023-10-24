import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const defaultWidth = 375

const px = (valuePx) => {
  const widthPercent = (valuePx / defaultWidth) * 100
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100
  )
  return screenPixel
}

export const metrics = {
  px,
  width,
  height,
}
