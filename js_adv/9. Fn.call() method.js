### Call method call == bind + call
- Là phương thức trong prototype của Function constructor.
- Phương thức này được dùng để gọi hàm và cũng có thể bind this cho hàm

Ví dụ:
    - Gọi hàm với call method
    - Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind
    - Thể hiện tính kế thừa (extends) trong OOP
    - Mượn hàm, thêm ví dụ với arguments

//=======================================
function random() {
    console.log(Math.random());
}

random()
random.call()

const teacher = {
    first: "minh",
    last: "thu"
}

const me = {
    first: "nguyen",
    last: "vo",
    showFullName() {
        console.log(`${this.first} ${this.last}`);
    }
}

me.showFullName() //this == me
me.showFullName.call() // this == window
me.showFullName.call(me)
me.showFullName.call(teacher) // Function borrowing

//=======================================
function Animal(name, weight) {
    this.name = name
    this.weight = weight
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight)
    this.legs = legs
}

const me = new Chicken('nguyenvo', 55, 2)
console.log(me);