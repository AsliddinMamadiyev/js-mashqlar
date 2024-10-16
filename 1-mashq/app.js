
// let numberOfBooks = prompt("Nechta kitob oqidingiz?");
// let booksDB = {
//     count: numberOfBooks,  
//     books: {},             
//     authors: {},           
//     genres: [],            
//     isPublic: true         
// }

//     let bookname = prompt("Oxirgi oqigan kitobingiz?");
//     let bookrating = prompt("Necha ball berasiz? (0-10)");

// console.log(booksDB);

let kirish = prompt("universitet nomi");

console.log(kirish);

let ism = prompt("ismizni yozing");
let familiya = prompt("familiyangizni yozing");

console.log("ism: " + " " + familiya);

let majburiyfan = prompt("majburiyfandan olgan balizni kiriting");
if (majburiyfan >= 10 && majburiyfan <= 30) {
    console.log("majburiyfandan kerakli ballni topladiz")
} else if (majburiyfan <= 10 && majburiyfan >= 30) {
    console.log("majburiyfandan kerakli ballni toplamadingiz");
}
