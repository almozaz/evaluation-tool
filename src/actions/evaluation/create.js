import API from '../../api'
import { history } from '../../store'
import fetchStudent from '../students/fetch'

const api = new API()

export default (evaluation) => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
        const backend = api.service('evaluations')
        backend.create(evaluation)
          .then((result) => {
            dispatch(fetchStudent(result.studentId))
            console.log(result)
          })
          .catch((error) => {
          })
      })
  }
}
