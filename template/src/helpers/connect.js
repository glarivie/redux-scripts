import * as redux from 'react-redux'

import mapDispatchToProps from 'actions'

// Dispatch every action for connected component in props.actions[reducer]
const connect = mapStateToProps => Component =>
  redux.connect(mapStateToProps, mapDispatchToProps)(Component)

export default connect
