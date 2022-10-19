// es5
// function Product() {
//     this.id = '';
//     this.name = '';
//     this.price = '';
//     this.image = '';
//     this.showInfo = function () {
//         console.log('id',this.id);
//         console.log('name',this.name);
//     }
// }
/**
 * LỚp (class) đối tượng có mấy thành phần :thuộc tính (Biến trong đối tượng
 * - properties),phương thức (hàm trong đối tượng - method)
 * 4 tính chất trong hướng đối tượng:
 * +tính cừu tượng (abstraction):Mô tả đối tượng cần lưu trữ (bỏ qua các thông tin ko cần thiết)
 * trên thực tế thành các thuộc tính và phương thức trong class(lớp đối tượng).
 * + Tính đóng gói (Encapsulation): Che dấu thông tin của đối tượng (thông qua đối tượng hoặc
 * class đối tượng mới có thể truy xuất được thuộc tính hoặc phương thức).đối với js thì không hỗ trợ accessmofier: đi kèm với từ khoá chỉ phạm
 * vi public, private,protected.
 * +tính kế thừa(Inheritance): các class có thể kế thừa thuộc tính và phương thức của class khác mà không cần phải khai báo lại.
 * +Tính đa hình (polymorphism):javascript
 */






//es6
export class HeeLoo {
    //thuộc tính
    id = '';
    name = '';
    price = '';
    image = '';
    constructor() {

    }
    //thuần phương thức
    // showInfo(){
    //     console.log('id',this.id);
    //     console.log('name',this.name);
    // }
    //thuộc tính là hàm
    showInfo = function () {
        console.log('id', this.id);
        console.log('name', this.name);
    }
}

//kế thừa 

class NguoiDung {
    taiKhoan = '';
    matkhau = '';
    email = '';
    hoTen = '';
    constructor() {

    }
    Dangnhap() {
        console.log('Dăng nhập');
    }
    dangXuat() {
        console.log('Dăng xuất');
    }
}
class HocVien extends NguoiDung {
    thongTinLopHoc = [];
    constructor(){
        super()
    }
    ghiDanh() {
        console.log('ghi danh');
    }
}
let hv = new HocVien();

const setting ={
    getStore : function () {//thay vì hàm việt 1bên ngoài thì ai cũng gọi được => đưa vào đối tượng để dễ quản lý
        //static ko sử dụng đc this
        return localStorage.getItem(name);
    }
}



//phương thức tĩnh trong js


class Setting{

    static DOMAIN = 'https://svcy.myclass.vn//api'

    static getStore (name){//thay vì hàm việt 1bên ngoài thì ai cũng gọi được => đưa vào đối tượng để dễ quản lý
        //static ko sử dụng đc this
        return localStorage.getItem(name);

    }
}



console.log(Setting.DOMAIN);

// let ob = new Setting();
// ob.DOMAIN