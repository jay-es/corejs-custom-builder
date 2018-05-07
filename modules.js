module.exports = {
  // ECMAScript 6: Object
  'Object.assign':                'es6.object.assign',
  'Object.is':                    'es6.object.is',

  // ECMAScript 6: Array
  'Array.from':                   'es6.array.from',
  'Array.of':                     'es6.array.of',
  'Array.prototype.copyWithin':   'es6.array.copy-within',
  'Array.prototype.fill':         'es6.array.fill',
  'Array.prototype.find':         'es6.array.find',
  'Array.prototype.findIndex':    'es6.array.find-index',
  'Array.prototype.keys':         'es6.array.iterator',
  'Array.prototype.values':       'es6.array.iterator',
  'Array.prototype.entries':      'es6.array.iterator',

  // ECMAScript 6: String
  'String.fromCodePoint':         'es6.string.from-code-point',
  'String.raw':                   'es6.string.raw',
  'String.prototype.includes':    'es6.string.includes',
  'String.prototype.startsWith':  'es6.string.starts-with',
  'String.prototype.repeat':      'es6.string.repeat',
  'String.prototype.endsWith':    'es6.string.ends-with',
  'String.prototype.codePointAt': 'es6.string.code-point-at',

  // ECMAScript 6: Number
  'Number.isFinite':              'es6.number.is-finite',
  'Number.isNaN':                 'es6.number.is-nan',
  'Number.isInteger':             'es6.number.is-integer',
  'Number.parseFloat':            'es6.number.parse-float',
  'Number.parseInt':              'es6.number.parse-int',
  'Number.EPSILON':               'es6.number.epsilon',
  'Number.MAX_SAFE_INTEGER':      'es6.number.max-safe-integer',
  'Number.MIN_SAFE_INTEGER':      'es6.number.min-safe-integer',

  // ECMAScript 6: Math
  'Math.acosh':                   'es6.math.acosh',
  'Math.asinh':                   'es6.math.asinh',
  'Math.atanh':                   'es6.math.atanh',
  'Math.cbrt':                    'es6.math.cbrt',
  'Math.clz32':                   'es6.math.clz32',
  'Math.cosh':                    'es6.math.cosh',
  'Math.expm1':                   'es6.math.expm1',
  'Math.fround':                  'es6.math.fround',
  'Math.hypot':                   'es6.math.hypot',
  'Math.imul':                    'es6.math.imul',
  'Math.log1p':                   'es6.math.log1p',
  'Math.log10':                   'es6.math.log10',
  'Math.log2':                    'es6.math.log2',
  'Math.sign':                    'es6.math.sign',
  'Math.sinh':                    'es6.math.sinh',
  'Math.tanh':                    'es6.math.tanh',
  'Math.trunc':                   'es6.math.trunc',

  // ECMAScript 6: Promise
  'Promise':                      'es6.promise',

  // ECMAScript 6: Symbol
  'Symbol':                       'es6.symbol',

  // ECMAScript 6: Collections
  'Map':                          'es6.map',
  'Set':                          'es6.set',
  'WeakMap':                      'es6.weak-map',
  'WeakSet':                      'es6.weak-set',

  // ECMAScript 6: Typed Arrays
  'ArrayBuffer':                  'es6.typed.array-buffer',
  'Int8Array':                    'es6.typed.int8-array',
  'Uint8Array':                   'es6.typed.uint8-array',
  'Uint8ClampedArray':            'es6.typed.uint8-clamped-array',
  'Int16Array':                   'es6.typed.int16-array',
  'Uint16Array':                  'es6.typed.uint16-array',
  'Int32Array':                   'es6.typed.int32-array',
  'Uint32Array':                  'es6.typed.uint32-array',
  'Float32Array':                 'es6.typed.float32-array',
  'Float64Array':                 'es6.typed.float64-array',

  // ECMAScript 6: Reflect
  'Reflect.apply':                    'es6.reflect.apply',
  'Reflect.construct':                'es6.reflect.construct',
  'Reflect.defineProperty':           'es6.reflect.define-property',
  'Reflect.deleteProperty':           'es6.reflect.delete-property',
  'Reflect.enumerate':                'es6.reflect.enumerate',
  'Reflect.get':                      'es6.reflect.get',
  'Reflect.getOwnPropertyDescriptor': 'es6.reflect.get-own-property-descriptor',
  'Reflect.getPrototypeOf':           'es6.reflect.get-prototype-of',
  'Reflect.has':                      'es6.reflect.has',
  'Reflect.isExtensible':             'es6.reflect.is-extensible',
  'Reflect.ownKeys':                  'es6.reflect.own-keys',
  'Reflect.preventExtensions':        'es6.reflect.prevent-extensions',
  'Reflect.set':                      'es6.reflect.set',
  'Reflect.setPrototypeOf':           'es6.reflect.set-prototype-of',

  // Stage 4 proposals
  'Array.prototype.includes':         'es7.array.includes',
  'Object.values':                    'es7.object.values',
  'Object.entries':                   'es7.object.entries',
  'Object.getOwnPropertyDescriptors': 'es7.object.get-own-property-descriptors',
  'String.prototype.padStart':        'es7.string.pad-start',
  'String.prototype.padEnd':          'es7.string.pad-end',
};
