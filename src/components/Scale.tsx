import * as Tone from 'tone'
import { ScaleArray } from '../types'
import { NOTES } from '../constants'
import { generateScaleId } from '../util'

const synth = new Tone.Synth().toDestination()

type ScaleProps = {
  scale: ScaleArray
  name: string
  onNameChange: (newName: string) => void
}

export default function Scale(props: ScaleProps) {
  const { scale, name, onNameChange } = props

  const style = {
    alignSelf: 'flex-start',
    marginLeft: '40vw',
  }

  const onClick = async () => {
    await Tone.start()

    const notes = scale.map((bit, index) => {
      return bit ? NOTES[index] : null
    }).filter(Boolean) as string[]

    notes.forEach((note, index) => {
      synth.triggerAttackRelease(note, "8n", Tone.now() + (index / 3))
    })
  }

  const onChange = (e: React.FormEvent<HTMLSpanElement>) => {
    const newContent = e.currentTarget.textContent || ''
    onNameChange(newContent)
  }

  return (
    <div style={style}>
      <code onClick={onClick} style={{ cursor: 'pointer', marginRight: '10px' }}>
        [{generateScaleId(scale)}]
      </code>
      <code>
        (<span contentEditable suppressContentEditableWarning onInput={onChange}>{name}</span>)
      </code>
    </div>
  )
}

