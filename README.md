# 🧮 `modular-arithmetic.js`

This is a JavaScript implementation of a couple of modular arithmetic algorithms we learnt in CS70.

Add the package using `yarn add modular-arithmetic.js` or `npm install modular-arithmetic.js`. Alternatively, you can also import it directly from Skypack through URL imports:

```js
import { Stack, Collection, Queue } from 'https://cdn.skypack.dev/modular-arithmetic.js';
```
The package exports the following functions:

`mod(n, d)`: return _n_ in _mod(d)_.

`extendedEuclideanAlgorithm(x, y)`: perform the extended Euclidean algorithm on _x_ and _y_.

`inverseMod(x, y)`: return the multiplicative inverse of _x_ in _mod(y)_.

`gcd(x, y)`: returns the greatest common divisor of _x_ and _y_.
