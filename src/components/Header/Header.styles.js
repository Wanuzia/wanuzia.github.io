import styled from 'styled-components';
import theme from '../../utils/theme';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${theme.palette.primary.main}; ;
  color: white;
  font-size: 2rem;
  padding: 5rem 0;
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