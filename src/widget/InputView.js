import React, { Component } from 'react';
import { Input, ThemeProvider } from 'react-native-elements';
import theme from '../../theme';

class InputView extends Component {
  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  clearText() {
    this.input.clearText();
  }

  shake() {
    this.input.shake();
  }

  render() {
    const { label, placeholder, errorMessage } = this.props;
    return (
      <ThemeProvider theme={styles}>
        <Input
          ref={(input) => {
            this.input = input;
          }}
          shake={!!errorMessage}
          returnKeyType="next"
          {...this.props}
          label={label && theme.string.translate(label)}
          placeholder={placeholder && theme.string.translate(placeholder)}
        />
      </ThemeProvider>
    );
  }
}

const styles = {
  Input: {
    placeholderTextColor: theme.color.textInputPrimary,
    containerStyle: {
      width: -1,
      marginTop: theme.size.margin_v_large,
      marginHorizontal: theme.size.margin_v_large,
    },
    inputContainerStyle: {
      borderColor: theme.color.textInputPrimary,
      borderWidth: theme.size.size_1,
    },
    inputStyle: {
      color: theme.color.textInputPrimary,
      fontSize: theme.size.text_size_v_small,
      fontFamily: theme.font.regular,
    },
    labelStyle: {
      color: theme.color.textInputPrimary,
      fontSize: theme.size.text_size_v_small,
      fontFamily: theme.font.regular,
    },
    errorStyle: {
      fontSize: theme.size.text_size_vv_small,
      fontFamily: theme.font.regular,
      color: theme.color.error
    },
    leftIcon: {
      color: theme.color.textInputPrimary
    }
  }
};


export default InputView;
