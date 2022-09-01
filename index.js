console.clear()


const
    { Webhook }= require('discord-webhook-node'),
    path = require('path'),
    nocache = require('nocache'),
    prettyjson = require('prettyjson'),
    parser = require('ua-parser-js'),
    fs = require('fs'),
    https = require('http'),
    app = require('express')().use(require('express').static(path.normalize(__dirname + '/public/'), {extensions: ['html']})).use((req, res) => {

        console.log('connected')


        // Logging Stuff
        let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

        let options = {
            noColor: true
        };

        let info = prettyjson.render(req.headers, options)

        let agent = prettyjson.render(parser(req.headers['user-agent']), options)

        date = new Date().toDateString() + ' ' + new Date().toTimeString()


        log = date + ' \n ---------------------------------------- \n Ip: \n ```' + ip + '``` \n User Agent: \n ```' + agent + '```\n ----------------------------------------'



        const hook = new Webhook("https://discord.com/api/webhooks/964948206515531816/cfsNDCDwgdPHJievCCnllKWwMZuWkMFLK_csnLfXjjm8pIPoEJtLmj-vAUE8kkOsAVeo");
        hook.send(log);


        res.status(404, res.send(fs.readFileSync(path.normalize(__dirname + '/public/404.html'), 'utf-8')))
    }),



    server = https.createServer(app);



server.listen(8081);
console.log('Server Running :D')