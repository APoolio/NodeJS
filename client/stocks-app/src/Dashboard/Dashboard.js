// React
import React from 'react';

// MaterialUI 
import { Paper} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from '@material-ui/core/Grid';

import Search from "./Search";
import Watchlist from "./Watchlist";
import Header from "./Header";
import darkTheme from '../theme';
import moment from 'moment'


const useStyles = makeStyles((theme) => (
{
    root:
    {   
        //backgroundColor: "#121212",
        backgroundColor: "#273036",
        display: "flex",
        height: "100vh"
    },
    margin: 
    {
        //margin: theme.spacing(1),
    },
    //appBarSpacer: theme.mixins.toolbar,
    container: 
    {
        //paddingTop: theme.spacing(4),
        //paddingBottom: theme.spacing(4),
    },

}));

export default function Dashboard() 
{
    var classes = useStyles();

    const getDate = () => {
        var date = new Date()
        return moment().format('LL')
      }

    return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        {/* TODO: Change header to utilize Material-UI and implement getCurrentDate() from utils folder */}

        {/* <header className="App-header">
            <Typography variant='h2' className={classes.header}>
                {getDate()}
            </Typography>
            <Typography variant="body1" className={classes.headerDate} >
                A simple dashboard that grants you the ability to keep you up 
                to date on stocks you stupidly invested in after browsing r/wallstreetbets for 15 minutes.
            </Typography>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,0L60,37.3C120,75,240,149,360,170.7C480,192,600,160,720,128C840,96,960,64,1080,53.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </header> */}
        <div className={classes.root}>
            <div className={classes.appBarSpacer} />
                <Grid container
                    //direction="column"
                    //alignItems="center"
                    justify="center"
                    className={classes.container}>
                        
                    {/* Header */}
                    <Grid item xs={12} md={12} lg={12}>
                        <Header/>
                    </Grid>

                    {/* Search Bar */}
                    <Grid item xs={12} md={8} lg={7}>
                        <Search/>
                    </Grid>

                    {/* Watchlist */}
                    <Grid item xs={12} md={8} lg={7}>
                        <Watchlist/>
                    </Grid>

                    {/* Search Bar */}
                    <Grid item xs={12} md={8} lg={7}>
                    </Grid>
                </Grid>

          <div >
            <Paper elevation={3}>
                
              </Paper>
          </div>
          </div>
    </ThemeProvider>
    );
}


