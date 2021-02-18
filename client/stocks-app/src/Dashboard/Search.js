import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { searchStock } from '../services/stockServices';

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




export default function Search() {
    //const theme = useTheme();
    const classes = useStyles();
    const [stock, setStock] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => setStock(e.target.value);

    const handleSubmit = (event) => 
    {
      event.preventDefault();
    
      console.log("HANDLE_SUBMIT");
      searchStock(stock).then(response => 
        {
          var data_string = JSON.stringify(response);
          var data = JSON.parse(data_string);
          //var metadata = JSON.parse(data.chart.meta);
          //console.log(data.chart.result[0].meta.symbol);
          setStock('');
          dispatch( 
          {
            type: 'stocks/addStock', 
            symbol: data.chart.result[0].meta.symbol,
            currentPrice: data.chart.result[0].meta.regularMarketPrice,
            previousClose: data.chart.result[0].meta.previousClose,
          });
        });
    };

    return (
        <Paper component="form" elevation={7} className={classes.root}>
          <form style={{width: '100%', display: 'flex'}}>
              <InputBase
                className={classes.input}
                placeholder="Add a Stock"
                autoFocus={true}
                fullWidth={true}
                width='100%'
                onChange={handleChange}
                value={stock}
                inputProps={{ 'aria-label': 'search google maps', width: '100%' }}/>  
          <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleSubmit}>
            <SearchIcon />
          </IconButton>
          </form>
        </Paper>
      );
  }