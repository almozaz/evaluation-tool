import API from '../../api'

export const FETCH_CLASSES = 'FETCH_CLASSES'

const api = new API()

export default () => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
        const backend = api.service('classes')
        backend.find()
        .then((result) => {
          dispatch({
            type: FETCH_CLASSES,
            payload: result.data
          })
        })
        .catch((error) => {
          // error handling!
        })
      })
  }
}
