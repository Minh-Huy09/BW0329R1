// let arr = [1, 3333, 11111, 2312, 312, 312, 31, 23];
// let sum = 0
// let brr = arr.filter(e => {
//     sum += e;
//     return e > 1000;
// });

// console.log(sum)
// console.log(brr)



// let arr = [1, 3333, 9999, 2312, 312, 31200, 11111, 23];
// let = arr.reduce((e, tong) => tong + e, 10000)

// let xzy = arr.find(x => x > 10000);
// console.log(xzy)

// let abc = arr.filter(x => x > 10000);
// console.log(abc)


// let arr = [1, 2, 3, 4];
// let brr = arr;
// brr.push(10);

// console.log(brr)
// console.log(arr)



// let arr = [1, 2, 3, 4];
// let brr = arr;
// let crr = [...arr];
// arr.push(10)
// console.log(arr)
// console.log(brr)
// console.log(crr)

// let o1 = {
//     name: 'A',
//     age: 20
// }

// let o2 = o1;
// let o3 = {...o2};
// o2.age = 21;

// console.log(o1)
// console.log(o2)
// console.log(o3)


let o1 = {
    name:'A',
    age:20
}
o1 = {...o1, gender: 'Nam', name:'B'}
console.log(o1);
console.log(o1['name'])

