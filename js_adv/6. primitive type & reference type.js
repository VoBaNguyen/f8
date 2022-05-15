### Value types & reference types

### 1. Value types (primitive data types)
    - String
    - Number
    - Boolean
    - BigInt
    - Symbol
    - undefined
    - null
Kiểu dữ liệu nguyên thủy: Khi gán cho nó một giá trị, nó sẽ lưu giá trị đó,
tại một thời điểm nó chỉ chứa một giá trị


### 2. Reference types (Non-primitive data types)
    - Object
    - Array
    - Function
Cả 3 đều thuộc gốc Object


// VALUE TYPE
let a = 1
let b = a 
a = 2
console.log(b);

// REFERENCE TYPE
let a = {
    name: "Mercedes"
}
let b = a
a.name = "BMW"
console.log(b);

//VÙNG NHỚ vs Ô NHỚ
let a = {
    name: 'Mercedes'
}
// => vùng nhớ 1 được tạo
a = {
    name: 'BMW',
    model: 'i8'
}
// => vùng nhớ 2 được tạo ra và gán địa chỉ cho a

// Chương trình kết thúc thì mới giải phóng bộ nhớ

// Object chứa object con
const student = {
    name: 'Oanh Ha',
    profile: {
        firstname: 'Oanh',
        lastname: 'Ha',
        introduction: 'Girl'
    }
}
// => Có mấy vùng nhớ được tạo ra? 
// => Mỗi khi thấy 1 obj/arr/function được tạo => Sẽ có 1 vùng nhớ được tạo ra


### Data types with functions
function sum(a, b) {
    // let a = c
    // let b = d => Chép giá trị của c, d
    // => Chép giá trị sang ô nhớ mới => Modify không bị ảnh hưởng
    console.log(a, b);
}
const c = 1
const d = 2
sum(c, d)
console.log(c, d);

//==========================
function func(obj) {
    // let obj = a
    obj.name = "Mercedes"
    console.log(obj);
}
const a = {
    name: 'BMW'
}
func(a)
console.log(a);

//Side effect
function createCar(obj) {
    // Tạo ra một obj mới ở vùng nhớ mới
    obj = JSON.parse(JSON.stringify(obj));
    // obj = {...obj} - Chỉ kéo key, values của 1 level
    
    obj.name = 'Mercedes'
    return obj
}

const car = {
    name: 'BMW'
}
const newCar = createCar(car)