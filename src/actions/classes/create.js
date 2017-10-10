import API from '../../api'
import { history } from '../../store'

const api = new API()

export default (batch) => {
  return (dispatch) => {

    const backend = api.service('classes')
    backend.create(batch)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
      })

  }
}
