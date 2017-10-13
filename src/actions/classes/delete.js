import API from '../../api'
import { history } from '../../store'

export const DELETE_CLASS = 'DELETE_CLASS'

const api = new API()

export default (batch) => {
  return (dispatch) => {

    const backend = api.service('classes')
    backend.remove(batch)
      .then((result) => {
        dispatch({
          type: DELETE_CLASS,
          payload: result
        })
        history.push('/')
      })
      .catch((error) => {
      })

  }
}
