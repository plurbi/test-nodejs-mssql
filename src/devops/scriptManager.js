
var scripts = {
    constants : {
        explorer : 'explorer-script',
        echo : 'echo-script'
    }
};

scripts.callScript = (scriptSelected) => {    
    if (scriptSelected == scripts.constants.explorer){
        return 'echo script selected ' + scripts.constants.explorer;
        //debiera llamar al script que levanta un sitio por ejemplo
    }
    return 'echo call script ';
}
scripts.echoTest = function(){    
 return 'echo from js';
}

module.exports = scripts;