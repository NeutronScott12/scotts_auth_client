# scotts_auth_client

> Authentication for frontends

[![NPM](https://img.shields.io/npm/v/scotts_auth_client.svg)](https://www.npmjs.com/package/scotts_auth_client) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save scotts_auth_client
```

## Usage

```tsx
import * as React from 'react'

import {ScottsAuthenticationRenderProp, AuthHook} from 'scotts_auth_client'

function example() {
    const {register, login ... } = AuthHook("http://exampe.com/graphql")
}

class Example extends React.Component {
  render () {
    return (
      <ScottsAuthenticationRenderProp serverUrl="http://example.com/graphql">
        {({register, login}) => (
            whatever
        )}
      </ScottsAuthenticationRenderProp>
    )
  }
}
```

## License

MIT © [OGNeutron](https://github.com/OGNeutron)
