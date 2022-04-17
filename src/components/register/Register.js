import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Register.css";
import { yenikullanicikayit } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";


const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

function Register() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) =>{
    setLastName(e.target.value)
  }

  const handleSubmit = (e) => {
    const displayName = `${firstName} ${lastName}`;
    e.preventDefault();
    yenikullanicikayit(email,password,navigate,displayName)
  }

  console.log(firstName,lastName,email,password)
  return (
    <div className="register">
      <h1>Register Page</h1>
      <form action="" className="form" onSubmit={handleSubmit}>
      <ValidationTextField
          label="First Name"
          required
          variant="outlined"
          type="text"
          onChange={handleFirstName}
        />
                <ValidationTextField
          label="Last Name"
          required
          variant="outlined"
          type="text"
          onChange={handleLastName}
        />
        <ValidationTextField
          label="Email Address"
          required
          variant="outlined"
          type="email"
          onChange={handleEmail}
        />
        <ValidationTextField
          label="password"
          required
          variant="outlined"
          type="password"
          onChange={handlePassword}
        />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
