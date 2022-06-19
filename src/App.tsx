import './App.css'
import * as Tone from 'tone'

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


type ScaleFilter = (scale: ScaleArray) => boolean

const SCALE_FILTERS: { [name: string]: ScaleFilter } = {

  endsInTonic: (scale: ScaleArray) => {
    return scale[scale.length - 1]
  },

  has7Notes: (scale) => {
    return scale.filter(bit => bit).length === 8
  }
}

function App() {

  const scales = ALL_SCALES
    .filter(SCALE_FILTERS.endsInTonic)
    .filter(SCALE_FILTERS.has7Notes)

  console.log('working with:', scales.length, 'scales.')

  return (
    <div className="App">
      <header className="App-header">
        <h2>Modes</h2>
        <p>
          (Click on them)
        </p>
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
