https://www.youtube.com/watch?v=xtQtGKL0NCI&list=PL_-VfJajZj0U1MSx1IMu13oLJq2nM97ac&index=4

### Closure
Định nghĩa: 
    + Là một hàm 
    + có thể ghi nhớ nơi nó được tạo 
    + và truy cập được biến ở bên ngoài phạm vi của nó
Nhưng:
    + Bản chất hàm nào tạo ra cũng đã ghi nhớ nơi (in process) nó được tạo
    + Hàm nào tạo ra cũng truy cập được các biến bên ngoài
    => Mỗi function đã là một cái closure tự nhiên rồi (Theo định nghĩa closure)

Ex:
function createCounter() {
    let counter = 0
    function increase() {
        return ++counter
    }

    return increase
}
const counter1 = createCounter()
console.log(counter1());
console.log(counter1());
console.log(counter1());

### Giải thích:
    + createCounter() => Một môi trường riêng biệt của createCounter được tạo ra
        + Tạo ra 1 biến counter & biến increase (private)
        + return increase
        + Gán counter1 = increase (public hàm increase)
        + Khi gọi increase => Nó nhớ là "tôi được tạo ra trong phạm vi của createCounter"

    + Tại sao gọi nhiều lần thì lại tăng lên?
        + Gọi hàm createCounter 1 lần => Chỉ có một phạm vi được tạo ra
        + Gọi lần đầu, hàm increase nhảy ra ngoài lấy giá trị counter, tăng 1 và return
        + Gọi lần 2, lại nhảy ra ngoài để lấy biến counter, nhưng vì chỉ có 1 phạm vi, nên counter hiện tại là 1 => tăng 1 là 2
    + Hàm increase không var/let counter ở bên trong mà tham chiếu đến counter ở bên ngoài
        => Khi gọi counter1 => Nó sẽ luôn trả lại giá trị mới nhất được tham chiêus
        => Không phải gán/copy mà là tham chiếu


### Ứng dụng:
    - Viết code ngắn gọn hơn
    - Biểu diễn, ứng dụng tính Private trong OOP

// ======================================
function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`);
    }

    return logger
}
//=================== App ===============
const infoLogger = createLogger('[Info]')
infoLogger('Bắt đầu gửi mail')
infoLogger('Gửi mail thành công cho user xxx')

//============= Local Storage ==========
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? {}
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            save()
        },
        renmove(key) {
            delete story[key]
            save()
        }
    }

    return storage
}

const profileSetting = createStorage('profile_setting')
profileSetting.get('fullName')
profileSetting.set('fullName', 'nguyenvo')
profileSetting.remove('fullName')

*** store và save được tạo ra trong phạm vi của createStorage (Tính private)
    => Các biến bất khả xâm phạm từ bên ngoài
    => User chỉ có 3 methods: get/set/remove (Không open các biến còn lại)
    => Tạo ra tính an toàn cho dữ liệu

### Lưu ý:
- Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong
- Các khái niệm Javascript nâng cao rất dễ gây nhầm lẫn:
    + IIFE vs anonymous function
    + closure & callback
- Biến global keep các biến bị tham chiếu không bị xóa khi hàm closure chạy xong
