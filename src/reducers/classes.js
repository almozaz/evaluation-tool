import { FETCH_CLASSES } from '../actions/classes/fetch'
import { CREATE_CLASS } from '../actions/classes/create'
import { DELETE_CLASS } from '../actions/classes/delete'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_CLASSES :
      return [].concat(payload)

    case CREATE_CLASS :
      return state.concat(payload)

    case DELETE_CLASS :
      return state

    default :
      return state
  }
}
