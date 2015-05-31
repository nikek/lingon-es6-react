#!/usr/bin/env node

var lingon = require('lingon');
var babel = require('gulp-babel');

lingon.config.server.catchAll = 'index.html';

lingon.preProcessors.push('es6', function() { return babel(); });
lingon.preProcessors.push('jsx', function() { return babel(); });

