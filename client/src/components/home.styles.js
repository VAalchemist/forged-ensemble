import styled from "styled-components";


export const Feed = styled.h1`
    font-size: 500%;
    line-height: 118%;
    margin-left: 6%;
    color: transparent;
  
    -webkit-text-stroke: 1px #fff;
    background: url("https://alikhan.dev/download/back.png");
    -webkit-background-clip: text;
    background-position: 0 0;
    animation: back 60s linear infinite;
  
  @keyframes back {
    100% {
      background-position: 2000px 0;
    }
  }
` 