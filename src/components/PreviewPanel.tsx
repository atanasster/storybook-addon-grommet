import React from 'react';
import { Grommet, Box, BoxProps, GrommetProps } from 'grommet';
import { Channel } from '@storybook/channels';
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
  const [state, setTheme] = React.useState<string>(theme);
  const onSelectTheme = (theme) => {
    setTheme(theme);
};
  React.useEffect(() => {
    channel.on(EVENTS.UPDATE, onSelectTheme);
    channel.emit(EVENTS.INIT, { themes, theme });
    return () => {
      channel.removeListener(EVENTS.UPDATE, onSelectTheme);
    }
  }, []);
  return (
    <Grommet theme={themes[state]} {...grommetProps}>
      <Box {...boxProps}>
        {children}
      </Box>  
    </Grommet>
  );    
};
