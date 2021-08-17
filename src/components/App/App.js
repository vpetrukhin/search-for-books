import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Search For Books</h1>
        <SearchForm />
      </header>
      <main className="app__main">
        <BookList />
      </main>
    </div>
  );
}

export default App;
