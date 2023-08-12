import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login({ setLoggedIn }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "8px",
        }}
      >
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <Button
          variant="contained"
          sx={{ marginTop: "5px" }}
          onClick={() => setLoggedIn(true)}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
