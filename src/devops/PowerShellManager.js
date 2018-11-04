const shell = require('node-powershell');
const scriptManager = require('./scriptManager.js');

var pwrShell = {};
pwrShell.ejecutionSimple = () => {
    var child = child_process.spawn('powershell.exe', ['test.ps1']);

    child.stderr.on('data', function(data) {
      
    });

    child.stderr.on('end', function() {
       
    })

    child.on('exit', function(code) {
        console.log('Powershell Script finished',code);
        if (!!code)
            console.log('I think it failed');
        else
            console.log('I think it worked.')
    });

    child.stdin.end();
};

pwrShell.ejecution = () => {
   
    var ps = new shell({
        executionPolicy: 'bypass',
        noProfile: true
      });
       
     var pathPS = path.join(__dirname,'test.ps1');

      ps.addCommand('echo ejecution function');

      ps.invoke()
      .then(output => {
        console.log(output);
        console.log(pathPS);
      })
      .catch(err => {
        console.log(err);
        ps.dispose();
      });
};

pwrShell.ejecutionParamsTEST = () => {   
     
    var ps = new shell({
        executionPolicy: 'bypass',
        noProfile: true
      });  

      ps.addCommand(scriptManager.callScript(scriptManager.constants.explorer));
      ps.invoke() .then(output => {
        console.log(output);        
      })
      .catch(err => {
        console.log(err);
        ps.dispose();
      });
};



module.exports = pwrShell;