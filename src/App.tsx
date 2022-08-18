import './App.css'
import { useState } from 'react'
import { SCALE_FILTERS } from './filters'
import { ALL_SCALES } from './constants'
import Scale from './components/Scale'
import Checkboxes from './components/Checkboxes'
import { generateScaleId } from './util'
import { ScaleArray } from './types'
import './initialize' // populate default scale names

const sortScalesByModeGroup = (scales: ScaleArray[]): ScaleArray[] => {
  type TwelveLetterString = string
  type ModeGroup = TwelveLetterString[][]
  let modeGroups: ModeGroup = []

  scales.forEach(scale => {
    const id = generateScaleId(scale).slice(0, 12) // We don't want the last x here
    const doubledId = id + id

    // Now we take one item from each existing mode group and see
    // if it matches any substring of the doubledId
    const anyFit: boolean = modeGroups.some(modeGroup => {
      if (doubledId.match(modeGroup[0])) {
        modeGroup.push(id)
        return true
      } else return false
    })

    // If none of them fit, it's a new mode group
    if (!anyFit) {
      modeGroups.push([id])
    }
  })

  // Transform our 12 x's or o's into a ScaleArray
  const flattenedModeGroups = modeGroups.flat()
  return flattenedModeGroups.map(modeGroup => {
    return modeGroup.split('').map(chr => chr === 'x').concat([true])
  }) as ScaleArray[]

}

function App() {

  const [scaleLengths, setScaleLengths] = useState<number[]>([0,1,2,3,4,5,6,7,8,9,10,11,12])
  // const [scaleLengths, setScaleLengths] = useState<number[]>([7])

  let scales = ALL_SCALES
    .filter(SCALE_FILTERS.endsInTonic)
    .filter(SCALE_FILTERS.hasNNotes(scaleLengths))

  scales = sortScalesByModeGroup(scales)

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
