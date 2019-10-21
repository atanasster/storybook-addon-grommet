import React from 'react';
import { Channel } from '@storybook/channels';
import { Grommet, Box, BoxProps, GrommetProps } from 'grommet';
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
  const [selected, setSelected] = React.useState<string>(theme);
 
  React.useEffect(() => {
    channel.emit(EVENTS.INIT, { themes, theme });
  }, []);

  const onUpdateTheme = (newTheme) => {
    setSelected(newTheme)
  }  

  React.useEffect(() => {
    channel.on(EVENTS.UPDATE, onUpdateTheme);
    return () => {
      channel.removeListener(EVENTS.UPDATE, onUpdateTheme);
    }
  }, []);  
  return (
    <Grommet theme={themes[selected]} {...grommetProps}>
      <Box {...boxProps}>
        {children}
      </Box>  
    </Grommet>
  );    
};
