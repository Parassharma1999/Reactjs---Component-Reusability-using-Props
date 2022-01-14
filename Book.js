import React from "react";
import ReactDOM from 'react-dom'
import "./Book.css";
export default function Book() {
  const details = [
    {
      Id: 1,
      Title: "The Psychology of Money",
      Author: "Morgan Housel",
      Price: 269,
      img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL200_SR200,200_.jpg",
    },
    {
      Id: 2,
      Title: "Atomic Habits: The life-changing million...",
      Author: "James Clear",
      Price: 482,
      img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg",
    },
    {
      Id: 3,
      Title: "Word Power Made Easy",
      Author: "Norman Lewis",
      Price: 92,
      img: "https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg",
    },
    {
      Id: 4,
      Title: "It Ends With Us: A Novel",
      Author: "Colleen Hoover",
      Price: 267,
      img: "https://images-eu.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL200_SR200,200_.jpg",
    },
    {
      Id: 5,
      Title: "Write Me A Love Story",
      Author: "Ravinder Singh",
      Price: 100,
      img: "https://images-eu.ssl-images-amazon.com/images/I/81hfjCi2IXL._AC_UL200_SR200,200_.jpg",
    },
  ];
  return (
    <div>
      {details.map((book) => {
        const { Id, Title, Author, Price, img } = book;
        return <Books book={book} key={book.Id} />;
      })}
    </div>
  );
}

function Books(props) {
  const { Id, img, Title, Author, Price } = props.book;

  return (
      <div className="wrapper">
        <h1 id="Heading"> #{Id}</h1>
        <div className="details">
          <img src={img} alt="img" /> <br />
          <h3>Title: {Title}</h3>
          <h4>Author: {Author}</h4>
          <h4>Price: {Price} INR</h4>
        </div>
      </div>
  );

}

ReactDOM.render(<Book/>, document.getElementById('root'));
