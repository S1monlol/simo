const
    path = require('path'),
    
    
    fs = require('fs'),
    https = require('http'),
    app = require('express')().use(require('express').static(path.normalize(__dirname + '/public/'), {extensions: ['html']})).use((req, res) => {

        res.status(404, res.send(fs.readFileSync(path.normalize(__dirname + '/public/404.html'), 'utf-8')))
    }),



    server = https.createServer(app);



server.listen(8081);
console.log('Server Running :D')