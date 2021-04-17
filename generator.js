// Generator function
console.log("Generator functon");

function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

const rangeIte = makeRangeIterator(2, 5, 2);
console.log(rangeIte.next().value);
console.log(rangeIte.next().value);
console.log(rangeIte.next().done);


const myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        console.log("1G");
        yield 2;
        console.log("2G");        
        yield 3;
        console.log("3G");
        
    }
}

for (let value of myIterable) {
    console.log(value);
}