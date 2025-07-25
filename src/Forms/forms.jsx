import React, { useState } from "react";
import styles from "./forms.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function RegistrationForms() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with data:
        First Name: ${formData.firstName}`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };
  let fontSize = 20;

  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);
   const [text, setText] = useState(""); 

  return (
    <>
      {/* <button onClick={toggle}>{isOn ? "Turn Off" : "Turn On"}</button>
       <input onKeyDown={(e) => setText(e.key)} /> 
      <p>Preview: {text}</p>
      
      
      <Button>Click Me</Button> */}
      <h1 className="p-4 bg-gray-100 rounded shadow">Registration Forms</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br /> <br />
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br /> <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /> <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {(formData.password.length < 3 || formData.password.length > 8) && (
          <span style={{ fontSize: `${fontSize}px` }}>invalid password</span>
        )}
        {(formData.password.length < 3 || formData.password.length > 8) && (
          <span style={{ fontSize: `${fontSize}px` }}>invalid password</span>
        )}
        {(formData.password.length < 3 || formData.password.length > 8) && (
          <span style={{ fontSize: `${fontSize}px` }}>invalid password</span>
        )}
        {(formData.password.length < 3 || formData.password.length > 8) && (
          <span style={{ fontSize: `${fontSize}px` }}>invalid password</span>
        )}
        {(formData.password.length < 3 || formData.password.length > 8) && (
          <span style={{ fontSize: `${fontSize}px` }}>invalid password</span>
        )}
        {(formData.password.length < 3 || formData.password.length > 8) && (
          <span style={{ fontSize: `${fontSize}px` }}>invalid password</span>
        )}
        <br /> <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {formData.password != formData.confirmPassword && (
          <span>PASSWORD NOT MATCHING</span>
        )}
        <br /> <br />
        <button type="submit">Register</button>
        <button type="reset" className="">
          Reset
        </button>
      </form>

      <Link to={'/products'}>
      Products
      </Link>
    </>
  );
}

export default RegistrationForms;
