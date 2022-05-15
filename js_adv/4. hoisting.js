# Hoisting với "var" và "function declaration": Là đưa phần khai báo lên đầu phạm vi
//====================
console.log(age); //undefined
console.log(fullName);
var age = 16

=> Phần khai báo biến là "var age" là đủ
=> Chỉ đưa phần này lên trên

//====================
console.log(sum(6, 9));
function sum(a, b) {
    return a + b
}

=> Với khai báo hàm thì cả cụm đó là khai báo hàm nên nó sẽ đưa lên trên
=> Vẫn gọi hàm được

//====================
# Hoisting với "let" và "const"
Hiểu nhầm là "let" & "const" không hoist được
=> Chỉ là cách hoist khác với declare function
Ex:
{
    console.log(fullName);
    let fullName = "nguyenvo"
}

Lưu ý:
+ Khi hoist với var - Được khởi tạo giá tị mặc định là "undefined"
+ Khai báo biến với "let", "const" khi được hoisted không được khởi tạo giá trị mặc định
và được đưa vào "Temporal Dead Zone" => Không thể sử dụng biến/hằng này cho đến khi đến được dòng khởi tạo giá trị của nó

//====================
### Vậy hoist để làm gì?
=> Để biết rằng trong phạm vi đã có biến cần dùng chưa
=> Nếu chưa có thì sẽ đi lấy biến ở các phạm vi ngoài

//====================
BONUS:
const counter1 = makeCounter()

console.log(counter1());

function makeCounter() {
    let counter = 0
    return increase
    function increase() {
        return ++counter
    }
}

=> RUN OK