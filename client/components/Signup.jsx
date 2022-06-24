import React, { useState } from "react";
import reactDOM from "react-dom"
import "../app.css";
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const Signup = () => {
  // State setters
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit post called");

    axios
      .post("/api/signup", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data === "Password Authenticated") {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(`Error occured in onSubmit: ${err}`);
      });
  };

  const paperStyle = {
    padding: 20,
    height: '40vh',
    width: 280,
  margin: '0 auto'}
  const btnstyle = {margin: '8px 0'}


  console.log(`is the user logged in: ${loggedIn}`);
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <h2>Sign Up</h2>
        </Grid>
        <TextField label='Username' plaeholder='Enter username' fullWidth required/>
        <TextField label='Password' plaeholder='Enter password' type='password' fullWidth required/>
        <TextField label='Confirm Password' plaeholder='Confirm password' type='password' fullWidth required/>
        <Button onClick={onSubmit} type='submit' color='primary' variant='contained' style={btnstyle} fullWidth> Create account and Sign in</Button>
      </Paper>
    </Grid>       
  );
};




{/* <form>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          color="primary"
          margin="normal"
          required
          id="username"
          name="username"
          autoComplete="username"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          color="primary"
          margin="normal"
          required
          id="password"
          name="password"
          autoComplete="current-password"
        />

        <Button onClick={onSubmit}> Login </Button>
      </form>  */}




// const onChange =(event) => {
//     setValues({ ...values, [event.target.name]})
// }

// export const Signup = () => {
//   return (
//     <form action="/action_page.php" method="get">
//       <label for="uname">Username</label>
//       <input type="text" id="uname" name="uname" />
//       <label for="pword">Password</label>
//       <input type="text" id="lname" name="lname" />
//       <button type="submit">Submit</button>
//       <button type="submit" formaction="/action_page2.php">
//         Submit to another page
//       </button>
//     </form>
//   );
// };
