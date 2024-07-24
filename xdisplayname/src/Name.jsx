import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip'

const Name = () => {
    let [firstName , setFirstName] = useState("")
    let [lastName , setLastName] = useState("")
    let [fullName , setFullName] = useState("")
    const [error, setError] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(firstName.trim() === '' && lastName.trim() === ''){
          setError("Please fill out this field")
        }
        else if(firstName.trim() === '' || lastName.trim() === ''){
            setError("Please fill out this field")
        }
        else{
            setError("")
            setFullName(`${firstName} ${lastName}`)
        }
        
    }

  return (
    <div>
        <h1>Full Name Display</h1>
        <form>
        
        <p>First Name:
            <Tooltip title={error} arrow>
                <input type='text' value={firstName} onChange={handleFirstNameChange} />
            </Tooltip>
        </p>
        
        <p>Last Name:
            <Tooltip title={error} arrow>
                <input type='text' value={lastName} onChange={handleLastNameChange} />
            </Tooltip>
        </p>
        <button type='submit' value='Submit' onClick={handleSubmit}>Submit</button>
        </form>
        <p>Full Name: {fullName}</p>
    </div>
  )
}

export default Name