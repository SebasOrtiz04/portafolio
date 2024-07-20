import { Avatar, Card, CardContent, CardHeader, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function ItemCard({title,subtitle,list = null}) {
  
    const theme = useTheme();
  
    return (
    <Card sx={{marginY:2.5}}>
        <CardHeader  
        title={title}
        subheader={ subtitle ? subtitle : ''}
        />

        <CardContent>
            <List>
                {
                    list && 
                    list.map(({title,content,price,avatar,avatarColor = theme.palette.primary.main},key)=>(
                        <ListItem key={key}>
                            <ListItemIcon>
                                <Avatar sx={{backgroundColor:avatarColor}}>
                                    {avatar}
                                </Avatar>
                            </ListItemIcon>
                            <ListItemText 
                            primary={title} 
                            secondary={content}
                            // primaryTypographyProps={{fontSize:20}}
                            // secondaryTypographyProps={{fontSize:20,fontWeight:'bold'}}
                            />
                        </ListItem>
                    ))
                }
            </List>
        </CardContent>
    </Card>
  )
}
