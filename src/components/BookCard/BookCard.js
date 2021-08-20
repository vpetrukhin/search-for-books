import React from 'react';

const BookCard = ({
    book,
    bookPageHandler
  }) => {
  const { smallImage, categories, title, authors } = book;

  const openBookPage = () => {
    bookPageHandler(book.id);
  }
  
  return (
    <li className="books__item book bg-light p-2" onClick={openBookPage}>
      <img src={smallImage} className="book__img mb-3" alt={title} />
      <div className="book__body">
        <p className="book__category">{categories}</p>
        <h5 className="book__title">{title}</h5>
        <p className="book__author">{authors}</p>
      </div>
    </li>
  );
}
export default BookCard;