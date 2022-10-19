function Sinhvien() {
    this.ma = '';
    this.ten = '';
}
const arrNumber = [1,2,3,4];

const setting = {
    DOMAIN :'https://svcy.myclass.vn/api/sinhvienapi'
}

export { Sinhvien , arrNumber , setting }

//export default (mỗi file chỉ có thể default 1 lần)
export default Sinhvien;