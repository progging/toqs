# TOQS

> Makes an object into a query string.

## Install
`npm i -S toqs` or `yarn add toqs`

## Usage
```javascript
import toqs from "toqs"

const params = {
    param1: "Wibble!!",
    param2: "Wobble & Wubble",
    param3: "12345"
}

colsole.log(toqs(params)) //?param1=Wibble!!&param2=Wobble%20%26%20Wubble&param3=12345
```
