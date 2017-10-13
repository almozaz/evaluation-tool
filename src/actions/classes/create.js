import API from '../../api'
import { history } from '../../store'

export const CREATE_CLASS = 'CREATE_CLASS'

const api = new API()

export default (batch) => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
        const backend = api.service('classes')
        backend.create(batch)
          .then((result) => {
            dispatch({
              type: CREATE_CLASS,
              payload: result
            })
          })
          .catch((error) => {
          })
      })
  }
}
