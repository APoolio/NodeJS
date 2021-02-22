import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { getCurrentDate } from '../utils/date';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: '100%', 
        width: '100%',
        display: 'flex',
        backgroundColor: "#282c34",
        maxHeight: '30vh',
        background: 'rgb(23,196,182)',
        background: 'linear-gradient(90deg, rgba(23,196,182,1) 0%, rgba(21,168,155,1) 50%, rgba(11,108,100,1) 100%)',
    },

    header:
    {
        wordWrap: "break-word",
        position: 'absolute',
        fontWeight: 550,
        color: '#fff',
        bottom: '60%',
        right: '5%',
    },

    headerDate:
    {
        position: 'absolute',
        fontWeight: 150,
        color: '#fff',
        bottom: '50%',
        right: '5%',
    },

    svg:{
        
    }
  }));

export default function Header() 
{
    const classes = useStyles();

    return( 
        <div className={classes.root}>
            <Typography variant='h2' className={classes.header}>
                {getCurrentDate()}
            </Typography>
            {/* <Typography variant="body1" className={classes.headerDate} >
                A simple dashboard that grants you the ability to keep you up 
                to date on stocks you stupidly invested in after browsing r/wallstreetbets for 15 minutes.
            </Typography> */}
            <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 320"><path fill="#273036" fill-opacity="1" d="M0,0L60,37.3C120,75,240,149,360,170.7C480,192,600,160,720,128C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    );
}