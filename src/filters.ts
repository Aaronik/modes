import { ScaleArray } from "./types"

export const SCALE_FILTERS = {
  endsInTonic: (scale: ScaleArray) => {
    return scale[scale.length - 1]
  },

  hasNNotes: (scaleLengths: number[]) => (scale: ScaleArray) => {
    return scaleLengths.includes(scale.filter(bit => bit).length - 1)
  },

}

