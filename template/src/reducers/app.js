import { get } from 'lodash'

const initialState = {
  width: 300,
  currentSearchType: 'all',
}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_WINDOW_WIDTH':
      return ({
        ...state,
        width: get(payload, 'width', initialState.width),
      })
    case 'UPDATE_SEARCH_TYPE':
      return ({
        ...state,
        currentSearchType: get(payload, 'type', initialState.currentSearchType),
      })
    default:
      return state
  }
}

export default appReducer
