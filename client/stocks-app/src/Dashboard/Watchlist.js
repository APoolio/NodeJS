import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CustomListItem from './CustomListItem';


const selectStocks = (state) => state.stocks;

const useStyles = makeStyles((theme) => ({
    root: {
      width: '700px',
      backgroundColor: "#272c34",
      borderRadius: "5px",
      margin: '10px 0'
    },
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
        <List className={classes.root}>
            {/* ListItem */}
            {renderedCustomListItems}
            
        </List>
    );
}
