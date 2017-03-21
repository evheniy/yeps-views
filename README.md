# YEPS Views

YEPS Template rendering

[![NPM](https://nodei.co/npm/yeps-views.png)](https://npmjs.org/package/yeps-views)

[![npm version](https://badge.fury.io/js/yeps-views.svg)](https://badge.fury.io/js/yeps-views)
[![Build Status](https://travis-ci.org/evheniy/yeps-views.svg?branch=master)](https://travis-ci.org/evheniy/yeps-views)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/yeps-views/badge.svg?branch=master)](https://coveralls.io/github/evheniy/yeps-views?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/yeps-views/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/yeps-views/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/yeps-views)

[![Dependency Status](https://david-dm.org/evheniy/yeps-views.svg)](https://david-dm.org/evheniy/yeps-views)
[![devDependency Status](https://david-dm.org/evheniy/yeps-views/dev-status.svg)](https://david-dm.org/evheniy/yeps-views#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/yeps-views)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/yeps-views/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/yeps-views.svg)](https://github.com/evheniy/yeps-views/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/yeps-views.svg)](https://github.com/evheniy/yeps-views/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/yeps-views.svg)](https://github.com/evheniy/yeps-views/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/yeps-views.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


## Template engines

YEPS Views is using [consolidate](https://github.com/tj/consolidate.js) under the hood.

[List of supported engines](https://github.com/tj/consolidate.js#supported-template-engines)


## How to install

    npm i -S yeps-views
  

## How to use

views/index.jsx

    const React = require('react');
    
    module.exports =  props => <h1>{props.text}</h1>;
    
app.js

    const App = require('yeps');
    const views = require('yeps-views');
    
    const app = new App();
    
    app.all([
        views(__dirname + '/views', { engine: 'react' });
    ]);
    
    app.then(async ctx => {
        return ctx.render('index.jsx', { text: 'Hello!' });
    });


## Links

* [yeps](https://github.com/evheniy/yeps) - YEPS
* [yeps-promisify](https://github.com/evheniy/yeps-promisify) - YEPS kernel
* [yeps-benchmark](https://github.com/evheniy/yeps-benchmark) - performance comparison koa2, express and node http
* [yeps-router](https://github.com/evheniy/yeps-router) - YEPS promise based router
* [yeps-error](https://github.com/evheniy/yeps-error) - YEPS 404/500 error handler
* [yeps-redis](https://github.com/evheniy/yeps-redis) - YEPS promise based redis client
* [yeps-mysql](https://github.com/evheniy/yeps-mysql) - YEPS promise based mysql client
* [yeps-boilerplate](https://github.com/evheniy/yeps-boilerplate) - YEPS app boilerplate
* [yeps-express-wrapper](https://github.com/evheniy/yeps-express-wrapper) - YEPS express wrapper
* [yeps-cors](https://github.com/evheniy/yeps-cors) - YEPS CORS
* [yeps-bodyparser](https://github.com/evheniy/yeps-bodyparser) - YEPS body parser
* [yeps-method-override](https://github.com/evheniy/yeps-method-override) - YEPS method override