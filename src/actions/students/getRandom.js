import API from '../../api'
import filterResult from './logic'

export const RANDOM_STUDENT = 'RANDOM_STUDENT'

const api = new API()

export default (classId) => {
  return (dispatch) => {
    const backend = api.service('students')
    backend.find({
      query: {
        classId: classId
      }
    })
    .then((result) => {
      const student = filterResult(result)
      dispatch({
        type: RANDOM_STUDENT,
        payload: student
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
