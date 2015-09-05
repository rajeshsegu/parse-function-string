# parse-function-string

Parse a given function / function string to identify its structure.

####Attributes:
`name` => name of the function
`params` => param passed to function
`args` => array of params
`body` => body of the function
`called` => method call
`defn` => function definition

## Installation

```
npm install --save parse-function-string
```

## Usage

```
var parseFnString = require('parse-function-string');
var fn = function sample(arg1, arg2, arg3) { return true; }

parseFnString(fn);
```

```
Sample Output:
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
