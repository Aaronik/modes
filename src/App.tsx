import './App.css'
import * as Tone from 'tone'
import Checkbox from './Checkbox'
import { useState } from 'react'

const synth = new Tone.Synth().toDestination()

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

const ALL_SCALES = generateAllScales()
const NOTES = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5']

const SCALE_FILTERS = {

  endsInTonic: (scale: ScaleArray) => {
    return scale[scale.length - 1]
  },

  hasNNotes: (scaleLengths: number[]) => (scale: ScaleArray) => {
    return scaleLengths.includes(scale.filter(bit => bit).length - 1)
  },

}

function App() {

  const [ scaleLengths, setScaleLengths ] = useState<number[]>([5,6,7,8])

  const scales = ALL_SCALES
    .filter(SCALE_FILTERS.endsInTonic)
    .filter(SCALE_FILTERS.hasNNotes(scaleLengths))

  const toggleNoteNumber = (scaleLs: typeof scaleLengths, n: number) => {
    console.log('toggleNoteNumber called with:', n, ', scaleLengths:', scaleLengths)
    if (scaleLs.includes(n)) {
      // If we have the number wanting to be toggled inside of the array (the array of note numbers),
      // then we want to get rid of that one
      const newLengths = scaleLs.filter(x => x !== n)
      console.log('scaleLs after removing number:', newLengths)
      setScaleLengths([...newLengths])
    } else {
      // Otherwise, we want to add that number into the array
      scaleLs.push(n)
      console.log('scaleLs after adding number:', scaleLs)
      setScaleLengths([...scaleLs])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Modes</h2>
        <Checkboxes scaleLengths={scaleLengths} toggleNoteNumber={toggleNoteNumber}/>
        <p>({scales.length} scales)</p>
        <p>(Click on them)</p>
        {
          scales.map((scale, index) => <Scale scale={scale} key={'scale-' + index}/>)
        }
      </header>
    </div>
  )
}

export default App

type ScaleArray = [boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean] // 13, root twice

type ScaleProps = {
  scale: ScaleArray
}

function Scale(props: ScaleProps) {

  const style = {
    cursor: 'pointer'
  }

  const onClick = async () => {
    await Tone.start()

    const notes = props.scale.map((bit, index) => {
      return bit ? NOTES[index] : null
    }).filter(Boolean) as string[]

    notes.forEach((note, index) => {
      synth.triggerAttackRelease(note, "8n", Tone.now() + (index / 3))
    })
  }

  return (
    <code style={style} onClick={onClick}>
      [
        {props.scale.map(note => note ? 'x' : 'o')}
      ]
    </code>
  )
}

type CheckboxesProps = {
  scaleLengths: number[]
  toggleNoteNumber: (scaleLengths: number[], n: number) => void
}

function Checkboxes(props: CheckboxesProps) {

  const { scaleLengths, toggleNoteNumber } = props

  return (
    <p>
      <Checkbox label='5 notes' checked={scaleLengths.includes(5)} onChange={() => toggleNoteNumber(scaleLengths, 5)}/>
      <br/>
      <Checkbox label='6 notes' checked={scaleLengths.includes(6)} onChange={() => toggleNoteNumber(scaleLengths, 6)}/>
      <br/>
      <Checkbox label='7 notes' checked={scaleLengths.includes(7)} onChange={() => toggleNoteNumber(scaleLengths, 7)}/>
      <br/>
      <Checkbox label='8 notes' checked={scaleLengths.includes(8)} onChange={() => toggleNoteNumber(scaleLengths, 8)}/>
    </p>
  )
}

