//Demo of FS module  which interacts with the File system👲
//The below example is of Synchronous approach...

console.log("Starting.....");

const { readFileSync ,writeFileSync} = require('fs');//extarcting the readFileSync  from fs module 

//Reading from the file system>>>>>
//Syntax:  readFileSync("path of the spacific file",encoding ).encoding can be selected as utf-8

const first = readFileSync('./First.txt', 'utf8');//read the file from the first.txt
const second=readFileSync('./Second.txt','utf8');//read file from the second.txt
console.log(`The first txt file read :::   ${first}`);
console.log(`The second txt file read :::    ${second}`);

//lets create a new file using writeFileSync...
//Syntax:   writeFileSync('file name ','value we want to pass tyo file ');
//!NOTE : If the file does not exists then node will create a new file and psh our contents passed as parameters to the file  .. but if the file does exists initially then the node will override the contents of the file 


writeFileSync('Third.txt', `The third file created contains the combined data of First and Second text file   ....   ${first},  ${second}`, {flag:'a'});
//Syntax:  writeFileSync('file name ','file contents ');

//if u add a {flag:'a'}  as third paramter of the writeFileSync()  then it will not overwrite but append the contents to the previous contents of that file   

const third = readFileSync('./Third.txt', 'utf8');
console.log(third);
console.log("Finished the execution of the tasks !!");
console.log("Starting the next task");

