import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store";
import MainLayout from "./components/layout/mainLayout/mainLayout";
import {createMuiTheme} from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'normal',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),

    }
});


function App() {
  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
        <MainLayout/>
          </ThemeProvider>
      </Provider>
  );
}

export default App;
