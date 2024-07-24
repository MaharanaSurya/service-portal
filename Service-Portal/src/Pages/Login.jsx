import React from "react";
import { Box, TextField, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container
        sx={{
          height: "76vh",
          margin: "auto",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

        }}
      >
        <Box
          sx={{
            height: "460px",
            width: "370px",
            bgcolor: "#e3ffff",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "20px",
            gap: "30px",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "700" }}>Login Form</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "700" }}>User Name :</Typography>
            <TextField size="small" />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "700" }}>Password :</Typography>
            <TextField size="small" />
          </Box>
          <Button variant="contained">Login</Button>
          <Box>
            Don't have Account?{" "}
            <span
              style={{ color: "#005ce6", cursor: "pointer" }}
              onClick={() => {
                navigate("/createaccount");
              }}
            >
              {" "}
              Create an account
            </span>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Login;
