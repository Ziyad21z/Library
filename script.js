const cards = document.querySelector('.cards')

const Book = function (title, auther, pages, readingStatus) {
    this.title = title
    this.auther = auther
    this.pages = pages
    this.readingStatus = readingStatus
}

function addBooks(title, auther, pages, readingStatus) {
    return new Book(title, auther, pages, readingStatus)
}

let myBooks = [];
displayBooks()

function displayBooks() {
    myBooks.forEach((element, index) => {

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
                readingStatusButton.className = 'reading-status-false'
                readingStatusButton.innerText = 'not finished'
            } else {
                element.readingStatus = true
                readingStatusButton.className = 'reading-status-true'
                readingStatusButton.innerText = 'finished'
            }
        })

        const remove = document.createElement('button')
        remove.className = 'remove-button'
        remove.innerText = ' remove'
        remove.addEventListener('click', () => {
            myBooks.splice(index, 1)
            card.remove()
        })

        card.appendChild(title)
        card.appendChild(auther)
        card.appendChild(pages)
        card.appendChild(readingStatusButton)
        card.appendChild(remove)
        cards.appendChild(card)
    })
}

const dialog = document.querySelector("dialog");
const addBook = document.querySelector('.navigation-Add')
const submitButton = document.querySelector(".submit-button");
const closeButton = document.querySelector(".cancel-button");

const dialogTitle = document.querySelector('.add-title')
const dialogAuther = document.querySelector('.add-auther')
const dialogPages = document.querySelector('.add-pages')
const dialogCheck = document.querySelector('#reading-check')

addBook.addEventListener("click", () => {
    clearDialog()
    dialog.showModal();
});

submitButton.addEventListener('click', (e) => {
    const newBook = addBooks(dialogTitle.value, dialogAuther.value,
        dialogPages.value, dialogCheck.checked)
    myBooks.push(newBook);
    cards.innerHTML = ''
    displayBooks()
})

closeButton.addEventListener("click", (e) => {
    clearDialog()
    dialog.close();
});

function clearDialog() {
    dialogTitle.value = ''
    dialogAuther.value = ''
    dialogPages.value = ''
    dialogCheck.checked = false
}