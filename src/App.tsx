import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import BoardApp from "./components/Home/BoardApp";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Board from "./components/Board/Board";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import NewBoard from "./components/Board/NewBoard";
import PrivateRoute from "./components/PrivateRoute";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  const [token, setToken] = useState<any>();

  const getToken = () => {
    let token = localStorage.getItem("token");
    return token;
  };

  useEffect(() => {
    setToken(getToken());
  }, []);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <PrivateRoute  path="/boards"  component={BoardApp} />
          <PrivateRoute  path="/board/:id"  component={Board} />
          <PrivateRoute  path="/newBoard"  component={NewBoard} />     
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
