import { SCALE_NAMES } from './constants'

// This should be called one time ever, giving the names of the default
// scales (mixolydian, major pentatonic, etc.)
const initiallyPopulateScaleNames = () => {
  SCALE_NAMES.forEach(pair => localStorage.setItem('name-' + pair.id, pair.name))
}

if (!localStorage.getItem('initialized')) {
  initiallyPopulateScaleNames()
  localStorage.setItem('initialized', 'true')
}


