const NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const app = express();
require('dotenv').config({
    path: `.env.${NODE_ENV}`
});



app.listen(process.env.PORT, ()=>{
    console.log(`Start server in PORT: ${process.env.PORT}`);
});

