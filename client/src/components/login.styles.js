import styled, {keyframes} from 'styled-components';


export const Background = styled.video`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
  display: block;
  margin: 0 auto;
`;

export const LoginImg = styled.img`
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
