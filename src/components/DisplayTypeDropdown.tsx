import { DisplayType } from "../types"

type DisplayTypeDropdownProps = {
  type: DisplayType
  setDisplayType: (type: DisplayType) => void
}

const DisplayTypeDropdown = (props: DisplayTypeDropdownProps) => {
  const { type, setDisplayType } = props

  const dropdownStyle = {
    padding: '8px',
    fontSize: '16px'
  }

  return (
    <div>
      <label>
        Display Type:&nbsp;
        <select style={dropdownStyle} value={type} onChange={e => setDisplayType(e.target.value as DisplayType)}>
          <option value="literal">Literal</option>
          <option value="notes">Notes</option>
        </select>
      </label>
    </div>
  )
}

export default DisplayTypeDropdown
