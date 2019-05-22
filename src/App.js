import { Navigation } from 'react-native-navigation';
import * as RNLocalize from 'react-native-localize';
import { pushScreen } from './navigation';
import theme from '../theme';

const launchApp = () => Navigation.events().registerAppLaunchedListener(() => {
  theme.string.setI18nConfig();
  RNLocalize.addEventListener('change', handleLocalizationChange);
  pushScreen();
});

const forceUpdate = () => {
  if (appLaunchedListener) appLaunchedListener.remove();
  appLaunchedListener = launchApp();
};

const handleLocalizationChange = () => {
  theme.string.setI18nConfig();
  forceUpdate();
};

let appLaunchedListener = launchApp();
