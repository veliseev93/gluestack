import StorybookUIRoot from './.ondevice/Storybook';

import React from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './assets/fonts';

export default () => {
  const [loaded] = useFonts(fonts);

  if (!loaded) return null;
  return <StorybookUIRoot />;
};
