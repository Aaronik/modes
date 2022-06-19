import './App.css'

const generateAllScales = (): ScaleArray[] => {
  const scales: ScaleArray[] = []

  // by starting at 2^12 we eliminate all scales that don't have 13 degrees and
  // that don't start with a true. That's the 1.
  for (let i = Math.pow(2, 12); i < Math.pow(2, 13); i++) {
    const base2 = i.toString(2)
    const scale = base2.split('').map(bit => !!+bit) as ScaleArray
    console.log(scale)
    scales.push(scale)
  }

  console.log('all scales length:', scales.length)
  return scales
}

// const ALL_SCALES: ScaleArray[] = [
//   [true, false, true, false, true, true, false, true, false, true, false, true, true] // TODO
// ]

const ALL_SCALES = generateAllScales()

const SCALE_FILTERS = {

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Modes
        </p>
        {
          ALL_SCALES.map(scale => Scale({ scale }))
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

  const onClick = () => {
    alert(props.scale.toString())
  }

  return (
    <code style={style} onClick={onClick}>
    [
      {props.scale.map(note => note ? 'x' : 'o')}
    ]
    </code>
  )
}
