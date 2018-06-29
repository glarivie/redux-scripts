import { shape, number, bool, string, objectOf, func } from 'prop-types'

const dimensions = shape({
  width: number.isRequired,
  height: number.isRequired,
})

const is = shape({
  desktop: bool.isRequired,
  tablet: bool.isRequired,
  mobile: bool.isRequired,
})

const location = shape({
  pathname: string.isRequired,
  search: string.isRequired,
  hash: string.isRequired,
})

const actions = shape({
  app: objectOf(func).isRequired,
  router: objectOf(func).isRequired,
})

const locale = string.isRequired

export {
  dimensions,
  is,
  location,
  actions,
  locale,
}
