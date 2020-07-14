<template>
  <div class="personalized">
    <nete-banner />
    <nete-rsonglist />
    <nete-private-content />
    <nete-newsong />
    <nete-mv />
    <nete-djprogram />
  </div>
</template>

<script>
import Banner from './banner';
import RSongList from './recommend-songlist';
import PrivateContent from './privatecontent';
import NewSong from './newsong';
import MV from './mv';
import DJProgram from './djprogram'
export default {
  name: 'nete-discovery',
  components: {
    'nete-banner': Banner,
    'nete-rsonglist': RSongList,
    'nete-private-content': PrivateContent,
    'nete-newsong': NewSong,
    'nete-mv': MV,
    'nete-djprogram': DJProgram
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
