import styled from "styled-components";


export const Feed = styled.h1`
    font-size: 300%;
    line-height: 118%;
    color: transparent;
  
    -webkit-text-stroke: 1px #fff;
    background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVIkfT_oNPeWrS6sRdbnGwwhiGTmAf7XB4OQ&usqp=CAU");
    /* background: url("https://alikhan.dev/download/back.png"); */
    -webkit-background-clip: text;
    background-position: 0 0;
    animation: back 60s linear infinite;
  
  @keyframes back {
    100% {
      background-position: 2000px 0;
    }
  }

  @media (max-width: 820px) {
  font-size: 250%;
  }

  @media (max-width: 550px) {
  font-size: 155%;
  }

  @media (max-width: 390px) {
  font-size: 130%;
  }
` 