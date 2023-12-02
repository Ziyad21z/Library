

const Book = function (title, auther, pages, readingStatus) {
    this.title = title
    this.auther = auther
    this.pages = pages
    this.readingStatus = readingStatus
    let booksCount = 0;
    this.getBookCount = function () {
        return booksCount++;
    }
}
function addBooks(title, auther, pages, readingStatus) {
    return new Book(title, auther, pages, readingStatus)
}
const s1 = addBooks('som1', 'sami', 2221, true)
const s2 = addBooks('som2', 'sami', 2222, true)
const s3 = addBooks('som3', 'sami', 2223, false)
const s4 = addBooks('som3', 'sami', 2224, true)

let myBooks = [s1, s2, s3, s4];
myBooks.forEach((element) => {
    const cards = document.querySelector('.cards')

    const card = document.createElement('div')
    card.className = 'card'

    const title = document.createElement('div')
    title.className = 'card-book-title'
    title.innerText = element.title

    const auther = document.createElement('div')
    auther.innerText = element.auther

    const pages = document.createElement('div')
    pages.className = 'pages'
    pages.innerText = element.pages + ' pages'

    const readingStatus = document.createElement('button')
    readingStatus.className = element.readingStatus == true ? 'reading-status-true' : 'reading-status-false'
    readingStatus.addEventListener('click', () => {
        if (element.readingStatus) {
            element.className = 'reading-status-false'
        } else
            element.className = 'reading-status-true'
    })

    const remove = document.createElement('button')
    remove.className = 'remove-button'
    remove.addEventListener('click', () => {
        
    })


    card.appendChild(title)
    card.appendChild(auther)
    card.appendChild(pages)
    card.appendChild(readingStatus)
    card.appendChild(remove)
    cards.appendChild(card)
})

















/*
const cards = document.querySelector('.cards')

const card = document.createElement('div')
card.className = 'card'

const title = document.createElement('div')
title.className = 'card-book-title'

const auther =  document.createElement('div')

const pages = document.createElement('div')
pages.className = 'pages'

const readingStatus = document.createElement('button')
readingStatus.className = 'reading-status-button'

const remove = document.createElement('button')
remove.className = 'remove-button'

card.appendChild(title)
card.appendChild(auther)
card.appendChild(pages)
card.appendChild(readingStatus)
card.appendChild(remove)
cards.appendChild(card) */



// myBooks.push(new Book(title, auther, pages, readingStatus))

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
