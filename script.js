let myBooks = [];

let Book = function (title, readingStatus) {
    this.title = title
    this.readingStatus = readingStatus
    let booksCount = 0;
    this.getBookCount = function () {
        return booksCount++;
    }
}

function addBooks(title, readingStatus) {
Book.prototype.title = title
Book.prototype.readingStatus = readingStatus

}




























// function Book(title, auther, page, read) {
//     this.title = title
//     this.auther = auther
//     this.page = page
//     this.read = read
//     this.printInfo = function () {
//         return `the book ${this.title} by ${this.auther} has ${this.page} pages\nreading status: ${this.read}`
//     };
// }
// function Person(name, salary) {
//     this.name = name
//     this.salary = salary
// }
// Person.prototype.info = function () {
//     return(`${this.name} has ${this.salary}`);
// }

// function sami(name, salary, status) {
//     Person.call(this, name, salary)
//     this.status = status
// }
// sami.prototype.ismaried = function(s){
//     return s;
// }

// Object.setPrototypeOf(sami.prototype, Person.prototype)

// const smsm = new sami('sami', 99999999, false)
// console.log(smsm.info());
