import React from 'react';
import { Box, Heading } from 'grommet';

export default {
  title: 'controls/Heading',
  component: Heading,
};

export const main = () => (
  <Box basis='medium' align='center' background='accent-1'>
    <Heading>
      Test grommet
    </Heading>  
  </Box>
);
