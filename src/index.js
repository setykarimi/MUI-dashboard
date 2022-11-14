import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@material-ui/core';


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    primary: {
      main: "#CCC"
    }
  },
  typography: {
    myVariant: {
      color: "#fefefe",
      fontSize: "6rem"
    }
  }
})
root.render(
<ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
);

