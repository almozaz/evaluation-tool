import API from '../../api'

export const FETCH_EVALUATIONS = 'FETCH_EVALUATIONS'

const api = new API()

export default () => {
  return (dispatch) => {

    api.app.authenticate()
      .then(() => {
        const backend = api.service('evaluations')
        backend.find({
          query: {
            $limit: false
          }
        })
        .then((result) => {
          dispatch({
            type: FETCH_EVALUATIONS,
            payload: result.data
          })
        })
        .catch((error) => {
          // error handling!
        })
    })
  }
}
