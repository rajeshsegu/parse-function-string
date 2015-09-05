'use strict';

function functionRegex() {
  return /^(function)?\s*([\w$]*)\s*\(([\w\s,$]*)\)\s*(\{([\w\W\s\S]*)\})?/;
}

module.exports = functionRegex;
