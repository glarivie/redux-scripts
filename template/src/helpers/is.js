const { NODE_ENV } = process.env

const is = {
  development: Object.is(NODE_ENV, 'development'),
  production: Object.is(NODE_ENV, 'production'),
  test: Object.is(NODE_ENV, 'test'),
}

export default is
