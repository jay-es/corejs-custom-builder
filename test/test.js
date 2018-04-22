function test(bool) {
  var targets = {
    'core-js/fn/array/find':        Array.prototype.find,
    'core-js/fn/array/find-index':  Array.prototype.findIndex,
    'core-js/fn/array/includes':    Array.prototype.includes,

    'core-js/fn/object/assign':   Object.assign,
    'core-js/fn/object/entries':  Object.entries,
    'core-js/fn/object/values':   Object.values,

    'core-js/fn/string/includes':     String.prototype.includes,
    'core-js/fn/string/starts-with':  String.prototype.startsWith,
    'core-js/fn/string/ends-with':    String.prototype.endsWith,
    'core-js/fn/string/pad-start':    String.prototype.padStart,
    'core-js/fn/string/pad-end':      String.prototype.padEnd,
  };

  Object.keys(targets).forEach(function(key) {
    var result = targets[key] === undefined;
    console.assert(result === bool, key);
  });
}

test(true);
setTimeout(test.bind(null, false), 10);
