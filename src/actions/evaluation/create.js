import API from '../../api'
import { history } from '../../store'

const api = new API()

export default (evaluation) => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
        const backend = api.service('evaluations')
        backend.create(evaluation)
          .then((result) => {
            console.log(result)
          })
          .catch((error) => {
          })
      })
  }
}
