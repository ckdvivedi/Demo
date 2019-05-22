import React, { PureComponent } from 'react';

import AppStoreProvider from './AppStoreProvider';
import ChildProvider from './ChildProvider';


class Provider extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <AppStoreProvider>
        <ChildProvider>
          {children}
        </ChildProvider>
      </AppStoreProvider>
    );
  }
}

export default Provider;
