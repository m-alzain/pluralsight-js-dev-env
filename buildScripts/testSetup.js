//this file is not transpiled so must use CommonJs and ES5

//register babel to transpile before our test run
require('@babel/register')();

//disable webpack features that Mocha does not understand
require.extensions['.css'] = function(){}
