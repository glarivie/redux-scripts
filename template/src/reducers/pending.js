import { Updater } from 'helpers'

const initialState = {}

const pendingReducer = (state = initialState, { type }) => {
  const { update, from } = new Updater(initialState, initialState)
  const initialType = type.split('_').slice(0, -1).join('_')

  if (type.includes('_PENDING'))
    return update(initialType)(from(true))

  if (type.includes('_SUCCESS') || type.includes('_ERROR'))
    return update(initialType)(from(false))

  if (type === 'PENDING_CLEAR')
    return initialState

  return state
}

export default pendingReducer
