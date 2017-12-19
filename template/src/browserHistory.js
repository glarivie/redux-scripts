import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'

const browserHistory = useRouterHistory(createHistory)({
  basename: process.env.APP_BASE_NAME,
})

export default browserHistory
