const express = require('express');
const path = require('path');
const morgan = require('morgan');
const sql = require('mssql');
const app = express();

//my modules
const constants = require('./common/constants.js');

//settings
app.set(constants.PORT, process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(require("./routes/routes"));
app.use(morgan('dev'));


var  config = {
    user: 'sa',
    password: '352435',
    server: 'PALUR\\SKYNET',
    port: 1444,
    database: 'FAM',
     options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}

var connection = sql.connect(config,function(err, res){
    if(err) {
        console.log('errores');
    }else {
        console.log('Conectado a ',config.database);
    }
});

app.listen(app.get(constants.PORT), ()=>{
    console.log('server running on master branch: ', constants.PORT,app.get(constants.PORT));
 
})