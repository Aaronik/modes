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
  // 3 Note Scales, Triads
  // 3.01 Three Note Chromatic
   { id: 'xxxooooooooox', name: Chromatic Trichord}, // 0-1-2
   { id: 'xxoooooooooxx', name: Min2 Maj7 Triad}, // 0-1-11
   { id: 'xoooooooooxxx', name: Aug6 Maj7 Triad}, // 0-10-11
  // 3.02 Octatonic Trichord
   { id: 'xxoxoooooooox', name: Upper Minor Trichord}, // 0-1-3
   { id: 'xoxooooooooxx', name: Maj2 Maj7 Triad}, // 0-2-11
   { id: 'xooooooooxxox', name: Maj6 Min7 Triad}, // 0-9-10
  // 3.03 Minor Trichord
   { id: 'xoxxoooooooox', name: Minor Trichord}, // 0-2-3
   { id: 'xxooooooooxox', name: Min2 Min7 Triad}, // 0-1-10
   { id: 'xooooooooxoxx', name: Maj6 Maj7 Triad}, // 0-9-11
  // 3.04 Min3 Maj7 Triad
   { id: 'xxooxooooooox', name: Harmonic Trichord}, // 0-1-4
   { id: 'xooxoooooooxx', name: Min3 Maj7 Triad}, // 0-3-11
   { id: 'xoooooooxxoox', name: Min6 Dim7 Triad}, // 0-8-9
  // 3.05 Major Trichord
   { id: 'xoxoxooooooox', name: Major Trichord}, // 0-2-4
   { id: 'xoxoooooooxox', name: Maj 2 b7 Triad}, // 0-2-10
   { id: 'xoooooooxoxox', name: b6 b7 Triad}, // 0-8-10
  // 3.06 Maj7 Triad No Fifth
   { id: 'xxoooxoooooox', name: Maj7 Chord Second Inversion}, // 0-1-5
   { id: 'xooooooxxooox', name: Maj7 Chord First Inversion}, // 0-7-8
   { id: 'xoooxooooooxx', name: Maj7 Chord no Fifth}, // 0-4-11
  // 3.07 Aug2 b3 Triad
  { id: 'xooxxooooooox', name: Aug2 b3 Triad}, // 0-3-4
  { id: 'xxoooooooxoox', name: b2 Maj6 Triad}, // 0-1-9
  { id: 'xoooooooxooxx', name: b6 Maj7 Triad}, // 0-8-11
  // 3.8 Minor Seventh Triad (No Fifth)
  { id: 'xoxooxoooooox', name: Minor Seventh First Inversion}, // 0-2-5
  { id: 'xooxooooooxox', name: Minor Seventh Triad}, // 0-3-10
  { id: 'xooooooxoxoox', name: Minor Seventh Second Inversion}, // 0-7-9
  // 3.09 b2 #4 Triad
  { id: 'xxooooxooooox', name: b2 #4 Triad}, // 0-1-6
  { id: 'xoooooxxoooox', name: 5 chord add #4}, // 0-6-7
  { id: 'xooooxoooooxx', name: Sus4 Maj7 Triad}, // 0-5-11
  // 3.10 P5 b7 Triad
  { id: 'xooxoxoooooox', name: b3 P4 Triad}, // 0-3-5
  { id: 'xoxooooooxoox', name: Maj2 Maj6 Triad}, // 0-2-9
  { id: 'xooooooxooxox', name: P5 b7 Triad}, // 0-7-10
  // 3.11 Dominant Seventh Triad
  { id: 'xoxoooxooooox', name: Dominant Seventh Third Inversion}, // 0-2-6
  { id: 'xoooooxoxooox', name: Dominant Seventh First Inversion}, // 0-6-8
  { id: 'xoooxoooooxox', name: Dominant Seventh Triad}, // 0-4-10
  // 3.12 P4 b5 Triad
  { id: 'xxoooooxoooox', name: b2 b6 Triad}, // 0-1-8
  { id: 'xooooxxooooox', name: P4 b5 Triad}, // 0-5-6
  { id: 'xoooooxooooxx', name: #4 Maj7 Triad}, // 0-6-11
  // 3.13 Major Seventh Triad (No Third)
  { id: 'xoooxxoooooox', name: Maj3 P4 Triad}, // 0-4-5
  { id: 'xxooooooxooox', name: b2 b6 Triad}, // 0-1-8
  { id: 'xooooooxoooxx', name: P5 Maj7 Triad}, // 0-7-11
  // 3.14 Diminished Triad
  { id: 'xooxooxooooox', name: Diminished Triad}, // 0-3-6
  { id: 'xooxoooooxoox', name: Diminished Triad First Inversion}, // 0-3-9
  { id: 'xoooooxooxoox', name: Diminished Triad Second Inversion}, // 0-6-9
  // 3.15 Suspended Triad
  { id: 'xoxooooxoooox', name: Sus2 Triad}, // 0-2-7
  { id: 'xooooxoxoooox', name: Sus4 Triad}, // 0-5-7
  { id: 'xooooxooooxox', name: Sus4 Triad Second Inversion}, // 0-5-7
  // 3.16 Maj3 #4 Triad
  { id: 'xoooxoxooooox', name: Maj3 #4 Triad}, // 0-4-6
  { id: 'xoxoooooxooox', name: Maj2 b6 Triad}, // 0-2-8
  { id: 'xoooooxoooxox', name: #4 b7 Triad}, // 0-6-10
  // 3.17 Minor Triad
  { id: 'xooxoooxoooox', name: Minor Triad}, // 0-3-7
  { id: 'xooooxooxooox', name: Minor Triad First Inversion}, // 0-5-8
  { id: 'xoooxooooxoox', name: Minor Triad Second Inversion}, // 0-4-9
  // 3.18 Major Triad
  { id: 'xoooxooxoooox', name: Major Triad}, // 0-4-7
  { id: 'xooxooooxooox', name: Major Triad First Inversion}, // 0-3-8
  { id: 'xooooxoooxoox', name: Major Triad Second Inversion}, // 0-5-9
  // 3.19 Augmented Triad
  { id: 'xoooxoooxooox', name: 'Augmented'}, // 0-4-8
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

]

