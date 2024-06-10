import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";
import { emailValidationMessage, passwordValidationMessage, validateEmail } from "../shared/validators";
import { validatePassword } from "../shared/validators";
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

    const handleInputValidationOnBlur = (value,field) => {
      let isValid = false;

      switch(field) {
        case 'email' :
          isValid = validateEmail(value);
          break;
        case 'password' :
          isValid = validatePassword(value);
          break;
        default :
          break;
      }

      setFormState(prevState =>({
        ...prevState,
        [field]: {
          ...prevState[field],
          isValid,
          showError : !isValid,
        }
      }))
    }

    console.log(formState);

  return (
    <div className="login-container">
      <Logo text = {"Log in"}/>
      <form className="auth-form">
        <AuthInput
         field = "email"
         label = "email" 
         value = {formState.email.value} 
         onChangeHandler = {handleInputValueChange} 
         type = 'text'
         onBlurHandler={handleInputValidationOnBlur}
         showErrorMessage={formState.email.showError}
         validationMessage={emailValidationMessage}
        />
        <AuthInput 
         field = "password"
         label = "password" 
         value = {formState.password.value} 
         onChangeHandler = {handleInputValueChange} 
         type='password'
         onBlurHandler={handleInputValidationOnBlur}
         showErrorMessage={formState.password.showError}
         validationMessage={passwordValidationMessage}
        />
        <button
          disabled = {!formState.email.isValid || !formState.password.isValid}
        >Log in</button>
      </form>
      <span onClick={userClickHandler} className="form-switch">Not signed up? Click here</span>
    </div>
  )
};
