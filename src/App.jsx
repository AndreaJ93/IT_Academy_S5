import Card from './components/Card'
import { useState } from 'react'

const tutorialData = [
  {
    title: "Dedica moltes hores",
    description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
    bgColor: "#4DA2A9",
    image: 'src/assets/time_managment.svg',
  },

  {
    title: "Programa projectes propis",
    description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
    bgColor: "#D3D4D9",
    image: 'src/assets/programming.svg',
  },

  {
    title: "Procura descansar",
    description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Millorarès la teva concentració i consolidaràs el teu aprenentatge.",
    bgColor: "#FFD167",
    image: 'src/assets/meditation.svg',
  }
]

function App() {
  const [step, setStep] = useState (0)

  function nextStep () {
    setStep ( prev => prev + 1)
  }

  function prevStep () {
    setStep ( prev => prev - 1)
  }

  return (
    <>
      <Card currentCardData = {tutorialData[step]} nextStep = {nextStep} prevStep = {prevStep} step = {step} tutorialData = {tutorialData} setStep = {setStep}></Card>
    </>
  )
}

export default App
