// import * as React from 'react';
import React, { useState } from "react";
import reactDOM from "react-dom";
import { Redirect, useNavigate } from "react-router-dom";
import "../app.css";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export const Login = () => {
  // State setters
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("loginClickHandler post called");

    axios
      .post("/api/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data === "Password Authenticated") {
          setLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(`Error occured in loginHandler: ${err}`);
      });
      console.log("user has been logged in")
  };

   if (loggedIn) {
        setTimeout(() => {
          history("/feed");
        }, 0);
      }

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "0 auto",
  };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <h2>Sign In</h2>
        </Grid>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          plaeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          plaeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <Button
          onClick={loginHandler}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          {" "}
          Sign in
        </Button>
        <Typography>
          {" "}
          Do you have an account?
          <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

// export const Login = () => {
//   // State setters
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log("onSubmit post called");

//     axios
//       .post("/api/login", {
//         username: username,
//         password: password,
//       })
//       .then((res) => {
//         if (res.data === "Password Authenticated") {
//           setLoggedIn(true);
//         }
//       })
//       .catch((err) => {
//         console.log(`Error occured in onSubmit: ${err}`);
//       });
//   };

//   // Bootleg way to reroute someone if theyre logged in
//   // if (loggedIn) {
//   //   setTimeout(() => {
//   //     props.history.push("/someotherpage");
//   //   }, 0);
//   // }

//   console.log(`is the user logged in: ${loggedIn}`);
//   return (
//        <form>
//         <TextField
//           onChange={(e) => setUsername(e.target.value)}
//           variant="outlined"
//           color="primary"
//           margin="normal"
//           required
//           id="username"
//           name="username"
//           autoComplete="username"
//         />
//         <TextField
//           onChange={(e) => setPassword(e.target.value)}
//           variant="outlined"
//           color="primary"
//           margin="normal"
//           required
//           id="password"
//           name="password"
//           autoComplete="current-password"
//         />

//         <Button onClick={onSubmit}> Login </Button>
//       </form>
//   );
// };

// Signup form from MUI template

// <ThemeProvider theme={theme}>
//   <Container component="main" maxWidth="xs">
//     <CssBaseline />
//     <Box
//       sx={{
//         marginTop: 8,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//         {/* <LockOutlinedIcon /> */}
//       </Avatar>
//       <Typography component="h1" variant="h5">
//         Sign in
//       </Typography>
//       <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
//         <TextField
//         onChange={(e) => setUsername(e.target.value)}
//           margin="normal"
//           required
//           fullWidth
//           id="username"
//           label="username"
//           name="username"
//           autoComplete="username"
//           autoFocus
//         />
//         <TextField
//         onChange={(e) => setPassword(e.target.value)}
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//         />
//         <FormControlLabel
//           control={<Checkbox value="remember" color="primary" />}
//           label="Remember me"
//         />
//         <Button
//         onClick={onSubmit}
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Sign In
//         </Button>
//         <Grid container>
//           <Grid item xs>
//             <Link href="#" variant="body2">
//               Forgot password?
//             </Link>
//           </Grid>
//           <Grid item>
//             <Link href="#" variant="body2">
//               {"Don't have an account? Sign Up"}
//             </Link>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//     {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
//   </Container>
// </ThemeProvider>
