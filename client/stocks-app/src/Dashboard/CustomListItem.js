import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
//Material UI
import ListItem from '@material-ui/core/ListItem';
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';


//Icons
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';



const useStyles = makeStyles((darkTheme) => ({
    root: {
      //width: '700px',
      //backgroundColor: "#424242",
      //borderRadius: "5px",
      fontFamily: "Roboto"
      
    },
    inline: {
      display: 'inline',
    },

    container:{
        flexWrap: "nowrap"
    },

    primaryListItemText: {
        fontFamily: "Roboto",
        fontSize: 40,
        fontWeight: 550,
        margin: 10,
        color: "#fff"
    },

    secondaryListItemText:{
        color: "rgba(255, 255, 255, 0.7)",
        marginTop: 47,
    },

    stockPriceText:{
        fontSize: 15,
        marginLeft: 10,
        color: "rgba(255, 255, 255, 0.7)",
    },

    stockTrendText:{
        fontSize: 15,
        color: "#d50000"
    }

    
  }));

const selectStockBySymbol = (state, stockId) => {
    return state.stocks.find((stock) => stock.id === stockId)
}

export default function CustomListItem({stock})
{
    
    const classes = useStyles();
    //const stock = useSelector((state) => selectStockBySymbol(state, id))
    const {id, currentPrice, previousPrice } = stock
    const dispatch = useDispatch()


    const handleDelete = (event) => {
        dispatch({type: 'stocks/deleteStock', payload: stock.id })
    }

    return (
            <ListItem>
                <Grid container direction="column">
                    <Grid container spacing={1} direction="row">
                    <Grid item xs={11} >
                        <Grid container direction="row" wrap="nowrap">
                            <Grid item xs={3} className={classes.primaryListItemText}>
                                <Typography variant="h2">
                                    {id}
                                </Typography>
                            </Grid>

                            <Grid alignContent="flex-end">
                                <Grid item className={classes.secondaryListItemText}>
                                    <Typography variant="subtitle1">
                                        {id}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={1}>
                        <Grid container justify="center">
                            <Grid item>
                                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                                    <DeleteIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={1} direction="row">
                            <Grid item xs={2}>
                                <Typography variant="overline" className={classes.stockPriceText}>
                                    {currentPrice} USD
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <Typography variant="overline" className={classes.stockTrendText}>
                                            -1.96 (1.45%) 
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Icon fontSize="small">
                                            <ArrowDownwardIcon style={{position: 'relative', top:'3px', color: "#d50000"}} />
                                        </Icon>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        ADVANCED STOCK INFO
                    </Grid>
                </Grid>
            </ListItem>
    );

}

{/* <ListItem>
            <Box className={classes.primaryListItemText} textAlign="right">
                AAPL
            </Box>
            <ListItemText classes={{secondary:classes.secondaryListItemText}}
                secondaryTypographyProps={{ align: "left" }}
                secondary="Apple Inc."
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>

            <Box>
                <ListItemText>
                    primary="tetst tsetst"
                </ListItemText>
            </Box>
            </ListItem> */}