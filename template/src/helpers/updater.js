import get from 'lodash/get'
import clone from 'lodash/clone'
import setWith from 'lodash/setWith'

class Updater {
  constructor (initialState, state) {
    this.initialState = initialState
    this.state = state
  }

  update = path => value =>
    setWith(clone(this.state), path, value, clone)

  from = (payload, path) =>
    get(payload, path, get(this.initialState, path))
}

export default Updater
