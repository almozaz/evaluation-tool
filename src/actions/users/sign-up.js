import API from '../../api'
import signIn from './sign-in'

const api = new API()

export default (user) => {
  return (dispatch) => {
    const backend = api.service('users')

    backend.create(user)
      .then((result) => {
        dispatch(signIn(user))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
