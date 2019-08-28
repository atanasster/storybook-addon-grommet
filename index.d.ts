import { BoxProps, GrommetProps } from 'grommet';
interface withGrommetProps {
    themes: object;
    theme?: string;
    boxProps?: BoxProps;
    grommetProps?: GrommetProps;
}
export declare const withGrommet: ({ theme, themes, boxProps, grommetProps }: withGrommetProps) => (...args: any) => any;
export {};
