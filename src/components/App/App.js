import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';
// import BookPage from '../BookPage/Bookpage';

function App() {

  // console.log(state);
  return (
    <div className="app">
      <header className="bg-secondary pt-3 pb-2" >
        <div className="container">
          <h1 className="text-center text-white">Search For Books</h1>
          <SearchForm />
        </div>
      </header>
      <main className="container">
        <BookList />
        {/* <BookPage /> */}
      </main>
    </div>
  );
}

export default App;
