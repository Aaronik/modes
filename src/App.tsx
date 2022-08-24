import './App.css'
import { useState } from 'react'
import { SCALE_FILTERS } from './filters'
import { ALL_SCALES } from './constants'
import Checkboxes from './components/Checkboxes'
import { generateScaleId, getSharpnessOfScale } from './util'
import { ScaleArray } from './types'
import './initialize' // populate default scale names
import Checkbox from './components/Checkbox'
import ScaleGroup from './components/ScaleGroup'

const sortScalesByModeGroup = (scales: ScaleArray[]): ScaleArray[][] => {
  type TwelveLetterString = string
  type ModeGroup = TwelveLetterString[]
  let modeGroups: ModeGroup[] = []

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

  return modeGroups.map(modeGroup => {
    return modeGroup.map(scaleString => {
      return scaleString.split('').map(chr => chr === 'x').concat([true]) as ScaleArray
    })
  })
}

const sortScalesBySharpness = (scales: ScaleArray[]): ScaleArray[] => {
  return scales.sort((scaleA, scaleB) => {
    const scaleASharpness = getSharpnessOfScale(scaleA)
    const scaleBSharpness = getSharpnessOfScale(scaleB)

    if (scaleASharpness > scaleBSharpness) {
      return 1
    } else return -1
  })
}

function App() {

  const [isSortedBySharpness, setIsSortedBySharpness] = useState(true)
  const [isSortedByModeGroup, setIsSortedByModeGroup] = useState(true)
  const [scaleLengths, setScaleLengths] = useState<number[]>([7])

  let flatScales = ALL_SCALES
    .filter(SCALE_FILTERS.endsInTonic)
    .filter(SCALE_FILTERS.hasNNotes(scaleLengths))

  let modeGroups: ScaleArray[][] = [] // grouped by modes

  if (isSortedBySharpness) flatScales = sortScalesBySharpness(flatScales)
  if (isSortedByModeGroup) modeGroups = sortScalesByModeGroup(flatScales)

  if (!modeGroups) {
    modeGroups = [flatScales]
  }

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
        <Checkbox label='sort by sharpness' checked={isSortedBySharpness} onChange={() => setIsSortedBySharpness(!isSortedBySharpness)}/>
        <Checkbox label='sort by mode group' checked={isSortedByModeGroup} onChange={() => setIsSortedByModeGroup(!isSortedByModeGroup)}/>
        <Checkboxes scaleLengths={scaleLengths} toggleNoteNumber={toggleNoteNumber} />
        <p>({flatScales.length} scales)</p>
        <p>[Click to listen] (Edit name)</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>{
          modeGroups.map((scaleArrays, index) => {
            return <ScaleGroup scales={scaleArrays} key={'ScaleGroup-' + index}/>
          })
        }</div>
      </header>
    </div>
  )
}

export default App

