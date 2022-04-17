import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";
import { useState } from "react";
import { kullanicigirisi } from "../../auth/firebase";
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

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    console.log(e)
    e.preventDefault();
    kullanicigirisi(email,password,navigate)
  }

  console.log(email,password)
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form action="" className="form" onSubmit={handleLogin}>
        <ValidationTextField
          label="Email Address"
          required
          variant="outlined"
          onChange={handleEmail}
          type="email"
        />
        <ValidationTextField
          label="password"
          required
          variant="outlined"
          onChange={handlePassword}
          type="password"
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
