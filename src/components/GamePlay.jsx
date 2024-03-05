import styled from "styled-components"
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice";
import {useState} from 'react';

const GamePlay = () => {
    const [score,setscore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(); 
    const  [currentDice, setCurrentDice] = useState(1);
    const [error,setError] = useState("");

    const generateRandomNumber = (min,max) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    const roleDice = () => {
        if(!selectedNumber){
            setError("You have note selected any number");
            return;
        } 
    
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);


        if(selectedNumber == randomNumber){
            setscore((prev) => prev + randomNumber);
        }else{
            setscore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    }

  return (
    <>
    <MainContainer>
        <div className="top_section"> 
            <TotalScore score={score}/>
            <NumberSelector
            setError={setError}
            error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
        <RoleDice 
        currentDice={currentDice} roleDice={roleDice}
        />
    </MainContainer>
    </>
  )
}

const MainContainer = styled.main`
    padding-top: 70px;

    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
       
    }
`;

export default GamePlay;