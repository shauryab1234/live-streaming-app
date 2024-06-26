import React, { useState } from "react";
import { passwordValidationMessage, validatePassword } from "../../../shared/validators";
import { Input } from "../../../shared/components";

const inputs= [
    {
        field: 'password',
        label: 'Current password',
        validationMessage: passwordValidationMessage,
        type: "password",
    },
    {
        field: 'newPassword',
        label: 'New password',
        validationMessage: passwordValidationMessage,
        type: "password",
    },
]

export const PasswordSettings = () => {
    const [formState, setFormState] = useState({
        password: {
            isValid: false,
            showError: false,
            value: '',
        },
        newPassword: {
            isValid: false,
            showError: false,
            value: '',
        },
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
    
    const isSumbitButtonDisabled = !formState.password.isValid || !formState.newPassword.isValid;
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        //http request
    }
    
    const handleInputValidationOnBlur = (value,field) => {
        let isValid = validatePassword(value);
    
        setFormState(prevState =>({
          ...prevState,
          [field]: {
            ...prevState[field],
            isValid,
            showError : !isValid,
          }
        }))
    }

  return <form className="settings-form">
    {inputs.map(input => (
        <Input
            key = {input.field}
            field={input.field}
            label={input.label}
            value={formState[input.field].value}
            onBlurHandler={handleInputValidationOnBlur}
            onChangeHandler={handleInputValueChange}
            showErrorMessage={formState[input.field].showError}
            validationMessage={input.validationMessage}
            type={input.type}
        />
        ))
    }
    <button disabled= {isSumbitButtonDisabled} onClick={handleFormSubmit}>
        Save changes
    </button> 
  </form>
};
