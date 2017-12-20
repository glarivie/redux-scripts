# redux-scripts

create-react-app with Redux, SCSS modules and paths aliases without ejecting !

## How to use

```bash
yarn add --global create-react-app
create-react-app App --scripts-version redux-scripts
cd App
yarn install
yarn start
```

## Aliases

```js
import App from 'containers/App'
import { Flex } from 'components'
import browserHistory from '@/browserHistory'
```

## SCSS Modules

```js
// Component.js
import styles from './Component.scss'

return (
  <div className={styles.container}>
    ...
  </div>
)
```

```css
/* Component.scss */
.container {
  width: 100%;
}
```
