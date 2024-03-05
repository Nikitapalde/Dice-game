import styled from "styled-components";

const Startgame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img 
        src="./images/dices 1.png"/>
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}
export default Startgame;

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;

.content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}

`;

const Button = styled.button`
color: white;
padding: 10px 18px;
background-color: black;
border-radius: 5px;
width: 220px;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: background 0.4s ease-in;
cursor: pointer;
align-items: end;

&:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: background 0.3s ease-in ;


}
`;