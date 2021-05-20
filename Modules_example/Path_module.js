

const path = require('path');//importing the path module of node js

console.log(path.sep);
const file_path = path.join('/Backend Practice', 'Notes.txt');
console.log(file_path);

const base = path.basename(file_path);
console.log(base);//provides the base name of the file path 

//Syntax    path.basename(file_path);
 
//reurn the absolute path of the file 
//Syntax :   const absolute_path=path.absolute(__dirname,'folder','subfolder','file_name ')

const absolute_path = path.resolve(__dirname, 'Modules_example', 'Path_module.js');
console.log(`The absolute path of the Path_module.js is ...  ${absolute_path}`);

//output :  The absolute path of the Path_module.js is ...  C:\Users\KIIT\Desktop\Backend Practice\Modules_example\Modules_example\Path_module.js