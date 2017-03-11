const fs = require('fs');
var copydir = require('copy-dir');

exports.command = ['create', 'c'];
 
exports.describe = 'Creates a new project';
 
exports.builder = {
  template: {
    default: 'basic',
    alias: 't',
    describe: 'Pick a template to use for the new project'
  }, 
  name: {
    default: 'newGame',
    alias: 'n',
    describe: 'Pick a name for your project'
  }
}
 
exports.handler = function (argv) {
  var template = argv.template;
  var name = argv.name
  copyTemplate(name, template);
}

function copyTemplate(name, template) {

    const source = '/usr/local/lib/node_modules/lightning-js/cli/templates/' + template;
    const destination = '/' + name;
    const currentDir = process.cwd();

    copydir(source, currentDir + destination, function(err) {
        if(err){
            console.log(err);
        } else {
            console.log('Template Coppied');
            var exec = require('child_process').exec;
            var cmd = 'npm --prefix ./newProject install ./newProject';
            // console.log('attempt to install node modules');
            // exec(cmd, function(error, stdout, stderr) {
            //   console.log(error);
            // });
        }
    });
};