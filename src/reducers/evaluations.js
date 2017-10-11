import { FETCH_EVALUATIONS } from '../actions/evaluation/fetch'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCH_EVALUATIONS :
      return [].concat(payload)

    default :
      return state
  }
}
