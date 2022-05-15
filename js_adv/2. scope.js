https://www.youtube.com/watch?v=5N8vz_VmszE&list=PL_-VfJajZj0U1MSx1IMu13oLJq2nM97ac&index=3&t=1s

# Scope - Phạm vi

- Các loại phạm vi:
    + Global - Toàn cục
        var message = "Xin chao!";
    + Code block - Khối mã: let, const
        + Code block là một cặp ngoặc nhọn {} trong JS (if/for/while)
        + let/const: Sẽ không thể gọi từ bên ngoài code block
        + Riêng với var: Nó vẫn sẽ khai báo global
    + Local scope - Hàm: var, function
        + var: Không chui ra ngoài được
        + Body của hàm cũng có thể hiểu là code block - Nên let/const không thể truy cập từ bên ngoài

- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
    + Phạm vi global
    + Gọi 1 hàm nhiều lần - Tạo ra nhiều phạm vi
    + Một phạm vi sẽ được bind các đối số khác nhau - Nó giống với việc khai báo biến trong code block

- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài của nó:
    + Cứ khai báo biến ngoài phạm vi của nó là truy cập được
    + Hình dung các hộp lồng nhau
    + Hộp nhỏ có thể truy cập hộp lớn
    + Hộp lớn không thể truy cập hộp nhỏ

- Cách thức một biến được truy cập:
    + Lấy giá trị của biến ở phạm vi gần nhất.
    + Không phải là khai báo lại - Mà là tạo mới
    + Tìm biến trong các phạm vi - Từ trong ra ngoài
    + Xét trong phạm vi đã có chưa - Nếu khai báo sau khi sử dụng - Báo lỗi

- Khi nào một biến bị xóa khỏi bộ nhớ?
    - b = null => Xóa biến
    - Biến toàn cục?
        + Xóa khỏi bộ nhớ khi chương trình bị tắt
    - Biến trong code block & trong hàm?
        + Khi thoát khỏi phạm vi - Biến sẽ bị xóa khỏi bộ nhớ
    - Biến trong hàm được tham chiếu bởi một hàm?
        + Hàm đó chạy xong mà biến vẫn được tham chiếu ở một nơi khác thì biến đó vẫn không bị xóa

Ex1:
function makeCounter() {
    let counter = 0
}
const increase = makeCounter()
=> Trong trường hợp này - Sau khi gọi makeCounter, không chỗ nào có thể truy cập biến counter được nữa 
=> Xóa biến counter

Ex2:
function makeCounter() {
    let counter = 0
    function increase() {
        return ++counter
    }

    return increase
}
const increase1 = makeCounter()
console.log(increase1());
console.log(increase1());
console.log(increase1());
=> Trong trường hợp này - Hàm increase vẫn có thể truy cập biến counter
=> Xóa biến counter