import Snackbar from 'react-native-snackbar';
import theme from '../../../theme';

const showMessage = (title) => {
  Snackbar.show({
    title,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: theme.color.primary
  });
};

export {
  showMessage
};
