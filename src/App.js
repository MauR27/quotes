import "./App.css";
import React, { useState, useEffect } from "react";
import { BsTwitter } from "react-icons/bs";
import { TfiFacebook } from "react-icons/tfi";
import { FaQuoteLeft } from "react-icons/fa";

let colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const randomColor = () => {
  let color = Math.floor(Math.random() * colors.length);
  return colors[color];
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  // useEffect start

  useEffect(() => {
    if (isLoading) {
      fetch("https://api.api-ninjas.com/v1/quotes?category=fitness", {
        headers: {
          "X-Api-Key": "pv9mEOvEetomrHnfve5KfdXAusjL9WVh7baAx9bf",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data[0]);
          setText(data[0].quote);
          setAuthor(data[0].author);
          setIsLoading(false);
          document.body.style.backgroundColor = randomColor();
        });
    }
  }, [isLoading]);

  // useEffect end

  const randomQuote = () => {
    setIsLoading(true);
  };

  // componentes que se renderizan =>

  return (
    <div className="App">
      <div id="quote-box">
        <div className="prueba">
          <div className="text">
            {!isLoading && (
              <>
                <FaQuoteLeft className="quote-icon" />
                <span>{text}</span>
              </>
            )}
          </div>
          <div className="author">
            {!isLoading && (
              <>
                <span>-{author}</span>
              </>
            )}
          </div>
        </div>
        <div className="buttons">
          <div className="tweet-quote">
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.twitter.com/intent/tweet?text=${text} ${author}&hashtags=Quotes`}
            >
              <BsTwitter className="bs-twitter" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <TfiFacebook className="tfi-facebook" />
            </a>
          </div>
          <div className="new-quote">
            <input
              type="button"
              value="New quote"
              onClick={randomQuote}
              className="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
