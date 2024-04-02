import { useState } from "react";

export default function Login() {

 const [enteredEmail, setEnteredEmail] = useState();
  function handleSubmit(event) {
    event.preventDefault();
console.log('Submitted')


  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
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
