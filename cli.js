#!/usr/bin/env node
'use strict';
const meow = require('meow');
const createWebcomponent = require('.');

const cli = meow(`
	Usage
	  $ create-webcomponent [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ create-webcomponent
	  unicorns & rainbows
	  $ create-webcomponent ponies
	  ponies & rainbows
`);

console.log(createWebcomponent(cli.input[0] || 'unicorns'));
