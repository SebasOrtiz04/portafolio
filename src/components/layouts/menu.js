'use client'
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import {useSelector, useDispatch} from 'react-redux'
import { CloseMenu, OpenMenu } from '@/redux/actions/MenuActions';
import { menuList } from '@/lib/data/initialStates/index';
import { useRouter, usePathname  } from 'next/navigation';
import {useTheme} from '@mui/material';

export default function CustomMenu() {

  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname ();
  const theme = useTheme();


  const {open} = useSelector(state => state.menu)

  useEffect(()=>{
    if(!open) return;
    dispatch(CloseMenu());
  },[pathName])

  return (
    <SwipeableDrawer
    anchor='right'
    open={open}
    onClose={() => dispatch(CloseMenu())}
    onOpen={() => dispatch(OpenMenu())}
    >
    <Box
      sx={{ width: 'min(350px, 80vw)'}}
      role="presentation"
    >
        {menuList.map(({section_name,list}, index) => (
          <List
          key={index}
          subheader={
            <ListSubheader component="div">
              {section_name}
            </ListSubheader>
          }
          >
            {
              list.map(({label,icon,link},key)=>(
                <ListItem key={`${index}${key}`} disablePadding>
                {/* <Link href={link} className={styles.a__menu}> */}
                  <ListItemButton onClick={() => router.push(link)}>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                {/* </Link> */}
              </ListItem>
              ))
            }
          </List>
        ))}

    </Box>
    </SwipeableDrawer>
  );
}