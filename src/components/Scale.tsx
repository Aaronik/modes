import * as Tone from 'tone'
import { DisplayType, ScaleArray } from '../types'
import { NOTES } from '../constants'
import { generateScaleId } from '../util'

const synth = new Tone.Synth().toDestination()

type ScaleProps = {
  scale: ScaleArray
  name: string
  onNameChange: (newName: string) => void
  displayType: DisplayType
}

export default function Scale(props: ScaleProps) {
  const { scale, name, onNameChange, displayType } = props

  const notes = scale.map((bit, index) => {
    return bit ? NOTES[index] : null
  }).filter(Boolean) as string[]

  const onClick = async () => {
    await Tone.start()

    notes.forEach((note, index) => {
      synth.triggerAttackRelease(note, "8n", Tone.now() + (index / 3))
    })
  }

  const onChange = (e: React.FormEvent<HTMLSpanElement>) => {
    const newContent = e.currentTarget.textContent || ''
    onNameChange(newContent)
  }

  let scaleDisplay: string

  switch(displayType) {
    case 'literal': scaleDisplay = generateScaleId(scale); break
    case 'notes': scaleDisplay = notes.map(note => note.slice(0, note.length - 1)).join(', '); break
  }

  return (
    <div>
      <code onClick={onClick} onTouchEnd={onClick} style={{ cursor: 'pointer', marginRight: '10px' }}>
        [{scaleDisplay}]
      </code>
      <code>
        (<span contentEditable suppressContentEditableWarning onInput={onChange}>{name}</span>)
      </code>
    </div>
  )
}
