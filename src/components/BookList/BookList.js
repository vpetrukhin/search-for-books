import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { activeBookPage, fetchBooks } from '../../redux/actions';
import BookCard from '../BookCard/BookCard';
import BookPage from '../BookPage/Bookpage';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.state.books);
  const formValues = useSelector(state => state.state.form);
  const loading = useSelector(state => state.state.loading);
  const bookPageState = useSelector(state => state.state.bookPageActive);

  const [selectedBook, setSelectedBook] = useState(null);

  const { totalItems } = books;
  
  const loadMoreHandler = () => {
    dispatch(fetchBooks(formValues))
  }

  const searchBook = (bookId) => {
    setSelectedBook(books.items.find(item => item.id === bookId))
    dispatch(activeBookPage());
  }
  
  if (bookPageState) {
    return <BookPage book={selectedBook}/>
  }

  if (!books.items.length) {
    return (
      <section className="container">
          <p className="text-center mt-3">Введите данные для поиска книг</p>
      </section>
    )
  }

  if (loading) {
    return (
      <section className="container">
        <div className="spinner-border text-secondary center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    )
  }

  return (
    <section className="container">
      <p className="text-center mt-2">Found {totalItems} results</p>
        <ul className="books">
          {books.items.map(book => {
            return (
                <BookCard 
                  book={book}
                  key={book.id}
                  bookPageHandler={searchBook}
                  />
            )
          })}
        </ul>
        <button
          type="button"
          className="btn btn-light books__btn"
          onClick={loadMoreHandler}
        >Load more books</button>
    </section>
  )
}
export default BookList;