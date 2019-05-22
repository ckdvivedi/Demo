import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import SignUp from './SignUp';

const SignUpContainer = props => (
  <ThemeProvider theme={styles}>
    <SignUp {...props} />
  </ThemeProvider>
);

const styles = {

};

export default SignUpContainer;
