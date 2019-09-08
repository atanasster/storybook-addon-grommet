import React, { FunctionComponent } from 'react';
import { Consumer, API } from '@storybook/api';
import { Channel }  from '@storybook/channels';
import { normalizeColor } from 'grommet/utils/colors';
import { base } from 'grommet/themes/base';
import { WithTooltip, TooltipLinkList, ListItem } from '@storybook/design-system';
import styled from 'styled-components';
import { stateMapper } from '../utils/stateMapper';
import { EVENTS, PARAM_KEY } from '../constants';

const ThemeIcon = styled.span`
  height: 1.2rem;
  width: 1.2rem;
  display: block;
  ${props => props.theme && props.theme.global && `
    background-color: ${normalizeColor(
      props.theme.global.colors.brand || base.global.colors.brand,
      props.theme
    )};
    border: ${`2px solid ${normalizeColor(
      props.theme.global.colors.text || base.global.colors.text,
      props.theme
    )}`};

  `}  
`;


interface ThemeSelectorProps {
  channel: Channel,
  api: API,
}
export const ThemeSelector: FunctionComponent<ThemeSelectorProps> = ({ channel, api }) => {
  const [defaultTheme, setDefaultTheme] = React.useState<string | null>(null);
  const [themes, setThemes] = React.useState<object>({});
  const [expanded, setExpanded] = React.useState(false);

  const onInitThemes = ({ themes, theme }) => {
    setThemes(themes);
    setDefaultTheme(theme);
  }  
  React.useEffect(() => {
    channel.on(EVENTS.INIT, onInitThemes);
    return () => {
      channel.removeListener(EVENTS.INIT, onInitThemes);
    }
  }, []);
  
  const onChange = (selected) => {
    if (typeof selected === 'string') {
      api.setAddonState<string>(PARAM_KEY, selected);
    }
    api.emit(EVENTS.UPDATE, selected);
  };
  return (
    <Consumer filter={stateMapper}>
      {({ selected }: ReturnType<typeof stateMapper>) => (
        <WithTooltip
          placement="top"
          trigger="click"
          tooltipShown={expanded}
          onVisibilityChange={s => setExpanded(s)}
          tooltip={<TooltipLinkList links={Object.keys(themes)
            .map(value => ({
              id: value,
              title: value,
              onClick: () => onChange(value),
              right: <ThemeIcon theme={themes[value]} />,
            }))} />}
          closeOnClick
        >
          <ListItem
            title=''
            left={selected ? selected : (defaultTheme || 'theme...')}
            right={<ThemeIcon theme={themes[selected]} />}
          />
        </WithTooltip>
      )}
    </Consumer>
  );
};
