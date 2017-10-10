import { FETCHED_CLASSES } from '../actions/classes/fetch'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_CLASSES :
      return [].concat(payload)

    default :
      return state
  }
}
