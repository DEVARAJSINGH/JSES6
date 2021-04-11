function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
    const rangeIterator = {
        next() {
            let result;
            if(nextIndex < end) {
                result = {
                    value: nextIndex,
                    done: false
                }
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return {
                value: iterationCount,
                done: true
            }
        }
    }

    return rangeIterator;
}

const range = makeRangeIterator(0,12,1);
console.log(range.next().value);
console.log(range.next().value);

var arr = [1, 2, 3, 4, 5, 6, 7];
var ite = arr[Symbol.iterator]();
console.log(ite.next().value);
console.log(ite.next().value);


const someString = new String('hi');

someString[Symbol.iterator] = function () {
  return {
    next: function () {
      return this._first ? {
        value: 'bye',
        done: (this._first = false)
      } : {
        done: true
      }
    },
    _first: true
  };
};
console.log([...someString]);
console.log(someString+" " );
