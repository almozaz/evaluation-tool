import { FETCH_STUDENT } from '../actions/students/fetch'
import { CREATE_STUDENT } from '../actions/students/create'
import { DELETE_STUDENT } from '../actions/students/delete'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_STUDENT :
      return state.concat(payload)

    case CREATE_STUDENT :
      return state.concat(payload)

    case DELETE_STUDENT :
      return state

    default :
      return state
  }
}
