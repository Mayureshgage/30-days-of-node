const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'application/json'});
    res.write('this is json file');
    let json_response = {
		status : 200 , 
		message : 'succssful' , 
		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
		code : 2000
	}
    res.end(JSON.stringify(json_response));
}).listen(3000);