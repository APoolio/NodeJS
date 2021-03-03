import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
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
    const [list, setList] = useState({ticks: []});
    var test = 0;
    useEffect( () => {
      getAllStocks('ea6be7e5-851c-4fd1-9d16-89417fb06421').then(response => {
        //console.log(response)
        response[0].ticks.forEach(e => {
          searchStock(e).then(res => {
            //console.log(res.chart.result[0])
            setList(res.chart.result[0]);
          })
        });
      })}, []);

    const classes = useStyles();
    const stocks = useSelector(selectStocks);

    //Creating an array of stocks
    const renderedCustomListItems = list.ticks.map((stock) => {
      console.log(stock)
      //return <CustomListItem key={stock.id} stock={stock} /> 
    });

    /* function renderListFromDB()
    {
      getAllStocks('ea6be7e5-851c-4fd1-9d16-89417fb06421').then(db_response => {
        //console.log(db_response)
        db_response[0].ticks.forEach(element => {
          searchStock(element).then(response => {
            var stock = response.chart.result[0];
            stockList.push(stock)
          })
        });
        searchStock(db_response[0].tick).then(response => {
          console.log(response)
        }) 
      })
    }; */

    //renderListFromDB();

    return (
      <Paper component="form" elevation={7} className={classes.Paper}>
        <List className={classes.root}>
            {/* ListItem */}
            {renderedCustomListItems}
            {/* {renderListFromDB()} */}
        </List>
      </Paper>
    );
}
