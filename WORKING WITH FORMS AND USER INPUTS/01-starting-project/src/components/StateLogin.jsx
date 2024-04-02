import { useState } from "react";

export default function Login() {

//  const [enteredEmail, setEnteredEmail] = useState('');
//  const [enteredPassword, setEnteredPassword] = useState('');

// The above two states can be combined and can create one single useState 

const [enteredValues, setEnteredValues] = useState({
  email : '',
  password : ''
});


  function handleSubmit(event) {
    event.preventDefault();
console.log(enteredValues)


  }

  // Generic input handling function 

  function handleInputChange(identifier, value) {
setEnteredValues(prevValues => ({
  ...prevValues,
  [identifier] : value
}))
  }

//   function handleEmailChange(event) {
// setEnteredEmail(event.target.value)

// console.log('User Email ' + enteredEmail);
//   }

//   function handlePasswordChange(event) {
//     setEnteredPassword(event.target.value);

//     console.log('User Password '+enteredPassword );
//   }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          name="email" 
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password" 
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
{/* 
        Whenever we submit the form or click on login button the page will automatically reloaded to avoid this we can 
        do it in two ways.
        1. By adding type="button" attribute to the button element by default the type attribute will be set to submit.
        2. by adding the onSubmit prop to form element and listening the event. */}

        {/* <button type="button" className="button" onClick={handleSubmit}>Login</button> */}
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
