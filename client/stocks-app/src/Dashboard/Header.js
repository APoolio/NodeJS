import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { getCurrentDate } from '../utils/date';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100%',
    },

    header:
    {
        wordWrap: "break-word",
        position: 'absolute',
        fontWeight: 550,
        color: '#fff',
        bottom: '30%',
        right: '5%',
    },

    headerDate:
    {
        position: 'absolute',
        fontWeight: 150,
        color: '#fff',
        bottom: '30%',
        right: '5%',
    },

    wave:
    {   
        position: "relative",
        background: "#09F",
        color: "#FFF",
        textAlign: "center",
        overflow: "hidden",
    }
  }));

export default function Header() 
{
    const classes = useStyles();

    return( 
        <div className={classes.root}>
            {/* <Typography variant="body1" className={classes.headerDate} >
                A simple dashboard that grants you the ability to keep you up 
                to date on stocks you stupidly invested in after browsing r/wallstreetbets for 15 minutes.
            </Typography> */}
            <div className={classes.wave}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{display: "block", bottom: "100%"}} viewBox="0 0 1440 320">
                    <path fill="#273036" fill-opacity="1" d="M0,64L30,64C60,64,120,64,180,101.3C240,139,300,213,360,208C420,203,480,117,540,106.7C600,96,660,160,720,170.7C780,181,840,139,900,117.3C960,96,1020,96,1080,85.3C1140,75,1200,53,1260,58.7C1320,64,1380,96,1410,112L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>

                <Typography variant='h2' className={classes.header}>
                    {getCurrentDate()}
                </Typography>
            </div>
        </div>
    );
}