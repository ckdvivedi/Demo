import { Platform } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const checkNetworkConnection = () => {
  if (Platform.OS === 'ios') {
    return new Promise((resolve) => {
      const connectionHandler = (connectionInfo) => {
        NetInfo.removeEventListener('connectionChange', connectionHandler);

        resolve(connectionInfo);
      };

      NetInfo.addEventListener('connectionChange', connectionHandler);
    });
  }
  return NetInfo.getConnectionInfo();
};

const isConnected = () => new Promise((resolve, reject) => {
  NetInfo.isConnected.fetch().then((connected) => {
    resolve(connected);
  }).catch((err) => {
    reject(err);
  });
});

export { checkNetworkConnection, isConnected };
