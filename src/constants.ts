import { ScaleArray } from "./types"

const generateAllScales = (): ScaleArray[] => {
  const scales: ScaleArray[] = []

  // by starting at 2^12 we eliminate all scales that don't have 13 degrees and
  // that don't start with a true. That's the 1.
  for (let i = Math.pow(2, 12); i < Math.pow(2, 13); i++) {
    const base2 = i.toString(2)
    const scale = base2.split('').map(bit => !!+bit) as ScaleArray
    scales.push(scale)
  }

  return scales
}

export const ALL_SCALES = generateAllScales()

export const NOTES = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5']

export const SCALE_NAMES = [
  { id: 'xoxoxxoxoxoxx', name: 'major/ionian'},
  { id: 'xoxxoxoxoxoxx', name: 'dorian'},
  { id: 'xxoxoxoxoxoxx', name: 'phrygian'},
  { id: 'xoxoxoxxoxoxx', name: 'lydian'},
  { id: 'xoxoxxoxoxxox', name: 'mixolydian'},
  { id: 'xoxxoxoxxoxox', name: 'minor/aolian'},
  { id: 'xoxxoxxoxoxox', name: 'locrian'},

  { id: 'xoxoxooxoxoox', name: 'major pentatonic'},
  { id: 'xooxoxoxooxox', name: 'minor pentatonic'},
  { id: 'xoxooxoxooxox', name: 'dorian pentatonic'},
  { id: 'xooxoxooxoxox', name: 'phrygian pentatonic'},
  { id: 'xoxooxoxoxoox', name: 'mixolydian pentatonic'},

  { id: 'xoxxoxxoxxoxx', name: 'diminished'},
  { id: 'xxoxxoxxoxxox', name: 'dorian diminished'},

  { id: 'xoxoxoxoxoxox', name: 'whole tone'},

  { id: 'xoxxoxoxxooxx', name: 'harmonic minor'},
  { id: 'xxoxoxxooxxox', name: 'harmonic dorian'},
  { id: 'xoxoxxooxxoxx', name: 'harmonic phrygian'},
  { id: 'xoxxooxxoxxox', name: 'harmonic lydian'},
  { id: 'xxooxxoxxoxox', name: 'harmonic mixolydian'},
  { id: 'xooxxoxxoxoxx', name: 'harmonic aolian'},
  { id: 'xxoxxoxoxxoox', name: 'harmonic locrian'},

  { id: 'xxooxxoxxoxox', name: 'arabic'},
]

