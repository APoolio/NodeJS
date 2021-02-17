/*jshint esversion: 6 */ 

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';


import { searchStock } from '../services/stockServices';

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
      color: "#fff",
      width: '100%'
    },
    iconButton: {
      padding: 10,
      color: "#fff"
    },
  }));


const handleSubmitT = (event) => 
{
  event.preventDefault();
  
  console.log("HANDLESUBMIT");
  searchStock("TSLA").then(response => 
    {
      console.log("TEST: " + response);
    });
};

export default function Search() {
    //const theme = useTheme();
    const classes = useStyles();
  
    return (
        <Paper component="form" elevation={7} className={classes.root}>
          <form onSubmit={handleSubmitT} style={{width: '100%'}}>
              <InputBase
                className={classes.input}
                placeholder="Add a Stock"
                autoFocus={true}
                fullWidth={true}
                width='100%'
                //onChange={handleChange}
                inputProps={{ 'aria-label': 'search google maps', width: '100%' }}>  
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          </InputBase>
          </form>
        </Paper>
      );
  }