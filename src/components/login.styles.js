import styled from 'styled-components';

export const Background = styled.video`
  position: absolute;
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