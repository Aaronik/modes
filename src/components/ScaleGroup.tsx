import { DisplayType, ScaleArray } from "../types"
import { generateScaleId } from "../util"
import Scale from "./Scale"

type ScaleGroupProps = {
  scales: ScaleArray[]
  displayType: DisplayType
}

const ScaleGroup = (props: ScaleGroupProps) => {
  const { scales, displayType } = props

  const style = {
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  } as const

  return (
    <div style={style}>
      {
        scales.map((scale, index) => {
          return (
            <Scale scale={scale} displayType={displayType} name={getSavedNameForScale(scale)} onNameChange={onScaleNameChange(scale)} key={'scale-' + index}/>
          )
        })
      }
    </div>
  )
}

export default ScaleGroup

const getSavedNameForScale = (scale: ScaleArray) => {
  const id = generateScaleId(scale)
  const name = localStorage.getItem('name-' + id) || '--'
  return name
}

const onScaleNameChange = (scale: ScaleArray) => (newName: string) => {
  const id = generateScaleId(scale)
  localStorage.setItem('name-' + id, newName)
}
