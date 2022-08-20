import { ScaleArray } from "./types"

export const generateScaleId = (scale: ScaleArray) => {
  return scale.map(note => note ? 'x' : 'o').join('')
}

// Assigns a numerical sharpness to a scale. Notes towards
// the beginning are worth less, notes towards the end more,
// linearly.
export const getSharpnessOfScale = (scale: ScaleArray): number => {
  return scale.reduce((num, played, index) => {
    if (played) return num + index
    else return num
  }, 0)
}

