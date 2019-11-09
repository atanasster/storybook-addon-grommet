import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID } from './constants';
import { ThemeSelector } from './components/ThemeSelector';

addons.register(ADDON_ID, api => {
  addons.add(ADDON_ID, {
    title: 'Grommet',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => (
      <ThemeSelector
        channel={api.getChannel()}
        api={api}
      />
    ),
  });
});
