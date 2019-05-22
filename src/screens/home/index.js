import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import Home from './Home';
import theme from '../../../theme';

const HomeContainer = props => (
  <ThemeProvider theme={styles}>
    <Home {...props} />
  </ThemeProvider>
);

const styles = {
  Image: {
    style: {
      width: '50%',
      alignSelf: 'center'
    },
    containerStyle: {
      width: theme.size.width,
      height: '30%',
      justifyContent: 'center',
    },
    source: theme.image.logo,
    resizeMode: 'center'
  },
  ButtonGroup: {
    disableSelected: true,
    selectedButtonStyle: {
      backgroundColor: theme.color.primary
    },
    textStyle: {
      marginTop: 0,
      alignSelf: 'center',
      textDecorationLine: 'none',
      fontSize: theme.size.text_size_v_small,
      fontFamily: theme.font.bold,
      color: theme.color.primary
    },
    selectedTextStyle: {
      fontSize: theme.size.text_size_v_small,
      fontFamily: theme.font.semiBold,
      color: theme.color.textLoginPrimary
    },
  }
};

export default HomeContainer;
