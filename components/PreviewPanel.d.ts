import React from 'react';
import { BoxProps, GrommetProps } from 'grommet';
import { Channel } from '@storybook/channels';
interface withGrommetProps {
    theme: string;
    themes: object;
    boxProps: BoxProps;
    grommetProps: GrommetProps;
    channel: Channel;
    children: React.ReactNode;
}
export declare const PreviewPanel: ({ children, themes, theme, channel, boxProps, grommetProps }: withGrommetProps) => JSX.Element;
export {};
