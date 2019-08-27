var os = require('os');
var colors = require('colors');
var timeFormat = require('./timeFormat');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    console.log(colors.grey('System:'), type);
    console.log(colors.red('Release:'), release);
    console.log(colors.blue('CPU model:'), cpu);
    timeFormat.print();
    console.log(colors.rainbow('User name:'), userInfo.username);
    console.log(colors.green('Home dir:'), userInfo.homedir);
}

exports.print = getOSinfo;