import API from '../../api'

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
      dispatch({
        type: RANDOM_STUDENT,
        payload: result.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
