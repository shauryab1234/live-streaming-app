import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";
export const Login = ({userClickHandler}) => {
    const [formState, setFormState] = useState({
        email : {
            value : "",
            isValid : false,
            showError : false,
        },
        password : {
            value : "",
            isValid : false,
            showError : false,
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState(prevState => ({
            ...prevState,
            [field] : {
                ...prevState[field],
                value : value,
            }
        }));
    }
    console.log(formState);

  return (
    <div className="login-container">
      <Logo text = {"Log in"}/>
      <form className="auth-form">
        <AuthInput field = "email" label = "email" value = {formState.email.value} onChangeHandler = {handleInputValueChange}/>
        <AuthInput field = "password" label = "password" value = {formState.password.value} onChangeHandler = {handleInputValueChange}/>
        <button>Log in</button>
      </form>
      <span onClick={userClickHandler} className="form-switch">Not signed up? Click here</span>
    </div>
  )
};
