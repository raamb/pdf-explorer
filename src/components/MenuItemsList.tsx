import { List, Grid } from '@mui/material';

import { MenuItem } from './MenuItem';
import { type IMenuItem } from '../types';

export const MenuItemsList = ({ items = [] }: { items?: IMenuItem[] }) => {

  if (!items.length) return null;

  return (
    <Grid>
      <List sx={{ p: 0 }}>
        {items.map((item ) => (
          <MenuItem item = {item}/>
        ))}
      </List>
    </Grid>
  );
};