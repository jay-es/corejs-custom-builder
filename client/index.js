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
    window.getAllMethods().then(allMethods => {
      this.allMethods = allMethods;

      window.getSelected().then(selected => {
        this.selected = Object.keys(selected || allMethods);
      });
    });
  },
  methods: {
    checkAll() {
      this.selected = Object.keys(this.allMethods);
    },
    uncheckAll() {
      this.selected = [];
    },
    build() {
      window.build(this.targets).then(() => {
        alert('Done'); // eslint-disable-line
      });
    },
    save() {
      window.saveFile(this.targets).then(() => {
        alert('Done'); // eslint-disable-line
      });
    }
  }
});
