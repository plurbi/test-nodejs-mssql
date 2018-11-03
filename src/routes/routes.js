const express = require('express');
const sql = require('mssql');
const router = express.Router();

router.get('/',(req,res,next)=>{
   var request = new sql.Request();
   request.query('SELECT  * FROM dbo.Usuarios', (err,result) => {
        if(err){
            console.log('error / ',err);
        }else {
             var data = {};
             data = result.recordset;
             res.send(data);
        }
   });
});


module.exports = router;