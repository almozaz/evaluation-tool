import API from '../../api'

export const FETCH_STUDENT = 'FETCH_STUDENT'

const api = new API()

export default (studentId) => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
        const backend = api.service('students')
        backend.find({
          query: {
            _id: studentId
          }
        })
        .then((result) => {
          dispatch({
            type: FETCH_STUDENT,
            payload: result.data
          })
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }
}
