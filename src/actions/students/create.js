import API from '../../api'
import { history } from '../../store'
import fetchClasses from '../classes/fetch'

const api = new API()
export const CREATE_STUDENT = 'CREATE_STUDENT'

export default (student) => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
      const backend = api.service('students')
      backend.create(student)
        .then((result) => {
          dispatch({
            type: CREATE_STUDENT,
            payload: result
          })
          dispatch(fetchClasses())
        })
        .catch((error) => {
          console.log(error)
        })
      })
    .catch((error) => {
      console.log(error)
    })
  }
}
