# generator-node-modules [![Build Status](https://travis-ci.org/bramkok/generator-node-modules.svg?branch=master)](https://travis-ci.org/bramkok/generator-node-modules)

> A node module generator for yo

![](screenshot.png)

## Install

```console
$ npm install --global yo generator-node-modules
```

## Usage

With [yo](https://github.com/yeoman/yo):

```console
$ yo node-modules
```

There are multiple command-line options available:

```console
$ yo node-modules --help
```

```console
Usage:
  yo node-modules [options]

Options:
  --help          # Print the generator's options and usage
  --skip-cache    # Do not remember prompt answers              Default: false
  --skip-install  # Do not automatically install dependencies   Default: false
  --org           # Publish to a GitHub organization account
  --cli           # Add a CLI
  --coverage      # Add code coverage with nyc
  --coveralls     # Upload coverage to coveralls.io (implies --coverage)
```

The `--org` option takes a string value (i.e. `--org=avajs`). All others are
boolean flags and can be negated with the `no` prefix (i.e. `--no-coveralls`).
You will be prompted for any options not passed on the command-line.

## Tests

```console
$ npm test
```

## Related

- [sindresorhus/generator-nm](https://github.com/sindresorhus/nm-generator)
`generator-node-modules` is forked from this project
- [yeoman.io/generators](http://yeoman.io/generators/) 4000+ other generators

## License

MIT © [Bram Kok](https://bramkok.com)
