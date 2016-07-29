# controller-autoload

A simple autoloader for your controller. Simply require it and pass in your restify server and controller folder. This will save you having to load them yourself in the routes/controller directory.

## Install
    npm install --save controller-autoload

## Usage
    var routes  = require('controller-autoload');
    var restify = require('restify');
    
    var server = restify.createServer({});
    routes(server, 'routes');

Loading your routes should come after loading your restify middleware.

# License
MIT
