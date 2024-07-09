let arr = [2,5,3,14,21,44]
//1. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.


let newArr = []
arr.map(item => {
    newArr.push(Math.pow(item, 2))
    return newArr;
})
console.log("1. Bình phương các phần tử trong mảng ["+arr+"] là : ["+newArr+"]")


//2. Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.
let arrStr = ['Hello', 'Hi', "C03", "Hello World !!!!"]
let newArrStr = []
arrStr.map(e =>{
    newArrStr.push(e.length)
    return newArrStr
})
console.log("2. Mảng chứa độ dài các chuỗi trong mảng ["+arrStr+"] là: ["+newArrStr+']')


//3. Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.

let objPerson = [
    {id: 1, name:'A',age:18,class:'C03'},
    {id: 2, name:'B',age:19,class:'C03'},
    {id: 3, name:'C',age:20,class:'C05'},
    {id: 4, name:'D',age:22,class:'C04'}
]
let propertyObjPerson = []
objPerson.map(person =>{
    propertyObjPerson.push(person.name)
    return propertyObjPerson
})
console.log(objPerson)
console.log("3. Mảng chứa giá trị của thuộc tính \"name\" trong mảng trên là: ["+propertyObjPerson+"]")


//4. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
let evenOddArr = []
arr.map(evenOdd =>{
    if(evenOdd % 2 == 0){
        evenOdd = "even"
    }else {
        evenOdd = "odd"
    }
    evenOddArr.push(evenOdd)
})
console.log("4. Mảng mới chứa chuỗi \"even\" hoặc \"odd\" tương ứng với mỗi số của mảng ["+arr+"] là: ["+evenOddArr+"]")


//5. Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa
let newToUpperCaseStr = []
arrStr.map(toUpper =>{
    newToUpperCaseStr.push(toUpper.toUpperCase())
})

console.log("5. Mảng chứa các từ in hoa của mảng ["+arrStr+"] là: ["+newToUpperCaseStr+"]")