const express = require('express');
const sql = require('mssql');
const router = express.Router();

router.get('/',(req,res,next)=>{
   var request = new sql.Request();
   request.query('SELECT top 5 * FROM dbo.Comprobantes', (err,result) => {
        if(err){
            console.log('error / ',err);
            res.send(err);
        }else {
             var data = result.recordset;
             res.send(data);
        }
   });
});


module.exports = router;