/*jshint esversion: 6 */ 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 700,
      backgroundColor: "#272c34",
      color: "#fff"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: "#fff"
    },
    iconButton: {
      padding: 10,
      color: "#fff"
    },
  }));

export default function Search() {
    //const theme = useTheme();
    const classes = useStyles();
  
    return (
        <Paper component="form" elevation={7} className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Add a Stock"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      );
  }