import React from 'react';
import { ThemeProvider } from 'react-native-elements/src/index';
import OverlayComponent from './OverlayComponent';

const OverlayComponentContainer = props => (
  <ThemeProvider theme={styles}>
    <OverlayComponent {...props} />
  </ThemeProvider>
);

const styles = {

};

export default OverlayComponentContainer;
