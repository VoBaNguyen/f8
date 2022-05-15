https://www.youtube.com/watch?v=6j9b2_E34JM&list=PL_-VfJajZj0U1MSx1IMu13oLJq2nM97ac&index=10
//BIND - RÀNG BUỘC

this.firstName = "minh";
this.lastName = "thu";

const teacher = {
  firstName: "minh",
  lastName: "thao",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Case 1
console.log(teacher.getFullName()); // "minh thao"

// Case 2
const getTeacherName = teacher.getFullName;
console.log(getTeacherName()); // "minh thu"

// NOTE: Khi gọi hàm không thông qua một đối tượng,
// this sẽ trỏ vào đối tượng global/window
// this chỉ là một từ khóa tham chiếu đến một giá trị
// Tùy vào context, this sẽ tham chiếu về đúng đối tượng

const getTeacherName = teacher.getFullName.bind(teacher);
console.log(getTeacherName()); // "minh thao"

// - Phương thức bind sẽ trả về một hàm mới với this mới
// - Phương thức vẫn nhận được những đối số như hàm ban đầu

// ỨNG DỤNG THỰC TẾ:
- Xài khi gán method cho một function/method khác
const button = document.querySelector("button");
button.onclick = teacher.getFullName.bind(teacher);

- Bind methods:
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
console.log(document.querySelector("button"));
console.log($("button"));
