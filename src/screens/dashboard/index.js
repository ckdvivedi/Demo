import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import Dashboard from './Dashboard';

const DashboardContainer = props => (
  <ThemeProvider theme={styles}>
    <Dashboard {...props} />
  </ThemeProvider>
);

const styles = {

};

export default DashboardContainer;
