import React , { useState } from "react";


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmpassword, setConfirmpassword] = useState(""); 
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false
    const [titleError, setTitleError] = useState("");

    const Createuser=(e)=> {
        e.preventDefault();
        setHasBeenSubmitted( true )
    }
    const handlefirstname=(e)=>{
            setFirstname(e.target.value);
            if (e.target.value.length <2 && e.target.value.length>0){
                setTitleError("firstname must be 2 characters or longer!") 
            }
            else {setTitleError("")}
            
    }
    const handlelastname=(e)=>{
            setLastname(e.target.value);
        if (e.target.value.length <2 && e.target.value.length>0){
            setTitleError("lastname must be 2 characters or longer!") 
        }
        else {setTitleError("")}
        
    }
    const handleemail=(e)=>{
            setEmail(e.target.value);
        if (e.target.value.length <5 && e.target.value.length>0){
            setTitleError("email must be 5 characters or longer!") 
        }
        else {setTitleError("")}
        
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
    {
        hasBeenSubmitted ?
        <h3>Thank you for submitting the form!</h3>:
        <h3>Welcome, please submit the form</h3>
    }
        <div>

            <label>firstname: </label> 
            <input type="text" value={firstname} onChange={ handlefirstname } style={style1}/>
            {
                    titleError ?
                    <p>{ titleError }</p> :
                    ''
                }
        </div>
        <div>
            <label>lastname: </label> 
            <input type="text" value={lastname} onChange={ handlelastname } style={style1}/>
            {
                    titleError ?
                    <p>{ titleError }</p> :
                    ''
                }
        </div>
        <div>
            <label>Email Address: </label> 
            <input type="email" value={email} onChange={ handleemail } style={style1}/>
            {
                    titleError ?
                    <p>{ titleError }</p> :
                    ''
                }
        </div>
        <div>
            <label>Password: </label>
            <input type="text" value={password} onChange={(e)=>setPassword( e.target.value )} style={style1}/>
            {
              password.length<8 && password.length>0 ?
              (<p>Password must be at least 8 characters</p>): null
                }
        </div>
        <div>
            <label>confirm Password: </label>
            <input type="text" value={confirmpassword} onChange={(e)=> setConfirmpassword(e.target.value)} style={style1} />
            {
               confirmpassword !== password && confirmpassword.length>0 ? 
               (<p>Passwords must match</p>) : null
                }
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




