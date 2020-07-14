<template>
  <div class="newsong">
    <h3 style="padding: 0 8px">最新音乐</h3>
    <div class="card-container">
      <div class="card-item" v-for="(song, idx) in songs" :key="idx">
        <div class="avator">
          <img :src="song.picUrl" />
        </div>
        <div class="top">{{ idx < 9 ? `0${idx + 1}` : idx + 1 }}</div>
        <div class="info">
          <span>{{ song.name }}</span>
          <span>{{ song.song.artists[0].name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getNewSong } from '@/api';
export default {
  name: 'nete-newsong',
  data() {
    return {
      songs: [],
    };
  },
  async created() {
    const { result } = await getNewSong();
    this.songs = result;
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
  flex-wrap: wrap;

  .card-item {
    width: 50%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .avator img {
    width: 60px;
    display: block;
    border-radius: 3px;
  }

  .top {
    padding: 0 8px;
  }
  .info span {
    display: block;
    &:last-child {
      color: #676767;
    }
  }
}
</style>
