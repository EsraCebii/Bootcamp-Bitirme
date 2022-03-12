import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth/Auth";
import BoardApp from "./components/Home/BoardApp";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Board from "./components/Board/Board";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Routes>
        <Route path="/" element={<Auth /> } />
        <Route path="/boards" element={<BoardApp />} />
        <Route path="/addBoard" element={<Board />} />
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
