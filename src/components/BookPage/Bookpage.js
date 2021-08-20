import React from 'react';
import { useDispatch } from 'react-redux';
import { disactiveBookPage } from '../../redux/actions';

const BookPage = ({ book }) => {
  const dispatch = useDispatch();
  
  const { bigImage, categories, title, authors, description } = book;

  const bookPageDisactive = () => {
    dispatch(disactiveBookPage());
  }

  return (
    <section className="book-page mt-2">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={bigImage} alt={title} className="book-page__img"/>
            <p className="text-secondary fs-6">{categories}</p>
            <h2 className="fs-2">{title}</h2>
            <p className="text-secondary fs-6">{authors}</p>
            <p className="book-page__description fs-5">{description}</p>
            <button type="button" className="btn mt-2 btn-secondary" onClick={bookPageDisactive}>К списку книг</button>
          </div>
        </div>
        
      </div>
    </section>
  )
}
export default BookPage;