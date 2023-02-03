import React, { useState } from 'react';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    setPassword(inputValue + Math.random().toString(36).substring(7));
  };

  return (
    <div className="password-generator">
      <h2 className="title">Password Generator</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Enter prefix"
          className="input"
        />
        <button onClick={generatePassword} className="button">Generate Password</button>
      </div>
      <p className="password">Password: {password}</p>
    </div>
  );
};

export default PasswordGenerator;
