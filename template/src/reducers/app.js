import get from 'lodash/get'

import { initialValues } from 'constants'
import { Updater } from 'helpers'

const initialState = {
  dimensions: initialValues.dimensions,
  is: initialValues.is,
  locale: initialValues.locale,
}

const appReducer = (state = initialState, { type, payload }) => {
  const { update, from } = new Updater(initialState, state)

  switch (type) {
    case 'UPDATE_APP_DIMENSIONS': {
      const { width, height } = get(payload, 'dimensions', initialState.dimensions)

      return {
        ...state,
        dimensions: { width, height },
        is: {
          desktop: width > 1024,
          tablet: width <= 1024 && width > 415,
          mobile: width <= 415,
        },
      }
    }
    case 'DETECT_BROWSER_LOCALE':
      return update('locale')(from(payload, 'locale'))
    default:
      return state
  }
}

export default appReducer
