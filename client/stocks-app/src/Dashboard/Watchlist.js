import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CustomListItem from './CustomListItem';
import Paper from '@material-ui/core/Paper';

const selectStocks = (state) => state.stocks;

const useStyles = makeStyles((theme) => ({
    root: {
      width: '1000px',
      backgroundColor: "#272c34",
      borderRadius: "5px",
      margin: '10px 0'
    },

    Paper: {
      borderRadius: "10px"
    }
  }));

export default function Watchlist() 
{
    const classes = useStyles();
    const stocks = useSelector(selectStocks);

    //Creating an array of stocks
    const renderedCustomListItems = stocks.map((stock) => {
      return <CustomListItem key={stock.id} stock={stock} />
    });

    return (
      <Paper component="form" elevation={7} className={classes.Paper}>
        <List className={classes.root}>
            {/* ListItem */}
            {renderedCustomListItems}
            
        </List>
      </Paper>
    );
}
