import './App.css'
import { useState } from 'react'
import { SCALE_FILTERS } from './filters'
import { ALL_SCALES } from './constants'
import Scale from './components/Scale'
import Checkboxes from './components/Checkboxes'
import { generateScaleId } from './util'
import { ScaleArray } from './types'
import './initialize' // populate default scale names

function App() {

  const [scaleLengths, setScaleLengths] = useState<number[]>([5, 6, 7, 8])

  const scales = ALL_SCALES
    .filter(SCALE_FILTERS.endsInTonic)
    .filter(SCALE_FILTERS.hasNNotes(scaleLengths))

  const toggleNoteNumber = (scaleLs: typeof scaleLengths, n: number) => {
    if (scaleLs.includes(n)) {
      // If we have the number wanting to be toggled inside of the array (the array of note numbers),
      // then we want to get rid of that one
      const newLengths = scaleLs.filter(x => x !== n)
      setScaleLengths([...newLengths])
    } else {
      // Otherwise, we want to add that number into the array
      scaleLs.push(n)
      setScaleLengths([...scaleLs])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Modes</h2>
        <Checkboxes scaleLengths={scaleLengths} toggleNoteNumber={toggleNoteNumber} />
        <p>({scales.length} scales)</p>
        <p>[Click to listen] (Edit name)</p>
        {
          scales.map(
            (scale, index) => <Scale scale={scale} key={'scale-' + index} name={getNameForScale(scale)} onNameChange={onScaleNameChange(scale)}/>
          )
        }
      </header>
    </div>
  )
}

export default App

const getNameForScale = (scale: ScaleArray) => {
  const id = generateScaleId(scale)
  const name = localStorage.getItem('name-' + id) || '--'
  return name
}

const onScaleNameChange = (scale: ScaleArray) => (newName: string) => {
  const id = generateScaleId(scale)
  localStorage.setItem('name-' + id, newName)
}
