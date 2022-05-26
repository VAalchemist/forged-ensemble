import styled, {keyframes} from 'styled-components';


export const Background = styled.video`
  position: fixed;
<<<<<<< HEAD
  width: 100%;
  height: 100%;
=======
  width: 100vw;
  height: 100vh;
>>>>>>> c2211577c9c2bb6f4e96db2cc6a1711e46b8a476
  top: 50%;
  left: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  display: block;
  margin: 0 auto;
`;

export const BgImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -2;
  display: block;
  margin: 0 auto;
`;

export const Zoomanimation = keyframes`
  0% {
  transform: scale(.1, .1);
  }
  100% {
  transform: scale(1, 1);
  }
`;

export const Zoom = styled.div`
  animation: ${Zoomanimation} 5.7s ease
`;
