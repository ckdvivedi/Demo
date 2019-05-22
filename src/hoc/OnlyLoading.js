import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { TextView } from '../widget';
import { isNull } from '../utils';
import theme from '../../theme';

function OnlyLoading(Component) {
  return function WithLoadingComponent({ loading, message, ...props }) {
    const emptyMessage = isNull(message);
    if (!loading || emptyMessage) return (<Component {...props} />);
    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" color={theme.color.primary} />}
        {!emptyMessage && <TextView style={styles.message} translate={false}>{message}</TextView>}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.backgroundPrimary,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    fontSize: theme.size.text_size_v_medium,
    fontFamily: theme.font.semiBold,
    color: theme.color.accent
  }
});

export default OnlyLoading;
