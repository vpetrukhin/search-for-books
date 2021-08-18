import React from 'react';
import BookCard from '../BookCard/BookCard';

const BookList = () => {

  const loadMoreHandler = () => {
    console.log('load more');
  }
  
  return (
    <section className="books container">
      <p className="text-center mt-2">Found 446 results</p>
      
      <div className="container mb-3">
        <div className="row g-3">
          <div className="col-sm center-block">
            <BookCard />
          </div>
          <div className="col-sm">
            <BookCard />
          </div>
          <div className="col-sm">
            <BookCard />
          </div>
          <div className="col-sm">
            <BookCard />
          </div>
          <div className="col-sm">
            <BookCard />
          </div>
          <div className="col-sm">
            <BookCard />
          </div>
        </div>
      </div>

      <div className="d-grid gap-2 mb-3">
        <button type="button" className="btn btn-light" onClick={loadMoreHandler}>Load more books</button>
      </div>


      

      
    </section>

    

  )
}
export default BookList;