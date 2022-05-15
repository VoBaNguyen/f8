### Chú ý: 
- Trong hầu hết mọi trường hợp, từ khóa this sẽ trỏ về đối tượng nó thuộc về
- Đứng ngoài phương thức, this tham chiếu tới đối tượng global

const iPhone7 = {
    // Thuộc tính - Property
    name: 'ip7',
    color 'pink',

    // Phương thức - method - Có động từ trong tên
    takePhoto() {
        console.log('Take a photo');
    }
}

console.log(iPhone7.takePhoto());

// Hàm tạo:
function Car(name, color) {
    this.name = name
    this.color = color
    this.run = function() {
        console.log('Running...', this);
    }
}

const mercedesS450 = new Car('Mercedes S450', 'black')

LƯU Ý:
    + this trong hàm tạo là đại diện cho đối tượng sẽ được tạo
    + this trong một hàm sẽ là window, this trong một hàm là undefined khi ở strict mode
    + Arrow function không có context => Không có this => Lấy this ở phạm vi bên ngoài gần nhất
    + Các phương thức bind(), call(), apply() có thể tham chiếu this tới đối tượng khác
    


