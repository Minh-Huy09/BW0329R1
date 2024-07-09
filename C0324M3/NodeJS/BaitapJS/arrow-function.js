let arr = [2,5,3,15,21,45]
//1. Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
let sumArr = 0
let sumArray = arr =>{
    for (let i = 0; i < arr.length; i++){
        sumArr += arr[i]
    }
    return sumArr
}
console.log("1. Tổng các phần tử trong mảng: ["+arr+"] là: "+sumArray(arr))

//2. Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
let newArr = []
let squareArray = squareArr =>{
    for (let i = 0; i < squareArr.length; i++){
        newArr.push(Math.pow(squareArr[i], 2))
    }
    return newArr;
}
console.log("2. Bình Phương các phần tử trong mảng: ["+arr+"] là: ["+squareArray(arr).join(", ")+"]")

//3. Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
let newFilterArr  = []
let n = 10;
let filterGreaterThan = filterArr => {
    for (let i = 0; i < filterArr.length; i++){
        if(filterArr[i] > n){
            newFilterArr.push(filterArr[i])
        }
    }
    return newFilterArr;
}
console.log("3. Mảng chứa các phần tử lớn hơn số nguyên "+n+" mới được đưa vào là: ["+filterGreaterThan(arr).join(", ")+"]")

//4. Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
let max = arr[0]
let maxInArray = maxArr =>{
    for (let i = 0; i < maxArr.length; i++){
        if(max < maxArr[i]){
            max = maxArr[i]
        }
    }
    return max;
}
console.log("4. Giá trị lớn nhất trong mảng: ["+arr+"] là: "+maxInArray(arr))

//5. Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.


let avgArray = avg =>{
    for (let i = 0; i < avg.length; i++){
        let avgArr = sumArr/avg.length;
        return avgArr
    }
    
}
console.log("5. Trung bình cộng các giá trị trong mảng "+"["+arr+"] là: "+avgArray(arr))