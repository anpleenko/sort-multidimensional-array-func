# sort-multidimensional-array-func

### multidimensional array sorting function

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

## Install

```
npm install --save sort-multidimensional-array-func
```

## Usage

```javascript
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';

const arr = [
  [123, 345, 545],
  [456, 564, 345],
  [12, 3, 4]
]

console.log(sortMultidimensionalArrayFunc(arr, 1, 'asc'))
// [[12, 3, 4], [123, 345, 545], [456, 564, 345]]

console.log(sortMultidimensionalArrayFunc(arr, 1, 'desc'))
// [[456, 564, 345], [123, 345, 545], [12, 3, 4]]

console.log(sortMultidimensionalArrayFunc(arr, 2, 'desc'))
// [[123, 345, 545], [456, 564, 345], [12, 3, 4]]
```

[downloads-image]: https://img.shields.io/npm/dm/sort-multidimensional-array-func.svg
[npm-url]: https://www.npmjs.com/package/sort-multidimensional-array-func
[npm-image]: https://img.shields.io/npm/v/sort-multidimensional-array-func.svg
