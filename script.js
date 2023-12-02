
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
const s1 = addBooks('som1', 'sami', 2221, false)
const s2 = addBooks('som2', 'sami', 2222, true)
const s3 = addBooks('som3', 'sami', 2223, false)
const s4 = addBooks('som3', 'sami', 2224, true)
const s5 = addBooks('som3', 'sami', 2224, true)
const s6 = addBooks('som3', 'sami', 2224, false)
const s7 = addBooks('som3', 'sami', 2224, true)

let myBooks = [s1, s2, s3, s4, s5, s6, s7];
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

    const readingStatusButton = document.createElement('button')
    readingStatusButton.className = element.readingStatus === true ? 'reading-status-true' : 'reading-status-false'
    readingStatusButton.innerText = element.readingStatus === true ? 'finished' : 'not finished'
    readingStatusButton.addEventListener('click', () => {
        if (element.readingStatus) {
            element.readingStatus = false
            readingStatusButton.className ='reading-status-false'
            readingStatusButton.innerText ='not finished'
        } else {
            element.readingStatus = true
            readingStatusButton.className ='reading-status-true'
            readingStatusButton.innerText ='finished'
        }
    })

    const remove = document.createElement('button')
    remove.className = 'remove-button'
    remove.innerText = ' remove'
    remove.addEventListener('click', () => {
        // will do later :)
    })

    card.appendChild(title)
    card.appendChild(auther)
    card.appendChild(pages)
    card.appendChild(readingStatusButton)
    card.appendChild(remove)
    cards.appendChild(card)
})