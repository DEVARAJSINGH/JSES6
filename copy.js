//shallow Copy

var name = 12;
let k = name;
console.log(`name:  ${name} and k : ${k}`);
k = 14;
console.log(`after Update name: ${name} and k: ${k}
rahul `);


var obj = {  // 2000
    name: 'dev',
    age: 25,
    address: { // 4000
        city: 'Lalitpur',
        pinCode: 284403
    }
}

var copyObj = obj;
var ar = [1,[2,3,4],2,3,4,5];   //1000
var br = [...ar];  // 1000
var spreadCopy = {...obj};  // 6000
br[1][2] = 3;
// // copyObj.name = 'Rahul';
// spreadCopy.name = 'Rahul';
// // copyObj.address.pinCode = 281109;
// spreadCopy.address.pinCode = 281109;
// // console.log(`CopyObj Value na/me: ${copyObj.name}, address: ${copyObj.address.city} ${copyObj.address.pinCode}`);
// console.log(`bj Value name: ${obj.name}, address: ${obj.address.city} ${obj.address.pinCode}`);
// console.log(`spreadobj Value name: ${spreadCopy.name}, address: ${spreadCopy.address.city} ${spreadCopy.address.pinCode}`);
console.log(ar);

