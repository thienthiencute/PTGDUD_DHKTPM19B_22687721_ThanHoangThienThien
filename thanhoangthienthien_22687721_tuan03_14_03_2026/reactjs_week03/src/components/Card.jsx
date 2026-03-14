import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Button from './Button';

const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`card ${theme}`}>
      <h2>This is a Card</h2>
      <Button />
    </div>
  );
};

export default Card;