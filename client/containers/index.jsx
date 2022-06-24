import React, { useState } from "react";
import reactDOM from "react-dom"
import "../app.css";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Login } from "../components/Login.jsx";
import { Signup } from "../components/Signup.jsx";

export const SignInOutContainer = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width: 330,  margin: "20px auto"}

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Paper elevation={20} style={paperStyle}>
      <Tabs
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup />
      </TabPanel>
    </Paper>
  );
};
