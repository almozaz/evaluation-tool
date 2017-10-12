import { RANDOM_STUDENT } from '../actions/students/getRandom'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case RANDOM_STUDENT :
      return [].concat(payload)

    default :
      return state
  }
}
