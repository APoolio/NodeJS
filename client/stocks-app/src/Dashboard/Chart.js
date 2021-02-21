import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
}));


export default function Chart({stock}) 
{
    const classes = useStyles()
    const theme = useTheme();
    const dispatch = useDispatch()
    const {id, data, currentPrice, previousClose } = stock

    //console.log(data.chart.result[0].timestamp);

    var dataChart = []
    var pos = 0;

    function createChartPoints(data)
    {
      data.chart.result[0].timestamp.forEach(element => 
      {
        //Only record value of stock every 5 minutes
        if((pos % 5) === 0)
        {
          console.log(element);
          dataChart.push(
            {
              timeStamp: element,
              value: data.chart.result[0].indicators.quote[0].open[pos]
            })
          }
          pos++;
      });
    }

    createChartPoints(data);

    const formatXAxis = (tick) => {
      var date = new Date(tick * 1000)
      return moment(date).format('LT')
    }

    const CustomToolTip = ({ active, payload, label }) => {
      if(active && payload && payload.length) 
      {
        console.log(payload[0].payload.timeStamp)
        return(
        <Grid 
          className={classes.root}
          container 
          spacing={2} 
          direction="row"
          alignItems="center"
          wrap="nowrap"> 
          
          <Grid item xs={5} >
            <Typography style={{marginLeft: '15px', color: "rgba(255, 255, 255, 0.7)"}}>
              ${parseFloat(payload[0].payload.value).toFixed(2)} 
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography style={{marginLeft: '10px', color: "rgba(255, 255, 255, 0.5)"}}>
              {formatXAxis(payload[0].payload.timeStamp)}
            </Typography>
          </Grid>
        </Grid>);
      }

      return null;
    }


  return (
     <LineChart width={600} height={300} data={dataChart}>
        <Line 
          dataKey="value"
          data = {dataChart}
          dot={false}
          type="monotone" 
          stroke="rgba(255, 0, 0, 0.7)" />
        <XAxis 
          dataKey='timeStamp'
          domain={['auto', 'auto']}
          interval={12}
          tickFormatter={formatXAxis}
          scale="time"
          type='number' 
          stroke="rgba(255, 255, 255, 0.7)"/>
        <YAxis
          interval="preserveEnd"
          dataKey= 'value' 
          type='number' 
          domain={['auto', 'auto']}
          stroke="rgba(255, 255, 255, 0.7)"/>
          <Tooltip 
          //stroke="rgba(255,255,255, 0.0)"
          content={<CustomToolTip />}/>
    </LineChart>
  );
}