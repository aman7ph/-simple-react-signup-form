import React from 'react';
import './style.css';

export default function App() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    joinedNewsletter: false,
  });
  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }
  console.log(formData);
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      if (formData.joinedNewsletter) {
        console.log(
          ' Successfully signed up and Thanks for signing up for our newsletter!'
        );
      } else {
        console.log('Successfully signed up');
      }
    } else {
      console.log('Passwords do not match');
    }
  }
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />

          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
