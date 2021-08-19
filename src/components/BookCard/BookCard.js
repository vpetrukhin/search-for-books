import React from 'react';

const BookCard = () => {

  const openBookPage = () => {
    console.log('open');
  }
  
  return (
    <div className="card bg-light bg-gradient" style={{width: "250px"}} onClick={openBookPage}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">ctegory</h6>
        <h5 className="card-title">title</h5>
        <p className="card-text">
          author
        </p>
      </div>
    </div>
  );
}
export default BookCard;