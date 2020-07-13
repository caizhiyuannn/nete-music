<template>
  <div class="navigate"></div>
</template>

<script>
export default {
  name: 'nete-navigate',
};
</script>

<style lang="scss" scoped>
@import '../styles/common';

.navigate {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 36px;
  background-color: $header-right-background;
  color: $header-right-color;
}
</style>
