//cau 1
function processArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length > 20) {
    console.error("Mảng đầu vào không hợp lệ!");
    return;
  }

  let sumEven = 0;
  let sumOdd = 0;

  for (const num of numbers) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }

  const difference = sumEven - sumOdd;

  console.log("Danh sách phần tử:", numbers);
  console.log("Hiệu:", difference);
}

const inputArray = [1, 2, 3, 4, 5, 6];
processArray(inputArray);
//cau 2
function countUpperCaseLetters(str) {
  
  if (typeof str !== "string") {
    console.error("Invalid input: The input must be a string.");
    return;
  }

  
  let uppercaseCount = 0;

  
  for (const char of str) {
    if (char === char.toUpperCase()) {
      uppercaseCount++;
    }
  }


  if (uppercaseCount > 0) {
    return `Số lượng ký tự in hoa: ${uppercaseCount}`;
  }

  
  return "Chuỗi không chứa ký tự in hoa.";
}


const str1 = "abcdEF";
const str2 = "accdef";

const count1 = countUpperCaseLetters(str1);
const count2 = countUpperCaseLetters(str2);

console.log(str1, ":", count1);
console.log(str2, ":", count2); 

//cau 3
function findPrimeNumbers(numbers) {
  
  if (!Array.isArray(numbers)) {
    console.error("Invalid input: The input must be an array.");
    return;
  }

  
  const primeNumbers = [];

  
  for (const num of numbers) {
    
    if (isPrime(num)) {
      primeNumbers.push(num);
    }
  }


  primeNumbers.sort((a, b) => a - b);


  return primeNumbers;
}


function isPrime(num) {
  
  if (num <= 1) {
    return false;
  }

  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  
  return true;
}


const inputArray1 = [1, 5, 6, 23, 8, 47, 10, 3];
const primeNumbers = findPrimeNumbers(inputArray1);
console.log("Sorted prime numbers:", primeNumbers); 

//câu 4
class Phone {
  constructor(id, name, brand, price) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.price = price;
  }


  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getBrand() {
    return this.brand;
  }

  getPrice() {
    return this.price;
  }

  setId(id) {
    this.id = id;
  }

  setName(name) {
    this.name = name;
  }

  setBrand(brand) {
    this.brand = brand;
  }

  setPrice(price) {
    this.price = price;
  }


  toString() {
    return `Mã điện thoại: ${this.id}, Tên: ${this.name}, Hãng sản xuất: ${this.brand}, Giá: ${this.price}`;
  }
}
const phones = []; 


function addNewPhone() {
  const id = prompt("Nhập mã điện thoại: ");
  const name = prompt("Nhập tên điện thoại: ");
  const brand = prompt("Nhập hãng sản xuất: ");
  const price = parseFloat(prompt("Nhập giá: "));

  const newPhone = new Phone(id, name, brand, price);
  phones.push(newPhone);
  console.log("Thêm điện thoại thành công!");
}


function displayPhones() {
  if (phones.length === 0) {
    console.log("Danh sách điện thoại trống!");
    return;
  }


  phones.sort((a, b) => a.getName().localeCompare(b.getName()));

  console.log("\nDanh sách điện thoại:");
  for (const phone of phones) {
    console.log(phone.toString());
  }
}


while (true) {
  console.log("\nChương trình quản lý điện thoại:");
  console.log("1. Thêm mới điện thoại");
  console.log("2. Hiển thị danh sách điện thoại");
  console.log("3. Thoát");

  const choice = parseInt(prompt("Nhập lựa chọn của bạn: "));

  switch (choice) {
    case 1:
      addNewPhone();
      break;
    case 2:
      displayPhones();
      break;
    case 3:
      console.log("Thoát chương trình!");
      break;
    default:
      console.log("Lựa chọn không hợp lệ!");
  }

  if (choice === 3) {
    break;
  }
}
