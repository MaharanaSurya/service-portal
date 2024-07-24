import React, {  useEffect, useState } from "react";
import { Box, TextField, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AccCreate } from "../ReduxToolkit/Slices/CreateAcc";
import axios from "axios" 


const CreateAccount = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, updateUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const collectData = (e) => {
    const { name, value } = e.target;
    updateUserDetails({ ...userDetails, [name]: value });
  };

  const submitform=()=>{
    dispatch(AccCreate(userDetails));
    navigate("/");
  }

  var data = useSelector(state=>state.userAcc);
  useEffect(()=>{
    const postDate = async()=>{
      const responce =  await axios.post("http://localhost:3000/api/auth/user/signup",data);
}
if(data){
  postDate();
}

},[data]);

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
            margin: "auto",
            height: "490px",
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
            <Typography sx={{ fontWeight: "700" }}>
              Crearte New Account
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "700" }}>User Name :</Typography>
            <TextField
              size="small"
              name="userName"
              value={userDetails.userName}
              onChange={collectData}
            />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "700" }}>Email :</Typography>
            <TextField
              size="small"
              name="email"
              value={userDetails.email}
              onChange={collectData}
            />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "700" }}>Password :</Typography>
            <TextField
              size="small"
              name="password"
              value={userDetails.password}
              onChange={collectData}
            />
          </Box>
          <Button variant="contained" onClick={submitform}>
            Create
          </Button>
          <Box>
            Already have Account?{" "}
            <span
              style={{ color: "#005ce6", cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              login
            </span>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CreateAccount;
