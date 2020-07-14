<template>
  <div class="personalized">
    <nete-banner />
    <nete-rsonglist />
    <nete-private-content />
    <div class="newest"></div>
    <div class="recommend-mv"></div>
    <div class="djprogram"></div>
  </div>
</template>

<script>
import Banner from './banner';
import RSongList from './recommend-songlist';
import PrivateContent from './privatecontent';
export default {
  name: 'nete-discovery',
  components: {
    'nete-banner': Banner,
    'nete-rsonglist': RSongList,
    'nete-private-content': PrivateContent,
  },
};
</script>

<style lang="scss" scoped>
.personalized {
  width: 100%;
  overflow: hidden;
  padding: 30px;
}
</style>
