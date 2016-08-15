# <%= repoName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>)<% if (coveralls) { %> [![Coverage Status](https://coveralls.io/repos/github/<%= githubUsername %>/<%= repoName %>/badge.svg?branch=master)](https://coveralls.io/github/<%= githubUsername %>/<%= repoName %>?branch=master)<% } %>

> <%= moduleDescription %>

## Install

```
$ npm install --save <%= moduleName %>
```

## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>');
```

## API

### <%= camelModuleName %>(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.<% if (cli) { %>

## CLI

```console
$ npm install --global <%= moduleName %>
```

```console
$ <%= repoName %> --help
```

```console
Usage
  $ <%= repoName %> <options>

Options
  -v, --verbose    Print message to stdout
  -h, --help       Display Help information

Examples
  $ <%= repoName %> --verbose
  This is a message.
```<% } %>

## License

MIT © [<%= name %>](<%= website %>)
