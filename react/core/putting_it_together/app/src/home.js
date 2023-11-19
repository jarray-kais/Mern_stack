import React , { useState } from "react";


const PersonCard=(props)=>{
    const {firstName,lastName,age,hairColor}= props
    const [stateAge, setStateAge] = useState(age);
    return <div>
        <h2>{firstName} {lastName}</h2>
        <p>age :{stateAge}</p>
        <p>haircolor : {hairColor}</p>
        <button onClick={() => setStateAge(stateAge + 1 )}>
        Birthday Button for {firstName} {lastName}
        </button>
    </div>
}

export default PersonCard

