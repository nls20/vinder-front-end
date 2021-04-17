import {useState} from 'react'

const HandleRadioButtons = ({vaccinated}) => {

  const [vaccinatedYes, setVaccinatedYes] = useState(true)
  const [vaccinatedNo, setVaccinatedNo] = useState(false)

  const handVaccinatedYes = (evt) => {
    setVaccinatedYes(evt.target.value)
  }

  const handleVaccinatedNo = (evt) => {
    setVaccinatedNo(evt.target.value)
  }

  if (vaccinatedNo){
    return <p>Stop stop stop, Go and get a vaccine!</p>
  }
  return (
    <>
    <input 
       type="radio" 
       id="Choice"
       name="vaccinated" 
       value={true} 
       onChange={handVaccinatedYes} 
       required/>
       <label htmlFor="Choice1">yes</label>

      <input 
      type="radio" 
      id="Choice"
      name="vaccinated" 
      value={false} 
      onChange={handleVaccinatedNo}
       />
     <label htmlFor="Choice2">no</label>

     <input  id="button" type="submit" value="Submit"/>
     </>
  )
}

export default HandleRadioButtons;