[![Build Status](https://travis-ci.org/rajeshsegu/parse-function-string.svg?branch=master)](https://travis-ci.org/rajeshsegu/parse-function-string)
[![Coverage Status](https://coveralls.io/repos/rajeshsegu/parse-function-string/badge.svg?branch=master&service=github)](https://coveralls.io/github/rajeshsegu/parse-function-string?branch=master)


# parse-function-string

Parse a given function / function string to identify its structure.

####Attributes:

 - `name` => name of the function
 - `params` => param passed to function
 - `args` => array of params
 - `body` => body of the function
 - `called` => method call
 - `defn` => function definition

## Installation

```
npm install --save parse-function-string
```

## Usage

#### Function Call

```
var parseFnString = require('parse-function-string');
var fn = 'sample(arg1, arg2, arg3)';

parseFnString(fn);
```

```
Output:
{
  name: 'sample',
  params: 'arg1, arg2, arg3',
  args: ['arg1', 'arg2', 'arg3'],
  body: '',
  called: true,
  defn: false
}
```

#### Function Definition

You can pass a function or a function string

```
var parseFnString = require('parse-function-string');
var fn = 'function sample(arg1, arg2, arg3) { return true; }';

parseFnString(fn);
```

```
Output:
{
  name: 'sample',
  params: 'arg1, arg2, arg3',
  args: ['arg1', 'arg2', 'arg3'],
  body: ' return true; ',
  called: false,
  defn: true
}
```

See tests for different sets of functions to parse.
