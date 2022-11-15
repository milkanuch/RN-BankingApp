import React from 'react';

import HomeSubtitle from '../HomeSubtitle/HomeSubtitle';

import FrequentlyUsedButtons from './FrequentlyUsedButtons/FrequentlyUsedButtons';

import {
  onPress,
  parametersIconName,
  title,
} from './frequentlyUsedFunctions.settings';

const FrequentlyUsedFunctions = () => {
  return (
    <>
      <HomeSubtitle
        title={title}
        iconName={parametersIconName}
        onPress={onPress}
      />
      <FrequentlyUsedButtons />
    </>
  );
};

export default FrequentlyUsedFunctions;
