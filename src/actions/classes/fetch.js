import API from '../../api'

export const FETCHED_CLASSES = 'FETCHED_CLASSES'

const api = new API()

export default () => {
  return (dispatch) => {
    const backend = api.service('classes')
    backend.find()
    .then((result) => {
      console.log(result)
      dispatch({
        type: FETCHED_CLASSES,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
  }
}
