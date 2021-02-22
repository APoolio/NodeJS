import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
    },
    iconButton: {
      padding: 10,
      color: "#fff"
    },
  }));




export default function Exchange() 
{
    const classes = useStyles();

    return( 
        <Grid containe direction="row">
            <Grid item>
                
            </Grid>
        </Grid>
    );
}