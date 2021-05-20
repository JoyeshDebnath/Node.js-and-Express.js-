//Demo of Asynchronous fs module operations
console.log("Starting .. 👩‍🚀👩‍🚀");
const { readFile, writeFile } = require('fs');

//asynchronous like promise uses the concept of callback()

//Syntax: readFile('./file path','utf8',(error,result)=>{callback})

//Synatx of writing asynchronous:  writeFile('./file path','content of the new file ',(err,result){callback to write })

// readFile('./First.txt','utf8', (error, result) => {
//     if (error) {
//         console.log(error);
//         return;
//     }//if error

//     console.log(result);
// })

//callback and readFile and writeFile together demo 

readFile('./First.txt', 'utf8', (error,result) => {
    if (error) {
        console.log(error);
        return;
    }
    const first = result;//First.txt
    console.log(first);

    readFile('./Second.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(error);
            return;
        }

        const second = result;//Second.txt
        console.log(second);

        writeFile('./async_result.txt', `The result of the First.txt appended to the Second.txt is ....   ${first} .. ${second} 👲  \n \n \n \n \n \n \n `, {flag:'a'}, (err, result) => {
            
            if (err) {
                console.log(err);
                return;
            }
            console.log("Ended the execution of all the tasks..🙆‍♀️🙆‍♀️");//undefined
        })
    })
})


console.log("Starting the next task...🏇🏇");