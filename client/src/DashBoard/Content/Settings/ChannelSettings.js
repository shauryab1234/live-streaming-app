import React, { useState } from "react";
import { usernameValidationMessage } from "../../../shared/validators/validateUsername";
import { avatarURLValidationMessage, descriptionValidationMessage, titleValidationMessage, validateAvatarURL, validateDescription, validateTitle, validateUsername } from "../../../shared/validators";
import {Input} from "../../../shared/components"

const inputs= [
    {
        field: 'username',
        label: 'Username',
        validationMessage: usernameValidationMessage,
        type: "text",
    },
    {
        field: 'title',
        label: 'Title',
        validationMessage: titleValidationMessage,
        type: "text",
    },
    {
        field: 'avatarURL',
        label: 'Avatar URL',
        validationMessage: avatarURLValidationMessage,
        type: "text",
    },
    {
        field: 'description',
        label: 'Description',
        validationMessage: descriptionValidationMessage,
        type: "text",
        textarea: true,
    },
]

export const ChannelSettings = ({settings}) => {
    const [formState, setFormState] = useState({
        title: {
            isValid: false,
            showError: false,
            value: settings.title,
        },
        username: {
            isValid: false,
            showError: false,
            value: settings.username,
        },
        avatarURL: {
            isValid: false,
            showError: false,
            value: settings.avatarURL,
        },
        description: {
            isValid: false,
            showError: false,
            value: settings.description,
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

    const handleInputValidationOnBlur = (value,field) => {
        let isValid = false;
  
        switch(field) {
          case 'username' :
            isValid = validateUsername(value);
            break;
          case 'avatarURL' :
            isValid = validateAvatarURL(value);
            break;
          case 'title' :
            isValid = validateTitle(value);
            break;
          case 'description' :
            isValid = validateDescription(value);
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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        //http request
    };

    const isSumbitButtonDisabled = 
        !formState.avatarURL.isValid ||
        !formState.username.isValid ||
        !formState.title.isValid ||
        !formState.description.isValid ;

  return (
    <form className="settings-form">
        {inputs.map(input => (
            <Input 
                key = {input.field}
                field = {input.field}
                label = {input.label}
                value = {formState[input.field].value}
                onChangeHandler={handleInputValueChange}
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState[input.field].showError}
                validationMessage={input.validationMessage}
                type={input.type}
                textarea={input.textarea}
            />
        ))}
        <button onClick={handleFormSubmit} disabled= {isSumbitButtonDisabled}>
            Save Changes
        </button>
    </form>
  )
};
