//Modules

const names = require('./4-Names');//recieving the shared data 
//Syntax ::  const var_name=require('./file name ');

const sayHi = require('./5-Utils');//shared function
const { messi, jd, ibra } = names;
sayHi(messi);
sayHi(jd);
sayHi(ibra);
