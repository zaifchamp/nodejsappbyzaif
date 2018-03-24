var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('I claimed your subdomain for Proof of Concept.It will also protect you from bad guys who want to exploit this vulnerability.Check your email for more detail. \r\n from huzaifa !')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
