const count = (x, y) => { return x + y }

const adder = new Vue({
  el: '#postion',
  data: {
    v1: 0,
    v2: 0
  },
  computed: {
    result: function () {
      const i = parseInt(this.v1)
      const j = parseInt(this.v2)
      return `${count(i, j)}.`
    }
  }
})