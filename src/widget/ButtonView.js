import React from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import theme from '../../theme';

const ButtonView = ({ title, ...props }) => (
  <ThemeProvider theme={styles}>
    <Button
      title={title && theme.string.translate(title).toUpperCase()}
      {...props}
    />
  </ThemeProvider>
);

const styles = {
  Button: {
    containerStyle: {
      marginTop: theme.size.margin_large,
      marginHorizontal: theme.size.margin_v_large
    },
    buttonStyle: {
      height: theme.size.button_height,
      backgroundColor: theme.color.primary,
    },
    titleStyle: {
      fontSize: theme.size.text_size_v_medium,
      fontFamily: theme.font.bold,
      color: theme.color.buttonTitlePrimary
    }
  }
};

export default ButtonView;
