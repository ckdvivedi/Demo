import React from 'react';
import { ThemeProvider } from 'react-native-elements/src/index';
import Login from './Login';

const LoginContainer = props => (
  <ThemeProvider theme={styles}>
    <Login {...props} />
  </ThemeProvider>
);

const styles = {

};

export default LoginContainer;
