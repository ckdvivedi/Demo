// @flow

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StoreData } from '../store';


class AppStoreProvider extends PureComponent {
  static childContextTypes = {
    store: PropTypes.shape({}),
    persist: PropTypes.shape({}),

  };

  getChildContext() {
    return {
      ...StoreData()
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  }
}

export default AppStoreProvider;
