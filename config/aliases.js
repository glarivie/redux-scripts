const paths = require('./paths');

module.exports = {
  // Alias for import
  styles: paths.stylesSrc,
  components: paths.componentsSrc,
  constants: paths.constantsSrc,
  containers: paths.containersSrc,
  actions: paths.actionsSrc,
  reducers: paths.reducersSrc,
  helpers: paths.helpersSrc,
  middlewares: paths.middlewaresSrc,
  assets: paths.assetsSrc,
  // Alias for src folder
  '@': paths.appSrc,
}
