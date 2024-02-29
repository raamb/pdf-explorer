import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { type IMenuItem } from '../types';
import { useFileReaderContext } from "../contexts/file-reader-context";

type Props = {
  item: IMenuItem;
};

export const MenuItem: React.FC<Props> = ({item}) => {
  const { fileLink, setFileLink } = useFileReaderContext();
  
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
      onClick={() => setFileLink(item.file_link)}
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