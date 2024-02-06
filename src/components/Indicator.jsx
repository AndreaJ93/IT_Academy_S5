import styled, { keyframes } from "styled-components";

//Animación de los indicadores:
const IndicatorAnimation = keyframes`
 0% { width: 6px; background-color: #D7DBDE;}
 100% { width: 15px; background-color: black;}
`;
const ButtonIndicator = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #d7dbde;
  display: inline-block;
  margin: 3px;
  cursor: pointer;
`;

const ButtonSelected = styled.div`
  height: 6px;
  border-radius: 5px;
  background-color: black;
  display: inline-block;
  margin: 3px;
  cursor: pointer;
  animation-name: ${IndicatorAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

function Indicator({ tutorialData, step, setStep, translateX, setTranslateX }) {
  return (
    <>
      {tutorialData.map((data, index) => {
        return index === step ? (
          <ButtonSelected
            key={index}
            onClick={() => {
              setStep(index);
            }}
          ></ButtonSelected>
        ) : (
          <ButtonIndicator
            key={index}
            onClick={() => {
              setTranslateX(translateX + (step - index) * 360);
              setStep(index);
            }}
          ></ButtonIndicator>
        );
      })}
    </>
  );
}
export default Indicator;
