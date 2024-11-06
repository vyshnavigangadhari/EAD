import React, { useState } from "react";
import validator from 'validator';

const App = () => {

  const [passwordStrength, setPasswordStrength] = useState('');

  const validate = (value) => {
    let strength = '';

    if (value.length < 6) {
      strength = 'Weak';
    } else if (validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })) {
      strength = 'Very Strong';
    } else if (value.length >= 8 && value.match(/[A-Z]/) && value.match(/[a-z]/) && value.match(/[0-9]/)) {
      strength = 'Strong';
    } else if (value.length >= 6 && value.match(/[A-Z]/) && value.match(/[a-z]/)) {
      strength = 'Medium';
    } else {
      strength = 'Weak';
    }

    setPasswordStrength(strength);
  };

  return (
    <div style={{ marginLeft: '200px' }}>
      <pre>
        <h2>Checking Password Strength in ReactJS</h2>
        <span>Enter Password: </span>
        <input
          type="text"
          onChange={(e) => validate(e.target.value)}
        />
        <br />
        {passwordStrength === '' ? null : (
          <span
            style={{
              fontWeight: 'bold',
              color: passwordStrength === 'Very Strong'
                ? 'green'
                : passwordStrength === 'Strong'
                ? 'blue'
                : passwordStrength === 'Medium'
                ? 'orange'
                : 'red',
            }}
          >
            {passwordStrength}
          </span>
        )}
      </pre>
    </div>
  );
};

export default App;
