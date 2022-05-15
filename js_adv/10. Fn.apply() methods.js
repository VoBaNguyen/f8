https://www.youtube.com/watch?v=a4FjX4Z-9Rs&list=PL_-VfJajZj0U1MSx1IMu13oLJq2nM97ac&index=12

APPLY METHOD:
- Cho phép gọi một hàm với một this (bind)
- Chuyển đối số cho hàm gốc dưới dạng mảng


const teacher = {
    first: "minh",
    last: "thu"
}

function greet(greeting, message) {
    return `${greeting}, ${this.first} ${this.last}. ${message}`
}

let result = greet.apply(teacher, ['Hi co', 'co day mon gi the a?'])
console.log(result);

// So sánh với call
result = greet.call(teacher,['Hi co', 'co day mon gi the a?')
console.log(result);

// Function borrowing
function Parrot() {
    Animal.apply(this, arguments)
    this.speak = function() {
        console.log('Nha co khach!');
    }
}



SO SÁNH bind/call/apply:
Giống:
    - Đều là phương thức kế thừa từ function prototype
Khác:
    Bind:
        - Trả ra một hàm mới với this tham chiếu tới thisArg
        - Không thực hiện gọi hàm
        - Nếu được bind kèm arg1, arg2, ... thì các arg này sẽ được ưu tiên hơn
    
    Call:
        - Thực hiện bind 'this' với 'thisArg' và thực hiện gọi hàm
        - Nhận các đối số cho hàm gốc từ arg1, arg2, ...
    
    Apply:
        - Thực hiện bind 'this' với 'thisArg' và thực hiện gọi hàm
        - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng