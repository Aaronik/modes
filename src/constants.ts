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

export const NOTES = ['C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'F#4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5']

export const SCALE_NAMES = [
   // 1 Note Scales, Monads
  // 1.1 Unison
  { id: 'xooooooooooox', name: Unison}, // 0
    // 2 note scales, Diads
    // 2.1 Minor Second and Major Seventh
  { id: 'xxoooooooooox', name: Minor Second}, // 0-1
  { id: 'xooooooooooxx', name: Major Seventh}, // 0-11
  // 2.2 Major Second and Minor Seventh
  { id: 'xoxooooooooox', name: Major Second}, // 0-2
  { id: 'xoooooooooxox', name: Minor Seventh}, // 0-10
  // 2.3 Minor Third and Major Sixth
  { id: 'xooxoooooooox', name: Minor Third}, // 0-3
  { id: 'xooooooooxoox', name: Major Sixth}, // 0-9
  // 2.4 Major Third and Minor Sixth
  { id: 'xoooxooooooox', name: Major Third}, // 0-4
  { id: 'xoooooooxooox', name: Minor Sixth}, // 0-8
  // 2.5 Perfect Fourth and Perfect Fifth
  { id: 'xooooxoooooox', name: Perfect Fourth}, // 0-5
  { id: 'xooooooxoooox', name: Perfect Fifth}, // 0-7
  // 2.6 Tritone
   { id: 'xoooooxooooox', name: Tritone}, // 0-6
    // 7 Note Scales, Heptatonic Scales
  // 7.1 Modes of the Major Scale
  { id: 'xoxoxxoxoxoxx', name: 'major/ionian'}, // 0-5-7
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

  { id: 'xoxxooxxxooxx', name: 'double harmonic'},
  { id: 'xxooxxxooxxox', name: 'double harmonic locrian'},
  { id: 'xooxxxooxxoxx', name: 'double harmonic ionian'},
  { id: 'xxxooxxoxxoox', name: 'double harmonic dorian'},
  { id: 'xxooxxoxxooxx', name: 'double harmonic phrygian'},
  { id: 'xooxxoxxooxxx', name: 'double harmonic lydian'},
  { id: 'xxoxxooxxxoox', name: 'double harmonic mixolydian'},

  { id: 'xxoxoxoxxooxx', name: 'harmonic phrygian'},
  { id: 'xoxoxoxxooxxx', name: 'harmonic phrygian 2'},
  { id: 'xoxoxxooxxxox', name: 'harmonic phrygian 3'},
  { id: 'xoxxooxxxoxox', name: 'harmonic phrygian 4'},
  { id: 'xxooxxxoxoxox', name: 'harmonic phrygian 5'},
  { id: 'xooxxxoxoxoxx', name: 'harmonic phrygian 6'},
  { id: 'xxxoxoxoxxoox', name: 'harmonic phrygian 7'},

  { id: 'xxoxoxxoxooxx', name: 'harmonic locrian'},
  { id: 'xoxoxxoxooxxx', name: 'harmonic locrian 2'},
  { id: 'xoxxoxooxxxox', name: 'harmonic locrian 3'},
  { id: 'xxoxooxxxoxox', name: 'harmonic locrian 4'},
  { id: 'xoxooxxxoxoxx', name: 'harmonic locrian 5'},
  { id: 'xooxxxoxoxxox', name: 'harmonic locrian 6'},
  { id: 'xxxoxoxxoxoox', name: 'harmonic locrian 7'},

  { id: 'xoxoxoxoxoxxx', name: 'neopolitan'},
  { id: 'xoxoxoxoxxxox', name: 'neopolitan 2'},
  { id: 'xoxoxoxxxoxox', name: 'neopolitan 3'},
  { id: 'xoxoxxxoxoxox', name: 'neopolitan 4'},
  { id: 'xoxxxoxoxoxox', name: 'neopolitan 5'},
  { id: 'xxxoxoxoxoxox', name: 'neopolitan 6'},
  { id: 'xxoxoxoxoxoxx', name: 'neopolitan 7'},

  { id: 'xxooxxoxoxoxx', name: 'ionian b2'},
  { id: 'xooxxoxoxoxxx', name: 'ionian b2 2'},
  { id: 'xxoxoxoxxxoox', name: 'ionian b2 3'},
  { id: 'xoxoxoxxxooxx', name: 'ionian b2 4'},
  { id: 'xoxoxxxooxxox', name: 'ionian b2 5'},
  { id: 'xoxxxooxxoxox', name: 'ionian b2 6'},
  { id: 'xxxooxxoxoxox', name: 'ionian b2 7'},

  { id: 'xxooxoxxoxoxx', name: 'lydian b2'},
  { id: 'xooxoxxoxoxxx', name: 'lydian b2 2'},
  { id: 'xoxxoxoxxxoox', name: 'lydian b2 3'},
  { id: 'xxoxoxxxooxox', name: 'lydian b2 4'},
  { id: 'xoxoxxxooxoxx', name: 'lydian b2 5'},
  { id: 'xoxxxooxoxxox', name: 'lydian b2 6'},
  { id: 'xxxooxoxxoxox', name: 'lydian b2 7'},

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

