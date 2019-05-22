
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

class ChildProvider extends PureComponent {
  static contextTypes = {
    store: PropTypes.shape({}),
    persist: PropTypes.shape({}),
  };

  render() {
    const { children } = this.props;
    const { store, persist } = this.context;
    return (
      <Provider store={store}>
        <PersistGate persistor={persist}>
          {children}
        </PersistGate>
      </Provider>
    );
  }
}

export default ChildProvider;
