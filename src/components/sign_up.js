import React, {useState,setState} from 'react';
import './style.css'
function SignUpForm() {
    
    const [userName, setUserName] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "userName"){
            setUserName(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(userName,password,confirmPassword);
        let obj = {
            userName:userName,
            password:password,
            confirmPassword:confirmPassword,
        }       
    }

    return(
        <div className="form">
            <nav class="bg-dark navbar-dark navbar">
                <div className="row col-12 d-flex justify-content-center text-white">
                    <h3>Sign up</h3>
                </div>
            </nav>
            <div className="form-body">
                <div className="username">
                    <div>
                        <label className="form__label" for="userName">Username </label>
                    </div>
                    <div>
                        <input className="form__input" type="text" value={userName} onChange = {(e) => handleInputChange(e)} id="userName" placeholder="Username"/>
                    </div>
                </div>
                <div className="password">
                    <div><label className="form__label" for="password">Password </label></div>
                    <div><input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/></div>
                </div>
                <div className="confirm-password">
                    <div>
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                    </div>  
                    <div>  
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                    </div>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">SUBMIT</button>
            </div>
        </div>
       
    )       
}

export default SignUpForm