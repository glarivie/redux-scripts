import { get } from 'lodash'

import { initialValues } from 'constants'

const initialState = {
  width: initialValues.width,
}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@@APP/UPDATE_WINDOW_WIDTH':
      return ({
        ...state,
        width: get(payload, 'width', initialState.width),
      })
    default:
      return state
  }
}

export default appReducer
