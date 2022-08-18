import Checkbox from './Checkbox'

type CheckboxesProps = {
  scaleLengths: number[]
  toggleNoteNumber: (scaleLengths: number[], n: number) => void
}

export default function Checkboxes(props: CheckboxesProps) {

  const { scaleLengths, toggleNoteNumber } = props

  return (
    <p>
      <Checkbox label='1 note' checked={scaleLengths.includes(1)} onChange={() => toggleNoteNumber(scaleLengths, 1)}/>
      <br/>
      <Checkbox label='2 notes' checked={scaleLengths.includes(2)} onChange={() => toggleNoteNumber(scaleLengths, 2)}/>
      <br/>
      <Checkbox label='3 notes' checked={scaleLengths.includes(3)} onChange={() => toggleNoteNumber(scaleLengths, 3)}/>
      <br/>
      <Checkbox label='4 notes' checked={scaleLengths.includes(4)} onChange={() => toggleNoteNumber(scaleLengths, 4)}/>
      <br/>
      <Checkbox label='5 notes' checked={scaleLengths.includes(5)} onChange={() => toggleNoteNumber(scaleLengths, 5)}/>
      <br/>
      <Checkbox label='6 notes' checked={scaleLengths.includes(6)} onChange={() => toggleNoteNumber(scaleLengths, 6)}/>
      <br/>
      <Checkbox label='7 notes' checked={scaleLengths.includes(7)} onChange={() => toggleNoteNumber(scaleLengths, 7)}/>
      <br/>
      <Checkbox label='8 notes' checked={scaleLengths.includes(8)} onChange={() => toggleNoteNumber(scaleLengths, 8)}/>
      <br/>
      <Checkbox label='9 notes' checked={scaleLengths.includes(9)} onChange={() => toggleNoteNumber(scaleLengths, 9)}/>
      <br/>
      <Checkbox label='10 notes' checked={scaleLengths.includes(10)} onChange={() => toggleNoteNumber(scaleLengths, 10)}/>
      <br/>
      <Checkbox label='11 notes' checked={scaleLengths.includes(11)} onChange={() => toggleNoteNumber(scaleLengths, 11)}/>
      <br/>
      <Checkbox label='12 notes' checked={scaleLengths.includes(12)} onChange={() => toggleNoteNumber(scaleLengths, 12)}/>
      <br/>
    </p>
  )
}

