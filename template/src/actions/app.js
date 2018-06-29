import get from 'lodash/get'

import { initialValues } from 'constants'

const updateAppDimensions = dimensions => ({
  type: 'UPDATE_APP_DIMENSIONS',
  payload: { dimensions },
})

const  detectBrowserLocale = () => {
  // https://gist.github.com/ksol/62b489572944ca70b4ba
  const locale = get(navigator, 'language', get(navigator, 'userLanguage', initialValues.locale))

  return ({
    type: 'DETECT_BROWSER_LOCALE',
    payload: {
      locale: locale.split('-')[0],
    }
  })
}

export {
  updateAppDimensions,
  detectBrowserLocale,
}
