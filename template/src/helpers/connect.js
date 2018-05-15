import * as redux from 'react-redux'

import mapDispatchToProps from 'actions'

const connect = mapStateToProps => Component =>
  redux.connect(mapStateToProps, mapDispatchToProps)(Component)

export default connect
