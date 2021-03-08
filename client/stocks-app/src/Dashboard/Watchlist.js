import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CustomListItem from './CustomListItem';
import Paper from '@material-ui/core/Paper';

import { getAllStocks, searchStock } from '../services/stockServices';

const selectStocks = (state) => state.stocks;

const useStyles = makeStyles((theme) => ({
    root: {
      alignItems: "center",
      backgroundColor: "#272c34",
      borderRadius: "5px",
      margin: '10px 0',
      display: 'flex'
    },

    Paper: {
      borderRadius: "10px"
    }
  }));

export default function Watchlist()
{
    const [list, setList] = useState([]);
    useEffect( () => {
      getAllStocks('ea6be7e5-851c-4fd1-9d16-89417fb06421').then(response => {
        response[0].ticks.forEach(e => {
          searchStock(e).then(res => {
            setList(res.chart.result[0]);
          })
        });
      })}, []);

    const classes = useStyles();
    //const stocks = useSelector(selectStocks);

    const renderedCustomListItems = list.map((stock) => {
      return <CustomListItem key={stock.id} stock={stock} /> 
    })
  

    return (
      <Paper component="form" elevation={7} className={classes.Paper}>
        <List className={classes.root}>
            {/* ListItem */}
            {renderedCustomListItems}
        </List>
      </Paper>
    );
}
