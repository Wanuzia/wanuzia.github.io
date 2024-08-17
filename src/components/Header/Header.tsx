import React, { useEffect, useState } from 'react';
import { HeaderContainer, AnimatedText } from './Header.styles';

const Header = () => {
  const hasText = true;
  const words = ["HTML ", "CSS ", "JavaScript ", "React ", "NodeJs "];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [lettersArray, setLettersArray] = useState(words[0].split(""));

  useEffect(() => {
    if (hasText) {
      const interval = setInterval(() => {
        setCurrentLetterIndex((prevIndex) => {
          if (prevIndex >= lettersArray.length - 1) {
            setCurrentWordIndex((prevWordIndex) => {
              const newWordIndex = (prevWordIndex + 1) % words.length;
              setLettersArray(words[newWordIndex].split(""));
              return newWordIndex;
            });
            return 0;
          }
          return prevIndex + 1;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [lettersArray, hasText, words]);

  return (
    <HeaderContainer>
      <AnimatedText id="animated-text">
        {lettersArray.map((letter, index) => (
          <span
            key={index}
            className={`letter ${index === currentLetterIndex ? 'current' : ''} ${index <= currentLetterIndex ? 'active' : ''}`}
          >
            {letter}
          </span>
        ))}
      </AnimatedText>
    </HeaderContainer>
  );
};

export default Header;