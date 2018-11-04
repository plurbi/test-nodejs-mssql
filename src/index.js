const express = require('express');
const path = require('path');
const morgan = require('morgan');
const sql = require('mssql');
const app = express();

//my modules
const constants = require('./common/constants.js');
const dbconfig = require('./dal/dbConfg.js');
const pwrShell = require('./devops/PowerShellManager.js')
//settings
app.set(constants.PORT, process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(require("./routes/routes"));
app.use(morgan('dev'));




var connection = sql.connect(dbconfig, function(err, res){
    if(err) {
        console.log('errores',err);
    }else {
        console.log('Conectado a ', dbconfig.database);
    }
});


app.listen(app.get(constants.PORT), () => {
    console.log('server running on master branch: ', constants.PORT,app.get(constants.PORT));
    pwrShell.ejecutionParamsTEST();
})