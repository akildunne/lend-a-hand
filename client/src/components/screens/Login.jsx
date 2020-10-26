import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;

`;


const LabelContainer = styled.label`

`;

const InputContainer = styled.input`

`;

const RegisterContainer = styled.div`

`;

const LoginButton = styled.button`

`;

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const { username, password } = formData;
  const { error, handleLogin } = props;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Form onSubmit={(e)=>{
      e.preventDefault();
      handleLogin(formData);
    }}>
      {
        error &&
        <p>{error}</p>
      }
      <LabelContainer>
        Username:
        <InputContainer
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
        />
      </LabelContainer>
      <LabelContainer>
        Password:
        <InputContainer
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </LabelContainer>
      <LoginButton>Login</LoginButton>
      <RegisterContainer>
        <Link to='/register'>Register</Link>
        </RegisterContainer>
    </Form>
  )
}