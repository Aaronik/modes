import Checkbox from './Checkbox'

type CheckboxesProps = {
  scaleLengths: number[]
  toggleNoteNumber: (scaleLengths: number[], n: number) => void
}

export default function Checkboxes(props: CheckboxesProps) {

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

