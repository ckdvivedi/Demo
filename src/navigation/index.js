import { Navigation } from 'react-native-navigation';
import { HOME_SCREEN, DASHBOARD_SCREEN } from './screens/Types';
import registerScreens from './screens';
import theme from '../../theme';

registerScreens();

const pushScreen = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: theme.color.primaryDark,
      style: 'light'
    },
    topBar: {
      title: {
        color: theme.color.titleTopBar,
        fontFamily: theme.font.semiBold,
        fontSize: theme.size.text_size_v_medium,
        alignment: 'fill'
      },
      subtitle: {
        color: theme.color.titleTopBar,
        fontFamily: theme.font.semiBold,
        fontSize: theme.size.text_size_v_small,
        alignment: 'fill'
      },
      backButton: {
        color: theme.color.titleTopBar
      },
      background: {
        clipToBounds: true,
        color: theme.color.primary
      },
      rightButtonColor: theme.color.titleTopBar
    }
  });

  pushLoginScreen();
};

const pushLoginScreen = (logout = false) => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'home',
        children: [
          {
            component: {
              name: HOME_SCREEN,
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true
                }
              },
              passProps: {
                logout
              }
            },
          }
        ]
      }
    }
  });
};


const pushDashboardScreen = (componentId, subtitle) => {
  Navigation.setStackRoot(componentId, {
    stack: {
      id: 'home',
      children: [
        {
          component: {
            name: DASHBOARD_SCREEN,
            options: {
              topBar: {
                title: {
                  text: theme.string.translate('dashboard')
                },
                subtitle: {
                  text: subtitle
                },
                rightButtons: [
                  {
                    id: 'logout',
                    text: theme.string.translate('sign_out')
                  }
                ]
              }
            }
          },
        }
      ]
    }
  });
};

export {
  pushScreen, pushDashboardScreen, pushLoginScreen
};
