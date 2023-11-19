import React from "react";


const PersonCard=(props)=>{
    const {firstname,lastname,age,haircolor}=props
    return <div>
        <h2>{firstname} {lastname}</h2>
        <p>age : {age}</p>
        <p>haircolor : {haircolor}</p>
    </div>
}
export default PersonCard