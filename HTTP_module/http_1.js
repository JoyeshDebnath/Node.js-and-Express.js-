//Http module

const http = require('http');
//Syntax: createServer((req,res)=>{callback})

const my_server = http.createServer((req, result) => {
    if (req.url === '/')//home page 
    {
        result.end("Welcome to my website Home page ...");
    }
    if (req.url === '/about')
    {
        result.end("Welcome to the About page  of my website ...");
    }//sending response for particular url 
     
    result.end(`
    <h1>OOPS! 404 ERROR </h1>
    <p>the page you requested for could not be found </p>
    <a href="/">Back to Home page </a>
    `);

});

my_server.listen(5000);