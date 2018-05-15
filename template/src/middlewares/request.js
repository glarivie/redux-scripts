const extractBody = async response => {
  const ctype = response.headers.get('content-type')

  if (ctype && ctype.includes('application/json'))
    return response.json()

  return response.text()
}

const requestMiddleware = ({ getState }) => dispatch =>
  async ({ type, url, method = 'GET', body, onSuccess, onError, ...action }) => {
    const state = getState()
    const initialType = type.slice(10) // Remove @@REQUEST/ from action type
    const headers = {
      'Content-Type': 'application/json',
      ...action.headers || {},
    }

    if (!type || !url || !type.includes('@@REQUEST/'))
      return dispatch({ type, ...action })

    dispatch({ type: `${initialType}_PENDING` })

    try {
      const response = await fetch(url, { method, headers, body })
      const data = await extractBody(response)

      if (response.status !== 200)
        throw new Error(JSON.stringify(data))

      dispatch({
        type: `${initialType}_SUCCESS`,
        payload: { data, error: null },
        ...action,
      })

      if (onSuccess)
        return onSuccess(body, state)
    } catch ({ message }) {
      const error = JSON.parse(message)

      dispatch({
        type: `${initialType}_ERROR`,
        payload: { data: null, error },
      })

      if (onError)
        return onError(error, state)
    }
  }

export default requestMiddleware
