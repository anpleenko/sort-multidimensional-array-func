/**
 * @param  {array} Source array
 * @param  {number} Sort index
 * @param  {string} Sort method
 */
const sortMultidimensionalArrayFunc = (arr = [], index = 0, orderBy) => {
  if (process.env.NODE_ENV !== 'production') {
    function classof(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1);
    }

    if(classof(arr) !== 'Array') {
      throw new Error('First argument must be a array');
    }

    if(classof(index) !== 'Number') {
      throw new Error('Second argument must be a number');
    }
  }

  function asc(firstArray, secondArray) {
    if (firstArray[index] > secondArray[index]) {
      return 1;
    } else if (firstArray[index] < secondArray[index]) {
      return -1;
    }

    return 0;
  }

  function desc(firstArray, secondArray) {
    if (firstArray[index] < secondArray[index]) {
      return 1;
    } else if (firstArray[index] > secondArray[index]) {
      return -1;
    }

    return 0;
  }

  switch (orderBy) {
    case 'asc': return arr.sort(asc);
    case 'desc': return arr.sort(desc);
    default: return arr;
  }
};

export default sortMultidimensionalArrayFunc;
