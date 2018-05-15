import { bindActionCreators } from 'redux'

import * as appActions from './app'
import * as routerActions from './router'

const mapDispatchToProps = dispatch => ({
  actions: {
    app: bindActionCreators(appActions, dispatch),
    router: bindActionCreators(routerActions, dispatch),
  },
})

export default mapDispatchToProps
