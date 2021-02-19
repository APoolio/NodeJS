import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'





export default function Chart({stock}) 
{
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

    console.log(dataChart[10]);

    const formatXAxis = (tick) => {
      var date = new Date(tick * 1000)
      return moment(date).format('HH:mm')
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
          <Tooltip />
    </LineChart>
  );
}