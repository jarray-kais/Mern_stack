import React , { useState } from "react";


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmpassword, setConfirmpassword] = useState(""); 
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false

    const Createuser=(e)=> {
        e.preventDefault();
        setHasBeenSubmitted( true )
    }
    const FormMessage=()=>{
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!"
        }
        else{
            return "Welcome, please submit the form"
        }

    }

    const style1 = {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
    }
    const style2={
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: "20px",
    }
    return <div>
    <form onSubmit={Createuser} style={style2}>
    <h3>{FormMessage()}</h3>
        <div>

            <label>firstname: </label> 
            <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } style={style1}/>
        </div>
        <div>
            <label>lastname: </label> 
            <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } style={style1}/>
        </div>
        <div>
            <label>Email Address: </label> 
            <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } style={style1}/>
        </div>
        <div>
            <label>Password: </label>
            <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } style={style1}/>
        </div>
        <div>
            <label>confirm Password: </label>
            <input type="text" value={confirmpassword} onChange={ (e) => setConfirmpassword(e.target.value) } style={style1} />
        </div>
        <input type="submit" value="Create User" />
    </form>
    
    <div>
        <h3>your form data</h3>
        <p><label>firstname : </label>{firstname}</p>
        <p><label>lastname : </label>{lastname}</p>
        <p><label>Email : </label>{email}</p>
        <p><label>password : </label>{password}</p>
        <p><label>confirm password : </label>{confirmpassword}</p>
    </div>
    </div>
};



export default UserForm




