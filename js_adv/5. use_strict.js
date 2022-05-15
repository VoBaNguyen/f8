fullName = "nguyenvo";
function testFunc() {
  age = 18;
}
testFunc();

console.log(fullName);
console.log(age);

//============================
Nếu không xài strict mode thì đoạn code trên vẫn run bình thường
Vấn đề tiềm ẩn:
    - Rò rỉ bộ nhớ
    - Lỗi logic nếu nó trùng với giá trị bên ngoài phạm vi - làm sai giá trị đó

//============================
Cách sử dụng strict mode:
+ thêm "use strict" vào đầu file
+ "use strict" phải đứng đầu phạm vi
+ <script>"use strict"</script>
+ Có thể chỉ sử dụng "use strict" trong phạm vi của hàm

Ứng dụng:
    + Báo lỗi khi gán giá trị cho thuộc tính có writable = false
    Cách 1:
    const student = Object.freeze({
        fullName: 'Nguyen Văn A'
    })

    Cách 2:
    Object.defineProperty(student, 'fullName', {
        value: 'Nguyen Van A',
        writable: false
    })

    + Không có strict mode thì cũng không cho sửa, nhưng không báo lỗi gì cả.
    + Báo lỗi khi hàm có tham số trùng tên
    + Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
    + Không đặt tên biến, tên hàm bằng một số từ khóa "nhạy cảm" của ngôn ngữ:
        const private = "test"
        const protected = "haha"