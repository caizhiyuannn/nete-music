<template>
  <div class="carousel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'nete-carousel',
  props: {
    itemWidth: {
      type: String,
      default: '540px',
    },
    itemHeight: {
      type: String,
      default: '200px',
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      items: [],
      activeIndex: -1,
    };
  },
  methods: {
    calcItems() {
      this.items = this.$children.filter(
        (child) => child.$options.name === 'nete-carouse-item'
      );
    },
    pre() {},
    next() {},
  },
};
</script>
<style lang="scss" scoped></style>
