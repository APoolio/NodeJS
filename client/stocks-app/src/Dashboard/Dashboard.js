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
import darkTheme from '../theme';

import { getCurrentDate } from '../utils/date';

const useStyles = makeStyles((theme) => (
{
    root:
    {   
        backgroundColor: "#121212",
        display: "flex"
    },
    margin: 
    {
        margin: theme.spacing(1),
    },
    //appBarSpacer: theme.mixins.toolbar,
    content: 
    {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    container: 
    {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },

}));

export default function Dashboard() 
{
    var classes = useStyles();
    
    return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        {/* TODO: Change header to utilize Material-UI and implement getCurrentDate() from utils folder */}

        <header className="App-header">
          <p className="Header-text-title">Your Stocks</p>
          <p className="Header-text-date">February 18, 2021</p>
        </header>

        <div className={classes.root}>
            <div className={classes.appBarSpacer} />
                <Grid container
                    spacing={4}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className={classes.container}>
                    {/* Search Bar */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Search/>
                    </Grid>

                    {/* Watchlist */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Watchlist/>
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


