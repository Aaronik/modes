import { ScaleArray } from "./types"

export const generateScaleId = (scale: ScaleArray) => {
  return scale.map(note => note ? 'x' : 'o').join('')
}

