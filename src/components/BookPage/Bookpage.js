import React from 'react';

const BookPage = () => {
  
  return (
    <section className="book-page">
      <div className="container">
        <div className="row">
          <div className="col w-50">
            <img src="#" alt="book" className="book-page__img"/>
          </div>
          <div className="col w-50 p-5">
            <p className="text-secondary fs-6">category</p>
            <h2 className="fs-2">title</h2>
            <p className="text-secondary fs-6">author</p>
            <p className="fs-5">description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa dolore ducimus saepe ipsam reiciendis adipisci placeat, nulla, perspiciatis quia consectetur est temporibus accusamus dolorum error ipsum iste. Repellat, cum rem?</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BookPage;