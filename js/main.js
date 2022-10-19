//-----------------import & export---------//

import { Sinhvien, setting as settingConfig } from "./../models/Sinhvien.js";
import SinhvienProto from './../models/Sinhvien.js'
let sv = new Sinhvien();

console.log("sv", sv);

console.log(settingConfig);
let sinhVien123 = new SinhvienProto();

//hoisting
/**
 * khác biệt : var ,let,const
 * var : hộ trợ cơ chế hoisting 
 * let : khi kháo biến bằng let trong cùng 1 scope sẽ báo lỗi.khi khai báo let ở 2 scope khác
 * nhau es6 tự động phân biệt 2 biến.
 * const: tương tự let, không thể ghi đè dược giá trị .Đối với object sẽ ko gán = object khác được tuy nhiên vẫn có thể thay đổi dược thuộc tính
 * ,phương thức (nếu object là array thì có thể thay đổi dược giá trị phần tử)
 * => trong es6 sử dụng let cho tất cả trưởng hợp
 */
let title = 'hello'
{
    let title = 'hi';
    console.log(title);
}
console.log(title);
const DOMAIN_API = 'https';

{
    const DOMAIN_API = 'https';
}

//primitive value: number,string,boolean,undefined,null
//reference value :giá trị tham chiếu


const config = {
    domain: '',
    role: 'Admin'
}
config.domain = 'abc.com';

// var title;
// title = 'hello';
// title = 'hi';
// console.log(title);

//------------------function---------------//
//declaration function: hộ trợ hoisting
function showMess() {
    console.log('hello');
}

//expression
var sayHello = function () {
    console.log("hhellooo");

}
sayHello();

//----------------- arrow function----------------------//
/**
 * arrow funtion : tương tự expression function (không hộ trợ hoisting).khi hàm  có 1 tham số thì không cần dấu().nếu hàm chỉ có duy nhất 
 * 1 lệnh return thì không cần viết chữ return và dấu {}
 * 
 * 
 * arrow funtion không hộ trợ this(context)
 * ngữ cảnh mặc định là window
 * +this trong object là object đó
 * +this trong function là function đó (prototype)
 * 
 * =>sử dụng arrow function cho việc khai báo hàm(vì từ khoá function đang sử dụng cho nhiều ngữ cảnh khác nhau :prototype,phương thức ...)
 */
window.tenSinhVien = 'QUách hải';

let SinhVien = {
    maSinhVien: 1,
    tenSinhVien: 'nguen van teo',
    hienThiThongTin: function () {
        let hienThi = () => {
            console.log('ma sinh vien', this.maSinhVien);
            console.log('ten sinh Vien', this.tenSinhVien);
        }
        hienThi();
    }
}
SinhVien.hienThiThongTin();





function Product() {
    this.id = '';
    this.name = '';
    this.price = '';
    this.showInfo = function () {
        console.log('id', this.id);
        console.log('name', this.name);
        console.log('price', this.price);
    }
}
let prod1 = new Product();
prod1.id = 1;
prod1.showInfo();

let prod2 = new Product();
prod2.id = 2;
prod2.showInfo();



let deApi = function (id) {
    return 'https' + id;
}

//arrow
let deleteApi = id => 'https' + id;

let arrNumber = [1, 2, 3, 4];

// arrNumber.find(funtion(item){
//     if(item === 3){
//         return true;
//     }
//     return false;
// // }) 

const value = arrNumber.find(item => item === 3);




function main(callback) {
    callback('cybersoft');
}
function renderH1(title) {
    return `<h1>${title}</h1>`
}
function renderSection(title) {
    return `<section>${title}</section>`
}
main(function (param) {
    return `<h3>${param}</h3>`
})

//----demo : let var const , arrow function

// var arrButton = document.querySelectorAll('button');

// //arrButton [0].onclick = function (){}
// for (let index = 0; index < arrButton.length; index++) {
//     let btn = arrButton[index];
//     btn.onclick = function () {
//         alert(index);
//     }
// }
// {
//     let index = 0;
//     let btn = arrButton [index];
//     btn.onclick = function (){
//         alert(index);
//     }
// }
// {
//     let index = 1;
//     let btn = arrButton [index];
//     btn.onclick = function (){
//         alert(index);
//     }
// }
// {
//     let index = 2;
//     let btn = arrButton [index];
//     btn.onclick = function (){
//         alert(index);
//     }
// }


// bài tập thay đổi màu sắc
/**
 * cho mảng màu sắc như bên dưới:
 * yêu cầu:
 * + viết hàm render ra các nút button với màu tương ứng trên
 * div#colors
*   +XỬ LÝ khi người dùng click vào nút button nào thì div#home thay đổi colors tương ứng
*/

//cách 1
// let arrColor = ['red','yellow','blue'];
// var arrBtn =document.querySelectorAll('button');
// for (let index = 0; index < arrBtn.length; index++) {
//     let btn = arrBtn[index] ;
//     btn.onclick = function () {
//         document.getElementById('home').style.color =`${arrColor[index]}` ;
//           }
// } 

//cách 2
// let arrColor = ['red','yellow','blue'];
// let renderButton = ()=>{
//     for (let index = 0; index < index.length; index++) {
//        var color = arrColor[index];
//        var btn = document.createElement('button');
//        btn.innerHTML = color ;
//        btn.className = `btn text-light mx-2`;
//        btn.style.backgroundColor = color;
//        btn.onclick = () =>{
//         document.getElementById('home').style.color = color;

//        }
//        document.getElementById('colors').appendChild(btn);


//     }
// } 
// renderButton ();
//cách 3 : sử dụng stringTemplate
let arrColor = ['red', 'yellow', 'blue'];
let renderButtonString = () => {
    let content = '';
    for (let index = 0; index < arrColor.length; index++) {
        let color = arrColor[index];
        content += `
       <button class="btn text-light mx-2"
       style="background-color:${color};" onclick = "changeColor
       ('${color}')">${color}>
       </button>
       
       `;

    }
    document.getElementById('colors').innerHTML = content;
}

window.changeColor = (color) => {
    document.getElementById('home').style.color = color;
}

renderButtonString();

/**
 * -------------------default param: tham số mặc định của hàm
 */
let getUserInfo = (name = "mị", age = 18) => {
    if (age > 0 && age < 30) {
        console.log(`${name} còn trẻ ${name} muốn đi chơi !`);
    } else {
        console.log('quá lứa rồi !');
    }
}
getUserInfo();
getUserInfo('quách hải');
getUserInfo('quách hải', 40);

//--------------- restparam 
//overload function
function tinhTong(...param) {// [1,2] | [1,2,3] | [1,2,4,6]
    switch (param.length) {
        case 2: {
            console.log(param[0] + param[1]);
        }; break;
        case 3: {
            console.log(param[0] + param[1] + param[2]);
        }
        default: {
            console.log('tham số ko hợp lệ');
        }
            break;
    }

}
tinhTong(1, 2);
tinhTong(1, 2, 3);
tinhTong(1, 2, 4, 6);
//---------------sread operator
/**
 * spread operator giúp ta sao chép giá trị bên trong của object hoặc array mà không ảnh hưởng đến object array cũ
 * */
let SinhVien1 = {
    ma: 1,
    ten: 'nguyễn văn a'
}
let sinhVien2 = {
    ...SinhVien1,
    soDienThoai: '0909090909',
    ten: 'danh',
};

sinhVien2.ma = 2;

console.log('sinhVien1', SinhVien1);
console.log('sinhVien1', sinhVien2);

let arr1 = [1, 4, 3, 2, 6, 5];
let arr2 = [...arr1, 1, 2, 3, 4, 5];
arr2.push(3);

console.log('arr1', arr2);
console.log('arr2', arr2);


//------------------Destructuring
let product1 = {
    id: 1,
    name: 'danh',
    price: 1000,
    img: 'http/...',
    showInfo: function () {
        console.log(this.id, this.name, this.price, this.img);
    }

}
let { id, name, showInfo, ...restProp } = product1;

showInfo.bind(product1)();

// function main() {
//     //xử lý

//     //number , string , bolean ,null , undefine , object , array
//     return function (title) {
//         console.log('hello', title);
//     };
// }
// let result = main();
// result('cybersoft');

//main()()

//IIPE FUNCTION

(() => {
    console.log('show mess');
})('hello');

//array: mảng chứa các phần tử có cùng kiểu dữ liệu.ví dụ mảng số , mảng chuỗi, mảng object

//tuple:Mảng nhưng các giá trị ko cùng kiểu dữ liệu


let [maSoSinhVien, tenSinhVien, hienThi] = [1, 'Nguyễn văn a', function () {
    console.log('mã', 1);
    console.log('Tên', 'Nguyễn văn a');
}];
hienThi();


//Object Literal

let obName = 'hello';
let myObject = {
    obName,
}
console.log('myObject', myObject);


//-------------------------for of && for in
/**
 *  for of: Thường dùng để duyệt mảng object
 *  for in :Thường dùng để duyệt key(thuộc tính) object
 */
let arrProduct = [
    { id: 1, name: 'Product1', price: 1000 },
    { id: 2, name: 'Product1', price: 2000 },
    { id: 3, name: 'Product1', price: 3000 },
    { id: 4, name: 'Product1', price: 4000 },
]

for (let prod of arrProduct) {
    console.log(prod);
}

for (let index in arrProduct) {
    console.log('index', index);
}


let ob = { id: 1, name: 'Product1', price: 1000 };

//ob['id']

for (let thuocTinh in ob) {
    console.log('ten thuoc tinh', thuocTinh);
    console.log(ob[thuocTinh]);
}
// bài tập quản lý form nv

document.querySelector('#btnHienThi').onclick = function (event) {
    //chặn sự kiện reloadc browser
    event.preventDefault();
    //lấy tt người dùng giao diện
    let arrInPut = document.querySelectorAll(' #frmNhanvien input,#frmNhanvien select');
    //dùng for of duyệt qua các thẻ
    let nhanVien = {};

    for (let input of arrInPut) {
        let { id, value } = input;
        nhanVien[id] = value;
        // let id = input.id;
        // let value = input.value;
        // console.log(id,value);
    }
    let content = ``;
    for (let key in nhanVien) {
        content += `
            <tr>
            <th>${key}</th>
            <th>${nhanVien[key]}</th>
            </tr>
        `
    }
    document.querySelector('thead').innerHTML = content;
}
//--------------------- Dynamic key ----------//
let tenthuocTinh = 'tên sản phẩm';
let prodPhone = {
    id: 1,
    [tenthuocTinh]: 'iphone14',
}
prodPhone['tên sản phẩm']

console.log(prodPhone[tenthuocTinh]);


//------------arr method -----------//
let arrPhone = [
    { id: 1, name: 'Iphone', price: 1000, type: 'APPLE' },
    { id: 2, name: 'Iphone14', price: 1250, type: 'APPLE' },
    { id: 3, name: 'galaxy note 20', price: 1000, type: 'SAMSUNG' },
    { id: 4, name: 'Galaxy fold', price: 1000, type: 'SAMSUNG' },
    { id: 5, name: 'Sony xz1', price: 1000, type: 'SONY' },
    { id: 6, name: 'Sony SZ2', price: 1000, type: 'SONY' },
    { id: 7, name: 'xiaomi mi note 10', price: 1000, type: 'XIAOMI' },
    { id: 8, name: 'Xiaomi MI note 11', price: 1000, type: 'XIAOMI' },
]

function layDienThoaiSony(phones) {//input : [{},{},{}]
    let output = [];
    for (let index = 0; index < phone.length; index++) {
        //mỗi lần duyệt lấy ra 1 object phone
        let phone = phone[index];
        if (phone.type == 'SONY') {
            output.push(phone);
        }
    }
    return output;
}
//filter:là hàm trả về giá trị là 1 mảng thoả arrow function.Nếu không có phần tử nào thoả arrow function thì trả về mảng rỗng [];

let phoneSony = arrPhone.filter((obPhone) => obPhone.type === 'SONY');
console.log('phoneSony', phoneSony);

//find: tương tự filter tuy nhiên khi lọc trả về 1 object đầu tiên thoả điều kiện, nếu ko có object nào thoả điều kiện thì trả về underfined. Thông thương find sẽ dùng để tìm kiếm object trong mảng trên khoá chỉnh(thuộc tính định danh)
let phoneEdit = arrPhone.find(phone => phone.id === 8);
if (phoneEdit) {//tìm thấy 
    phoneEdit.price = 1350;
}
console.log('arrPhone', arrPhone);

//findIndex: tìm ra vị trí phần tử thoả arrow function .nếu không tìm thấy thì trả -1;

let index = arrPhone.findIndex(phone => phone.id === 6);
if (index !== -1) {
    arrPhone.splice(index, 1);//tìm thấy index để xoá
}
console.log('index', index);

//foreach: thực hiện hành động trên từng phần tử của mảng (tương tự for, for in ,for of);

arrPhone.forEach(phone => {
    console.log(phone);
});

//map: tương tự foreach tuy nhiên hàm này duyệt qua các phần tử để biến đổi các phần tử khác 

let orrOption = arrPhone.map((item, index) => {
    return { ...item, price: item.price + 100 }
})
console.log('arrOption', orrOption);

let arrString = arrPhone.map((item, index) => {
    return `<span>${item.name}</span>`
})
console.log('arrString', arrString);


let arrDOMSpan = arrPhone.map((item, index) => {
    let spanEle = document.createElement('span');
    spanEle.innerHTML = item.name;
    spanEle.className = 'alert alert-danger mt-2';
    return spanEle;
})

document.getElementById('arrResult').append(...arrDOMSpan);

/**
*  reduce: tương tự map tuy nhiên kết quả trả về là 1 giá trị mới ([],{},string,boolean,number,...)

 * 
 * 
 */
// let htmlString = arrPhone.reduce((tt,phone,index)=>{
//     return phone.price + tt;//1000 2250 3700

// },0)
// console.log('totalPrice',totalPrice);

// let htmlString = arrPhone.reduce((html1,item)=>{

// })

//sort: sắp xếp theo tên sản phẩm (sắp theo chuỗi)
let arrResult = arrPhone.sort((sp2,sp1) => {
let tenSP2 = sp2.name.toLowerCase().trim();
let tenSp1 = sp1.name.toLowerCase().trim();
if (tenSP2 < tenSp1){
    return -1;//hoán vị
}
return 1;
});
console.log('arrResult',arrResult);

let arrResultByPrice = arrPhone.sort((sp2,sp1)=>{
    return sp2.price - sp1.price;
});
console.log('arrResultByPrice',arrResultByPrice);

let phoneByPrice = _.sortBy(arrPhone,['price']);
console.log('phoneByPrice',phoneByPrice);






//bài tập render các phone => table tr td => lên giao diện
let arrTh = document.querySelectorAll('#tableProduct th');
for (let th of arrTh){
    th.onclick = function () {
        // console.log(th.innerHTML);
        let name = th.getAttribute('data-name');
        let order = th.getAttribute('data-order');
        arrPhone = _.orderBy(arrPhone,[name],[order]);
        //gán lại meta data attribute
        th.setAttribute('data-order',order === 'asc'? 'desc': 'asc');
        renderTableProduct();
    }
}
function renderTableProduct() {
    let htmlContent = arrPhone.reduce((html,prod)=>{
        html +=`
        <tr>
        <td>${prod.id}</td>
        <td>${prod.name}</td>
        <td>${prod.price}</td>
        <td>${prod.type}</td>
        </tr>
        `;
        return html;
    },'');
    document.querySelector('#tblProduct').innerHTML = htmlContent;
}
renderTableProduct();


import { HeeLoo } from "./product.js";

let prod = new HeeLoo();
prod.id = 1;
prod.name = 'product 1';
prod.showInfo();