import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slide, setSlide] = useState(props.slides[0]);
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(false);
  const [restart, setRestart] = useState(true);

  function nextSlide() {
   
    console.log(slideIndex)
    setSlideIndex(slideIndex + 1);
    setSlide(props.slides[slideIndex + 1]);
    if (slideIndex === 3) {
      setNext(true);
    }
    if (slideIndex > -1) {
      setPrev(false);
      setRestart(false);
    }
    console.log(slideIndex)

  }

  function restartApp() {
    setSlideIndex(0);
    setNext(false);
    setPrev(true);
    setRestart(true);
    setSlide(props.slides[0]);
  }
  function prevSlide() {
    setSlideIndex(slideIndex - 1);
    setSlide(props.slides[slideIndex - 1]);
    setNext(false);
    if (slideIndex === 1) {
      setPrev(true);
      setRestart(true);
      //setNext(false);
    }
  }
  console.log(slideIndex)

  return (
    <>
      <h1 data-testid="title">{slide.title}</h1>
      <p data-testid="text">{slide.text}</p>
      <button
        data-testid="button-restart"
        onClick={() => restartApp()}
        disabled={restart}
      >
        Restart
      </button>
      <button
        data-testid="button-prev"
        onClick={() => prevSlide()}
        disabled={prev}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        onClick={() => nextSlide()}
        disabled={next}
      >
        Next
      </button>
    </>
  );
};

export default App;
