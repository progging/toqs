# TOQS

> Transforms an object to a query string. Object-like values as serialized as JSON.

## Install

`npm i -S toqs` or `yarn add toqs`

## Usage

```typescript
import toqs from 'toqs'

const params = {
  param1: 'Wibble!!',
  param2: 'Wobble & Wubble',
  param3: 12345,
}

colsole.log(toqs(params)) //?param1=Wibble!!&param2=Wobble%20%26%20Wubble&param3=12345
```

## Test

`npm i && npm t` or `yarn i && yarn t`
