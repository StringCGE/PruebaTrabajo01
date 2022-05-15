const NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

require('dotenv').config({
    path: `.env.${NODE_ENV}`
});

app.use(express.static('public'));

app.use('/', require('./controller/raiz.js'));
app.use('/prospecto', require('./controller/prospecto.js'));

app.listen(process.env.PORT, ()=>{
    console.log(`Start server in PORT: ${process.env.PORT}`);
});



