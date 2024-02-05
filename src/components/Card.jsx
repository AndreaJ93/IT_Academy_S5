import Indicator from "./Indicator";

const rightArrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-right-short pe-2" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/></svg>;

const leftArrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-short pe-2" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/></svg>;

function Card({currentCardData, nextStep, prevStep, step, tutorialData, setStep}) {

    return (
      <>
      <div className="card col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 h-100 m-auto rounded-5 shadow border-0 overflow-hidden">
        <div style={{backgroundColor: currentCardData.bgColor}} className="h-75 align-items-center d-grid p-4 animateImage">
            <img src={currentCardData.image} className="card-img-top" alt="Time Management"/>
        </div>
        <div className="card-body p-4">
            <h6 className="card-title fw-bold"> {currentCardData.title} </h6>
            <p className="card-text"> {currentCardData.description} </p>
            
        </div>
        <div className="p-4 row">
            <div className="col-6">
                <Indicator tutorialData = {tutorialData} step = {step} setStep = {setStep}></Indicator>
            </div>
            <div className="col-6 justify-content-end d-flex pb-2">
                {step === 1 || step === 2 ? <button className="rounded-circle bg-white text-black col-6" onClick={prevStep} style={{width: 40 + 'px', height: 40 + 'px'}}> {leftArrowIcon}</button> : null}
                {step === 0 || step === 1 ? <button className="rounded-circle bg-black text-white col-6 ms-2" onClick={nextStep} style={{width: 40 + 'px', height: 40 + 'px'}}> {rightArrowIcon} </button> : null}
            </div>
            
        </div>
      </div>
      </>
    )
  }
  
export default Card


