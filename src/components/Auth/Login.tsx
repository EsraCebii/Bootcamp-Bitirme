import { Alert, Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import  { FC, useState, useEffect } from "react";
import {  Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../types/user";
import { AppState } from "../../store";
import { login } from "../../store/actions/UserActions";
import Typography from '@mui/material/Typography';



const Login = () => {
  const navigate = useNavigate()

const { data, loading, error } = useSelector((state: AppState) => state.user);
const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      const form = {
        username: values.username,
        password: values.password,
      };
      console.log(values);
      dispatch(login(form));
      navigate("/boards");
      
    },
  });

  return (
    <Box
    sx={{
      typography: "body1",
      backgroundColor: "black",
      marginX: "auto",
      marginY: 10,
      width: "500px",
    }}
  >
         <Typography variant="h4" gutterBottom component="div">
        Login
      </Typography>
      {error && (
        <Alert
          sx={{ marginBottom: 2 }}
          severity="error"
        >
          {error}
        </Alert>
      )}
      {data.username && (
        <Alert
          sx={{ marginBottom: 2 }}
          severity="success"
        >
          {data.username} successfully logged in!
          <br />
          <Link to="/boards">Go to Scrumboard App </Link>
        </Alert>
      )}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="username"
          fullWidth
          label="Username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          variant="outlined"
          sx={{ marginY: 1 }}
        />
        <TextField
          id="password"
          fullWidth
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          variant="outlined"
          sx={{ marginY: 1 }}
        />
        <Button fullWidth variant="contained" sx={{ marginY: 1 }} type="submit">
          Giriş Yap
        </Button>
      </form>
      <Link to="/">
      <Typography variant="h6" gutterBottom component="div">
       
       Back to Register
       </Typography></Link>
    </Box>
  );
};

export default Login;