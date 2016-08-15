#!/usr/bin/env node

const meow = require('meow');

const cli = meow(`
	Usage
	  $ <%= repoName %> <options>

	Options
    -v, --verbose    Print message to stdout
  	-h, --help       Display Help information

	Examples
	  $ <%= repoName %> --verbose
    This is a message.`,

{ alias: { v: 'verbose', h: 'help' } }).flags.v;

if (cli) process.stdout.write('This is a message.');
