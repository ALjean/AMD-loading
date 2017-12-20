'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const Tailor = require('node-tailor');
const nodeStatic = require('node-static');

const APP_NAMES = {
    angular: 'angular-app',
    vue: 'vue-app',
    react: 'react-app'
};

const getFramesStaticPath = function(name){
    return  path.join(__dirname, `./fragments/${name}/dist`);
};

const angularApp = new nodeStatic.Server(getFramesStaticPath(APP_NAMES.angular));
const vueApp = new nodeStatic.Server(getFramesStaticPath(APP_NAMES.vue));
const reactApp = new nodeStatic.Server(getFramesStaticPath(APP_NAMES.react));

const tailor = new Tailor({
    templatesPath: __dirname + '/templates'
});

// Root Server
http
    .createServer((req, res) => {

        if (req.url.startsWith('/static')) {
            fs.readFile(path.join(__dirname, req.url), (err, data) => {
                if (err) {
                    console.log(err);
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                } else {
                    res.setHeader('Content-type', 'text/javascript');
                    res.end(data);
                }
            });
            return;
        }

        if (req.url.startsWith('/vue')) {
            fs.readFile(path.join(getFramesStaticPath(APP_NAMES.vue), req.url), (err, data) => {
                if (err) {
                    console.log(err);
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                }

                res.setHeader('Content-type', 'text/javascript');
                res.end(data);
            });
            return;
        }

        if (req.url.startsWith('/angular')) {
            fs.readFile(path.join(getFramesStaticPath(APP_NAMES.angular), req.url), (err, data) => {
                if (err) {
                    console.log(err);
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                }

                res.setHeader('Content-type', 'text/javascript');
                res.end(data);
            });
            return;
        }

        if (req.url.startsWith('/react')) {
            fs.readFile(path.join(getFramesStaticPath(APP_NAMES.react), req.url), (err, data) => {
                if (err) {
                    console.log(err);
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                }

                res.setHeader('Content-type', 'text/javascript');
                res.end(data);
            });
            return;
        }

        tailor.requestHandler(req, res);
    })
    .listen(8080, function() {
        console.log('Tailor server listening on port 8080');
    });


// Fragment servers - Any http server that can serve fragments

http.createServer((request, response) => {
    request.addListener('end',  () => {
        reactApp.serve(request, response);
    }).resume();
}).listen(8081, function () {
    console.log('React Fragment Server listening on port 8081');
});

http.createServer((request, response) => {
    request.addListener('end',  () => {
        vueApp.serve(request, response);
    }).resume();
}).listen(8082, function () {
    console.log('Vue Fragment Server listening on port 8082');
});

http.createServer((request, response) => {
    request.addListener('end',  () => {
        angularApp.serve(request, response);
    }).resume();
}).listen(8083, function () {
    console.log('Angular Fragment Server listening on port 8083');
});