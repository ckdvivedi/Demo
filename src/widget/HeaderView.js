import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Header, ThemeProvider } from 'react-native-elements';
import theme from '../../theme';

const { width, height } = theme.size;
const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const HeaderView = props => (
  <ThemeProvider theme={styles}>
    <Header
      {...props}
    />
  </ThemeProvider>
);

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX = (width === X_WIDTH && height === X_HEIGHT)
    || (width === XSMAX_WIDTH && height === XSMAX_HEIGHT);
}

function getStatusBarHeight(skipAndroid: boolean = false): number {
  return Platform.select({
    ios: isIPhoneX ? 44 : 20,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0
  });
}

const styles = {
  Header: {
    backgroundColor: theme.color.primary,
    placement: 'left',
    containerStyle: {
      ...Platform.select({
        android: { paddingTop: getStatusBarHeight(true), height: 56 },
      }),
      backgroundColor: theme.color.primary,
      borderBottomWidth: 0
    },
    statusBarProps: {
      translucent: false,
      backgroundColor: theme.color.primaryDark,
      barStyle: 'light-content'
    },
    centerComponent: {
      style: {
        fontSize: theme.size.text_size_v_large,
        fontFamily: theme.font.bold,
        color: theme.color.titleTopBar
      }
    },
    leftComponent: {
      color: theme.color.titleTopBar,
      underlayColor: theme.color.transparent,
    },
    rightComponent: {
      color: theme.color.titleTopBar,
      underlayColor: theme.color.transparent,
    }
  },
  ButtonGroup: {
    disableSelected: true,
    containerStyle: {
      width: theme.size.size_100,
      height: theme.size.size_36
    },
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

export default HeaderView;
