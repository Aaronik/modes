import * as Tone from 'tone'
import { ScaleArray } from '../types'
import { NOTES } from '../constants'

const synth = new Tone.Synth().toDestination()

type ScaleProps = {
  scale: ScaleArray
}

export default function Scale(props: ScaleProps) {
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

