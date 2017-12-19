import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import { get } from 'lodash'

const APP_BASE_NAME = get(process.env, 'APP_BASE_NAME', '')

const browserHistory = useRouterHistory(createHistory)({
  basename: APP_BASE_NAME,
})

export default browserHistory
