// import * as React from 'react';
import React, { useState } from "react";
import reactDOM from "react-dom"
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export const Login = () => {
  // State setters
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit post called");

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
        console.log(`Error occured in onSubmit: ${err}`);
      });
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('username'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
            onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
            onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            onClick={onSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}


// import React, { useState } from "react";
// import reactDOM from "react-dom"
// import axios from "axios";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";


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






