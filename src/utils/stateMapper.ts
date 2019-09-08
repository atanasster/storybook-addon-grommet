
import { Combo } from '@storybook/api';
import { PARAM_KEY } from '../constants';


export const stateMapper = ({ state }: Combo): { selected: string | null } => {
  const selected = state.addons ? (state.addons[PARAM_KEY] || null) : null;
  return { selected };
};
