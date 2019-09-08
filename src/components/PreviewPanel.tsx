import React from 'react';
import { Consumer } from '@storybook/api';
import { Channel } from '@storybook/channels';
import { Grommet, Box, BoxProps, GrommetProps } from 'grommet';
import { stateMapper } from '../utils/stateMapper';
import { EVENTS } from '../constants';

interface PreviewPanelProps {
  theme: string,
  themes: object,
  boxProps: BoxProps,
  grommetProps: GrommetProps,
  channel: Channel,
  children: React.ReactNode,
}

export const PreviewPanel = ({ children, themes, theme, channel, boxProps, grommetProps }: PreviewPanelProps) => {
  React.useEffect(() => {
    channel.emit(EVENTS.INIT, { themes, theme });
  }, []);
  return (
    <Consumer filter={stateMapper}>
      {({ selected }: ReturnType<typeof stateMapper>) => (
        <Grommet theme={themes[selected || theme]} {...grommetProps}>
          <Box {...boxProps}>
            {children}
          </Box>  
        </Grommet>
      )}
    </Consumer>    
  );    
};
