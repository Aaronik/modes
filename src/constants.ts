import { ScaleArray } from "./types"

// All possible scales of any size within our chromatic system (12tet [12 ton equal temperment])
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
  { id: 'xxoxoxxoxxoox', name: 'locrian o7'},

  { id: 'xoxxoxoxoxoxx', name: 'melodic minor'},
  { id: 'xxoxoxoxoxxox', name: 'dorian b2'},
  { id: 'xoxoxoxoxxoxx', name: 'lydian augmented'},
  { id: 'xoxoxoxxoxxox', name: 'lydian dominant'},
  { id: 'xoxoxxoxxoxox', name: 'mixolydian b6'},
  { id: 'xoxxoxxoxoxox', name: 'aeolian b5'},
  { id: 'xxoxxoxoxoxox', name: 'altered scale'},

  { id: 'xoxxooxxxooxx', name: 'Double Harmonic'},
  { id: 'xxooxxxooxxox', name: 'Double Harmonic locrian'},
  { id: 'xooxxxooxxoxx', name: 'Double Harmonic ionian'},
  { id: 'xxxooxxoxxoox', name: 'Double Harmonic dorian'},
  { id: 'xxooxxoxxooxx', name: 'Double Harmonic phrygian'},
  { id: 'xooxxoxxooxxx', name: 'Double Harmonic lydian'},
  { id: 'xxoxxooxxxoox', name: 'Double Harmonic mixolydian'},

  { id: 'xxoxoxoxxooxx', name: 'Harmonic phrygian'},
  { id: 'xoxoxoxxooxxx', name: 'Harmonic phrygian 2'},
  { id: 'xoxoxxooxxxox', name: 'Harmonic phrygian 3'},
  { id: 'xoxxooxxxoxox', name: 'Harmonic phrygian 4'},
  { id: 'xxooxxxoxoxox', name: 'Harmonic phrygian 5'},
  { id: 'xooxxxoxoxoxx', name: 'Harmonic phrygian 6'},
  { id: 'xxxoxoxoxxoox', name: 'Harmonic phrygian 7'},

  { id: 'xxoxoxxoxooxx', name: 'Harmonic locrian'},
  { id: 'xoxoxxoxooxxx', name: 'Harmonic locrian 2'},
  { id: 'xoxxoxooxxxox', name: 'Harmonic locrian 3'},
  { id: 'xxoxooxxxoxox', name: 'Harmonic locrian 4'},
  { id: 'xoxooxxxoxoxx', name: 'Harmonic locrian 5'},
  { id: 'xooxxxoxoxxox', name: 'Harmonic locrian 6'},
  { id: 'xxxoxoxxoxoox', name: 'Harmonic locrian 7'},

  { id: 'xoxoxoxoxoxxx', name: 'Neopolitan'},
  { id: 'xoxoxoxoxxxox', name: 'Neopolitan 2'},
  { id: 'xoxoxoxxxoxox', name: 'Neopolitan 3'},
  { id: 'xoxoxxxoxoxox', name: 'Neopolitan 4'},
  { id: 'xoxxxoxoxoxox', name: 'Neopolitan 5'},
  { id: 'xxxoxoxoxoxox', name: 'Neopolitan 6'},
  { id: 'xxoxoxoxoxoxx', name: 'Neopolitan 7'},

  // TODO
  // * Harmonic Mixolydian
  // * Harmonic Lydian

  { id: 'xoxoxooxoxoox', name: 'major pentatonic'},
  { id: 'xoxooxoxooxox', name: 'dorian pentatonic'},
  { id: 'xooxoxooxoxox', name: 'phrygian pentatonic'},
  { id: 'xoxooxoxoxoox', name: 'mixolydian pentatonic'},
  { id: 'xooxoxoxooxox', name: 'minor pentatonic'},

  { id: 'xoxxoxxoxxoxx', name: 'diminished/octotonic'},
  { id: 'xxoxxoxxoxxox', name: 'diminished/octotonic'},

  { id: 'xoxoxoxoxoxox', name: 'whole tone'},

  { id: 'xoooxoooxooox', name: 'augmented'},

]
