import { get } from 'lodash'

import { initialValues } from 'contants'

const initialState = {
  width: initialValues.width,
}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_WINDOW_WIDTH':
      return ({
        ...state,
        width: get(payload, 'width', initialState.width),
      })
    default:
      return state
  }
}

export default appReducer
