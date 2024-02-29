import { useMediaQuery, useTheme, Drawer as MuiDrawer, styled } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDrawerContext } from '../contexts/drawer-context';
import { MenuItemsList } from './MenuItemsList';
import { fetchAllFiles } from '../service/fileService'; 
import { type IMenuItem } from '../types';

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'isOpened',
})<{ isOpened: boolean }>(({ isOpened, theme }) => ({
  width: isOpened ? 240 : theme.spacing(7),
  height: '100%',
  overflow: 'auto',
  transition: isOpened
    ? theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    : theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
  '& .MuiDrawer-paper': {
    background: '#D8DCD6',
    position: 'static',
    overflowX: 'hidden'
  },
}));

export const Drawer = () => {
  const { isOpened, toggleIsOpened } = useDrawerContext();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const [data, setData] = useState<IMenuItem[] | []>([]);

  async function fetchData() {
    try {
      const result = await fetchAllFiles();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log("IS LARGE SCREEN: " + isLargeScreen)
  console.log("isOpened: " + isOpened)
  console.log("open: " + (!isLargeScreen && isOpened ? true : false))


  return (
    <StyledDrawer
      variant={isLargeScreen ? 'permanent' : 'temporary'}
      open={!isLargeScreen && isOpened ? true : false}
      onClose={() => toggleIsOpened(!isOpened)}
      isOpened={isOpened}
    >
      <MenuItemsList items={data}/>
    </StyledDrawer>
  );
};