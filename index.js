document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks(){
  return fetch ('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(data => renderBooks(data));
}

function renderBooks(books){
  let main = document.querySelector('main')
  books.forEach(book => {
    let p = document.createElement('p');
    p.textContent = book.name;
    main.appendChild(p)
  })
}