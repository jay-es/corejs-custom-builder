var getAllMethods = function() {
  var result = {};

  window.methodNames.forEach(function(key) {
    result[key] = key.split('.').reduce(function(acc, v) {
      return acc && acc[v];
    }, window);
  });

  return result;
};

var before = getAllMethods();

setTimeout(function() {
  new Vue({
    el: '#app',
    data: {
      after: getAllMethods(),
      before: before
    },
    methods: {
      cellClass: function(val) {
        return val !== undefined ? 'ok' : 'ng';
      }
    }
  });
}, 20);
