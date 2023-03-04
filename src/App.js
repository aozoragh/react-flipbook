import React from "react";

// import styled from 'styled-component';
import HTMLFlipBook from "react-pageflip";


export default function App() {

  return (
    <>
      <HTMLFlipBook
        width={300}
        height={600}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="book"
      >
        <div className="demoPage right"></div>
        <div className="demoPage left"></div>
        <div className="demoPage right"></div>
        <div className="demoPage left"></div>
      </HTMLFlipBook>
    </>
  );
}
