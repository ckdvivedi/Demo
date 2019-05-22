import React from 'react';
import { ThemeProvider } from 'react-native-elements/src/index';
import CalloutComponent from './CalloutComponent';

const CalloutComponentContainer = props => (
  <ThemeProvider theme={styles}>
    <CalloutComponent {...props} />
  </ThemeProvider>
);

const styles = {
  Text: {

  }
};

export default CalloutComponentContainer;
