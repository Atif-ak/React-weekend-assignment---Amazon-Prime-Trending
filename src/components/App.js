import React, { Component, useState } from "react";
import "../styles/App.css";

const App = (props) => {
  const [slideind, setSlideInd] = useState(0);
  const [slide, setSlide] = useState(props.slides[0]);
  const [restartSlide, setRestartSlide] = useState(true);
  const [prevSlide, setPrevSlide] = useState(true);
  const [nextSlide, setNextSlide] = useState(false);
  function next() {
    setSlideInd(slideind + 1);
    setSlide(props.slides[slideind + 1]);

    if(slideind===3){
      setNextSlide(true)
    }
    
    if(slideind>-1){
      setPrevSlide(false)
      setRestartSlide(false)

    }
  }

  function prev(){
    setSlideInd(slideind - 1);
    setSlide(props.slides[slideind - 1]);
    console.log(slideind);
    if(slideind===1){
      setPrevSlide(true)
      setRestartSlide(true)
      setNextSlide(false)
    }
  }
  function restart(){
    setPrevSlide(true)
    setRestartSlide(true)
    setNextSlide(false)
    setSlide(props.slides[0])
    setSlideInd(0)

  }
  return (
    <>
      <h1 data-testid="title">{slide.title}</h1>
      <p data-testid="text">{slide.text}</p>
      <button data-testid="button-restart" onClick={() => restart()}
         disabled={restartSlide}>
        Restart
      </button>
      <button data-testid="button-prev" onClick={() => prev()}
             disabled={prevSlide}>
        Prev
      </button>
      <button data-testid="button-next" 
       onClick={() => next()}
       disabled={nextSlide}>
        Next
      </button>
    </>
  );
};

export default App;
