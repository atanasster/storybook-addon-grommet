import React from 'react';
import { BoxProps, GrommetProps } from 'grommet';
import addons, { makeDecorator, StoryContext, StoryGetter } from '@storybook/addons';

import { PreviewPanel } from './components/PreviewPanel';

interface withGrommetProps {
  themes: object,
  theme?: string,
  boxProps?: BoxProps,
  grommetProps?: GrommetProps,
}

export const withGrommet = ({ theme, themes, boxProps, grommetProps }: withGrommetProps) => {
  return makeDecorator({
    name: 'withGrommet',
    parameterName: 'grommet',
    wrapper: (getStory: StoryGetter, context: StoryContext) => (
      <PreviewPanel
        boxProps={boxProps}
        grommetProps={grommetProps}
        channel={addons.getChannel()}
        themes={themes}
        theme={theme}
      >
        {getStory(context)}
      </PreviewPanel>  
    ),
  });
}

if (module && (module as any).hot && (module as any).hot.decline) {
  (module as any).hot.decline();
}
