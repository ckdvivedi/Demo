import React from 'react';
import { Text } from 'react-native-elements';
import theme from '../../theme';

const TextView = ({
  children, translate = true, value = '', ...props
}) => (
  <Text
    {...props}
  >
    {children && (translate ? theme.string.translate(children) : children)}
    {value}
  </Text>
);


export default TextView;
