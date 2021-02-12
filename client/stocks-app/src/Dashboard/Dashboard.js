/*jshint esversion: 6 */ 

// React
import React, { Component, useState } from 'react';

// MaterialUI 
import { Paper} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import { useTheme, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline} from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Container from "@material-ui/core/Container";

import darkTheme from '../theme';



const useStyles = makeStyles((theme) => (
{
    root:
    {
        display: "flex"
    },
    margin: 
    {
        margin: theme.spacing(1),
    },
    appBarSpacer: theme.mixins.toolbar,
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

async function callApi()
{
    const response = await fetch('/user/stocks/1');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
}

function componentDidMount() 
{
  this.callApi()
    .then(res => this.setState({ response: res.express }))
    .catch(err => console.log(err));
}

export default function Dashboard() {
{

    var classes = useStyles();

    return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <header className="App-header">
          <p className="Header-text-title">Your Stocks</p>
          <p className="Header-text-date">February 10, 2021</p>
        </header>

        <div className={classes.root}>
            <div className={classes.appBarSpacer} />
                <Grid container
                    spacing={4}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className={classes.container}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper elevation={3} fullWidth>
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="TextField"
                            color="inherit"
                            maxWidth="50%"
                            InputProps=
                            {
                                {
                                startAdornment: (<InputAdornment position="start"> <SearchIcon /> </InputAdornment>),
                                }
                            }
                        />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8} lg={9}>
                        <Paper elevation={3} fullWidth>
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="TextField"
                            color="inherit"
                            maxWidth="50%"
                            InputProps=
                            {
                                {
                                startAdornment: (<InputAdornment position="start"> <SearchIcon /> </InputAdornment>),
                                }
                            }
                        />
                        </Paper>
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
}

{/* <form action="./stocks" method="GET">
    <input id="ticker" type="text" name="stock" placeholder="Add a stock to the watchlist"/>
    <button id="button" type="submit">Add Stonk</button>
</form> */}
