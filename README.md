# redux-scripts

`create-react-app` with HMR, Redux, SCSS modules and paths aliases without ejecting ! The project also come with `react-router-v4`, `eslint` and a standard default template.

## How to use

```bash
yarn add --global create-react-app
create-react-app Demo --scripts-version redux-scripts
cd Demo
yarn start
```

## Hot Modules Reload (HMR)

More informations: [here](http://gaearon.github.io/react-hot-loader/) !

## Aliases

No need to provide primary folder full path, you can use aliases !

```js
import App from 'containers/App'
import { Flex } from 'components'
import browserHistory from '@/browserHistory'
```

| alias              | path                 |
|--------------------|----------------------|
| @                  | ./src                |
| components         | ./src/components     |
| containers         | ./src/containers     |
| actions            | ./src/actions        |
| ...                | ./src/...            |

**Works only with templates default folders**

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

Generate scoped CSS by adding unique hash after the className. For example  the class `container` become something like `container_6YtR12e`. This avoid conflicts between components and encourage more readable code.
