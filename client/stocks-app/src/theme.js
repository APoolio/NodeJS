/*jshint esversion: 6 */ 
import React, { useState } from "react";
import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
    pallete:
    {
        type: "dark",
        primary:{
            text: '#fff'
        },
        secondary:{
            text: 'rgba(255, 255, 255, 0.7)',
        },
    }
});

export default darkTheme;