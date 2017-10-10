import API from '../../api'
import { history } from '../../store'

const api = new API()

export default (student) => {
  return (dispatch) => {

    const backend = api.service('students')
    backend.create(student)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
      })

  }
}
