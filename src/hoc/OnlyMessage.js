import React from 'react';
import { TextView } from '../widget';
import { isNull } from '../utils';

function OnlyMessage(Component) {
  return function WithMessageComponent({ loading, message, ...props }) {
    const emptyMessage = isNull(message);
    if (!loading || emptyMessage) return (<Component {...props} />);
    return (<TextView translate={false}>{message}</TextView>);
  };
}
export default OnlyMessage;
