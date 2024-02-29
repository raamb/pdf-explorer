import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import { type IMenuItem } from '../types';
type Props = {
  item: IMenuItem;
};

export const MenuItem: React.FC<Props> = ({item}) => {
// export const MenuItem = (item : IMenuItem) => {

  async function onClick() {
    console.log("CLICK " + item.file_link)
  }

  const link = (
    <ListItem
      button
      sx={{
        '&.Mui-selected': {
          backgroundColor: 'primary.dark',
          color: 'common.white',
        },
        '&:hover': {
          backgroundColor: 'primary.light',
          color: 'common.white',
        },
      }}
      onClick={onClick}
    >
      <ListItemIcon
        sx={[
          { minWidth: 'auto' },
          (theme) => ({
            paddingRight: theme.spacing(2),
          }),
        ]}
      >
        <PictureAsPdfIcon sx={{ color: 'secondary.dark' }} />
      </ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItem>
  );

  return link;
};