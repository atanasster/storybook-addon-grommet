import React from 'react';
import { Box, Heading } from 'grommet';

export default {
  title: 'controls/Heading',
  component: Heading,
};

export const main = () => (
  <Box basis='medium' align='center' background='accent-2' border={{ side: 'all', size: 'xlarge'}}>
    <Heading>
      accent-2
    </Heading>  
  </Box>
);

export const level1 = () => (
  <Box basis='medium' align='center' background='brand' border={{ side: 'all', size: 'xlarge'}}>
    <Heading level={1}>
      brand
    </Heading>  
  </Box>
);

