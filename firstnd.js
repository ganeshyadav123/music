/*var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! this is ganesh yadav');
}).listen(8080);
*/

/*let fs = require('fs');
console.log("reading of the file starts from ")
fs.readFile('ganesh.txt','utf-8',(err,data)=>{
  if (err){
  console.log("error occured");
  }
  else{
  console.log("reding of file starts from here");
  console.log(data);
  }
});
console.log("this is end of the file");
*/
var http=require('http');

mytimegs=()=>{
  return Date();
}


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + mytimegs());
  res.end();
}).listen(8080);
