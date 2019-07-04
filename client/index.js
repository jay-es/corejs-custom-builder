/* eslint-env browser, es6 */
new Vue({
  el: '#app',
  data: {
    allMethods: {},
    selected: []
  },
  computed: {
    targets() {
      const result = {};

      Object.entries(this.allMethods).forEach(([k, v]) => {
        if (this.selected.includes(k)) {
          result[k] = v;
        }
      });

      return result;
    }
  },
  created() {
    window.allMethods().then(res => {
      this.allMethods = res;
      this.selected = Object.keys(res);
    });
  },
  methods: {
    build() {
      window.build(this.targets).then(() => {
        alert('Done'); // eslint-disable-line
      });
    }
  }
});
