import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const RoleDice = ({ currentDice, roleDice }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    setIsRolling(true);
    roleDice(); // Call the rollDice function passed as a prop

    // Reset rolling state after animation duration
    setTimeout(() => {
      setIsRolling(false);
    }, 500); // Match this duration to the animation duration
  };

  return (
    <DiceContainer>
      <div className='dice' onClick={handleClick}>
        <DiceImage 
          src={`/images/dice_${currentDice}.png`} 
          alt={`dice ${currentDice}`} 
          className={isRolling ? 'rolling' : ''}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

const rollAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2) rotate(360deg);
  }
  100% {
    transform: scale(1);
  }
`;

const DiceImage = styled.img`
  cursor: pointer;

  &.rolling {
    animation: ${rollAnimation} 0.5s ease-in-out; /* Trigger the animation */
  }
`;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;

export default RoleDice;
