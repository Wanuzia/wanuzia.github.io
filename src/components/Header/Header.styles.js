import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  color: white;
  font-size: 2rem;
`;

export const AnimatedText = styled.div`
  .letter {
    opacity: 0.3;
    transition: opacity 0.3s;
  }
  .letter.active {
    opacity: 1;
  }
  .letter.current {
    color: #61dafb;
  }
`;