#!/usr/bin/env node
'use strict';
const meow = require('meow');
const generatorAndroidArchitectureComponents = require('.');

const cli = meow(`
	Usage
	  $ generator-android-architecture-components [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ generator-android-architecture-components
	  unicorns & rainbows
	  $ generator-android-architecture-components ponies
	  ponies & rainbows
`);

console.log(generatorAndroidArchitectureComponents(cli.input[0] || 'unicorns'));
