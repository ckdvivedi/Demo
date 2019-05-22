import React from 'react';
import { Navigation } from 'react-native-navigation';
import { HOME_SCREEN, DASHBOARD_SCREEN } from './Types';
import { Home, Dashboard } from '../../screens';
import { Provider } from '../../redux';


function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider>
        <Component
          {...props}
        />
      </Provider>
    );

    return <EnhancedComponent />;
  };
}

const registerScreens = () => {
  Navigation.registerComponent(HOME_SCREEN, () => WrappedComponent(Home));
  Navigation.registerComponent(DASHBOARD_SCREEN, () => WrappedComponent(Dashboard));
};

export default registerScreens;
