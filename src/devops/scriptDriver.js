
var scripts = {};

scripts.callScript = () => {
    return 'echo call script';
}
scripts.echoTest = function(){    
 return 'echo from js';
}

module.exports = scripts;