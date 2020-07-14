<template>
  <div class="recommend-songlist">
    <h1>推荐歌单</h1>
    <div class="cardcontainer">
      <div class="carditem" v-for="(song, ind) in songlists" :key="ind">
        <div class="card-avator">
          <img :src="song.picUrl" />
          <span>{{
            Math.round(song.playCount / 10000) > 1
              ? `${Math.round(song.playCount / 10000)}万`
              : song.playCount
          }}</span>
        </div>
        <div class="card-content">
          <span>{{ song.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPersonalized } from '@/api';
export default {
  name: 'nete-rsonglist',
  data() {
    return {
      songlists: [],
    };
  },
  async created() {
    const { result } = await getPersonalized();
    this.songlists = result;
  },
};
</script>

<style lang="scss" scoped>
.recommend-songlist {
  width: 100%;
  display: flex;
  flex-direction: column;

  .cardcontainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .carditem {
    width: 20%;
    padding: 8px;
    .card-avator {
      width: 100%;
      position: relative;
      cursor: pointer;
      & img {
        display: block;
        width: 100%;
      }
      & span {
        top: 0;
        right: 8px;
        position: absolute;
        color: white;
      }
    }

    .card-content span {
      display: inline-block;
      margin: 8px 0;
      cursor: pointer;
      color: #333333;
      &:hover {
        color: #000;
      }
    }
  }
}
</style>
