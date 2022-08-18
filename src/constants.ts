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
  { id: 'xoxxoxoxoxxox', name: 'dorian'},
  { id: 'xxoxoxoxxoxox', name: 'phrygian'},
  { id: 'xoxoxoxxoxoxx', name: 'lydian'},
  { id: 'xoxoxxoxoxxox', name: 'mixolydian'},
  { id: 'xoxxoxoxxoxox', name: 'minor/aeolian'},
  { id: 'xxoxoxxoxoxox', name: 'locrian'},

  { id: 'xoxxoxoxxooxx', name: 'harmonic minor'},
  { id: 'xxoxoxxooxxox', name: 'locrian #6'},
  { id: 'xoxoxxooxxoxx', name: 'ionian #5'},
  { id: 'xoxxooxxoxxox', name: 'dorian #4'},
  { id: 'xxooxxoxxoxox', name: 'phrygian dominant'},
  { id: 'xooxxoxxoxoxx', name: 'lydian #2'},
  { id: 'xxoxxoxoxxoox', name: 'altered o7'},

  { id: 'xoxoxxoxxooxx', name: 'harmonic major'},
  { id: 'xoxxoxxooxxox', name: 'dorian b5'},
  { id: 'xxoxxooxxoxox', name: 'phrygian b4'},
  { id: 'xoxxooxxoxoxx', name: 'lydian b3'},
  { id: 'xxooxxoxoxxox', name: 'mixolydian b2'},
  { id: 'xooxxoxoxxoxx', name: 'lydian augmented #2'},

  { id: 'xoxxoxoxoxoxx', name: 'melodic minor'},
  { id: 'xxoxoxoxoxxox', name: 'dorian b2'},
  { id: 'xoxoxoxoxxoxx', name: 'lydian augmented'},
  { id: 'xoxoxoxxoxxox', name: 'lydian dominant'},
  { id: 'xoxoxxoxxoxox', name: 'mixolydian b6'},
  { id: 'xoxxoxxoxoxox', name: 'aeolian b5'},
  { id: 'xxoxxoxoxoxox', name: 'altered scale'},

  // TODO
  // * Double harmonic
  // * Harmonic Phrygian
  // * Harmonic Locrian
  // * Harmonic Mixolydian
  // * Harmonic Lydian
  // * Neopolitan

  { id: 'xoxoxooxoxoox', name: 'major pentatonic'},
  { id: 'xoxooxoxooxox', name: 'dorian pentatonic'},
  { id: 'xooxoxooxoxox', name: 'phrygian pentatonic'},
  { id: 'xoxooxoxoxoox', name: 'mixolydian pentatonic'},
  { id: 'xooxoxoxooxox', name: 'minor pentatonic'},

  { id: 'xoxxoxxoxxoxx', name: 'diminished/octotonic'},
  { id: 'xxoxxoxxoxxox', name: 'diminished/octotonic'},

  { id: 'xoxoxoxoxoxox', name: 'whole tone'},

]

