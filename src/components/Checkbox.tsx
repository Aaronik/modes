type CheckboxProps = {
  label: string
  checked: boolean
  onChange: (somethin: any) => void
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      { label }
    </label>
  )
}

export default Checkbox
