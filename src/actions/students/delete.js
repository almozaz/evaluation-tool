import API from '../../api'
import { history } from '../../store'

export const DELETE_STUDENT = 'DELETE_STUDENT'

const api = new API()

export default (student) => {
  return (dispatch) => {

    const backend = api.service('students')
    backend.remove(student)
      .then((result) => {
        dispatch({
          type: DELETE_STUDENT,
          payload: result
        })
        history.goBack()
      })
      .catch((error) => {
      })

  }
}
