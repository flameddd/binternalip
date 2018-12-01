# Browers side get User's Internal IP

## install
```
npm install --save internalip
// or
yarn add internalip
```

## how to use
```javascript
import binternalip from 'binternalip';

// ...

binternalip
  .then(function (internalIP) {
    console.log('interanlIP => ' + internalIP) // interanlIP => 10.xx.xx.xxx
  })

```

## Browsers support check!!!
[canisue RTCPeerConnection](https://caniuse.com/#search=RTCPeerConnection)