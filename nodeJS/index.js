const {Create,ConcatFiles} = require('./functions'); // imports functions that you want to use it

function Main() {
    Create(1,'hello world1');
    Create(2,'hello world2');
    Create(3,'hello world3');
    Create(4,'hello world4');
    ConcatFiles();
}

Main();