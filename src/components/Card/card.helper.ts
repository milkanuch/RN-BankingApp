import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

export const copyTextToClipboard = (data: string) => {
  Clipboard.setString(data);
};

export const showSnackBar = (message: string) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
  });
};
