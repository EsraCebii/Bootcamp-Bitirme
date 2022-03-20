import { Box, Button, TextField, Alert } from "@mui/material";
import { useFormik } from "formik";
import React, { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/actions/UserActions";
import { AppState } from "../../store";
import Typography from '@mui/material/Typography';


const Register = () => {
  const navigate = useNavigate()
  const { data, loading, error } = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      const form = {
        username: values.username,
        password: values.password,
        passwordConfirm: values.passwordConfirm,
      };
      console.log(values);
      
      dispatch(register(form));
    },
  });
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/login");
    }
  }, [data]);
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
        Register
      </Typography>
      {error && (
        <Alert
          sx={{ marginBottom: 2 }}
          severity="error"
        >
          {error}
        </Alert>
      )}
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="password"
          fullWidth
          label="name"
          name="username"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.username}
          sx={{ marginY: 1 }}
        />
        <TextField
          id="password"
          fullWidth
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          sx={{ marginY: 1 }}
        />
        <TextField
          id="password"
          fullWidth
          label="Password confirm"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
          name="passwordConfirm"
          variant="outlined"
          sx={{ marginY: 1 }}
        />
        <Button fullWidth variant="contained" sx={{ marginY: 1 }} type="submit">
          Kayıt Ol
        </Button>
      </form>
      <Link to="/login">
      <Typography variant="h6" gutterBottom component="div">
       
      Do you already have an account ?
      </Typography></Link>
    </Box>
  );
};

export default Register;
