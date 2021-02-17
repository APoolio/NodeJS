/*jshint esversion: 6 */ 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


import CustomListItem from './CustomListItem';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '700px',
      backgroundColor: "#272c34",
      borderRadius: "5px",
    },
  }));

export default function Watchlist() 
{
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {/* ListItem */}
            <CustomListItem/>
            
            <Divider variant="inset" component="li" />
        </List>
    );
}
