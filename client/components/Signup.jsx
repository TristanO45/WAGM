import React, { useState } from "react";
import reactDOM from "react-dom"
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


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

  // Bootleg way to reroute someone if theyre logged in
  // if (loggedIn) {
  //   setTimeout(() => {
  //     props.history.push("/someotherpage");
  //   }, 0);
  // }

  console.log(`is the user logged in: ${loggedIn}`);
  return (
       <form>
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
      </form> 
  );
};


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
