'use client'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack'
import CustomMenu from './menu';
import { OpenMenu } from '@/redux/actions/MenuActions';
import {useDispatch} from 'react-redux';
import {Avatar, Container, useTheme} from '@mui/material'
import Link from 'next/link';
import styles from './styles.module.css';

import { useEffect, useState } from 'react';
import { socialLinks } from '@/lib/data/initialStates';
import { WhatsAppIconButton } from '../utils/buttons';
import Image from 'next/image';

export default function NavBar() {

  const dispatch = useDispatch();
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;
      if (yPos > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1}}>

      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 ,position:'fixed',right:10,bottom:20,zIndex:100,display:{xs:'block', md:'none'}}}
        onClick={() => dispatch(OpenMenu())}
      >
        <MenuIcon sx={{fontSize:'3rem'}} color='secondary.contrastText' />
      </IconButton>

      <AppBar position="fixed" 
        sx={{ display:'flex',justifyContent:'center',height:80,
        transition:'all',animationDuration:100,backgroundColor: isScrolled ? theme.palette.blackMask.light : theme.palette.blackMask.light
        }}
      >
        <Container>
          <Toolbar>
            <Link href='/' className={styles.a}>
              <Stack direction='row' gap={2} alignItems='center'>
                <Avatar sx={{height:40,width:40}} >
                      <Image
                          src={'/img/Profile/profile.png'}
                          height={80}
                          width={80}
                          alt='Foto de Perfil'
                          aria-label='foto de perfil'
                          className={styles.avatar}
                          // sx={{height:{xs:100,sm:300},width:{xs:100,sm:300}}}
                      />
                    </Avatar>
                <Typography
                  variant="h6"
                  color={'secondary'}
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'flex', sm: 'none' },color:theme.palette.secondary.light}}
                >
                  Sebastian
                </Typography>

                <Typography
                  variant="h6"
                  color={'secondary'}
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'flex' },color:theme.palette.secondary.light}}
                >
                  Sebastian Ortiz
                </Typography>
              </Stack>
            </Link>

            <Box sx={{ flexGrow: 1 }} />

            <Stack direction={'row'} alignItems={'center'}>
              <WhatsAppIconButton/>
              {
                socialLinks.map(({ariaLabel,icon,href},key)=>(
                  <IconButton 
                    key={key}
                    size="large" 
                    aria-label={ariaLabel}
                    type='href'
                    target='_blank'
                    href={href}
                    sx={{color:theme.palette.secondary.light}}
                    >
                        {icon}
                  </IconButton>
                ))
              }
            </Stack>
            <CustomMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}