export const transferButtonTitle = 'Transfer';
export const transferButtonIcon = 'arrowup';
export const transferButtonOnPress = () => console.log('Transfer');

export const depositButtonTitle = 'Deposit';
export const depositButtonIcon = 'arrowdown';
export const depositButtonOnPress = () => console.log('Deposit');

export const detailsButtonTitle = 'Details';
export const detailsButtonIcon = 'bars';
export const detailsButtonOnPress = () => console.log('Details');

export const buttons = [
  {
    title: transferButtonTitle,
    iconName: transferButtonIcon,
    onPress: transferButtonOnPress,
  },
  {
    title: depositButtonTitle,
    iconName: depositButtonIcon,
    onPress: depositButtonOnPress,
  },
  {
    title: detailsButtonTitle,
    iconName: detailsButtonIcon,
    onPress: detailsButtonOnPress,
  },
];
