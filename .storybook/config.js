import { configure, addDecorator } from '@storybook/react';
import { withGrommet } from '../dist/';
import { grommet, dark } from 'grommet';

addDecorator(withGrommet({theme: 'grommet', themes: { grommet, dark }}));

function loadStories() {
  ;
}

configure(loadStories, module);