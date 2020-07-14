<template>
  <div class="newsong">
    <h3 style="padding: 0 8px">最新音乐</h3>
    <div class="card-container">
      <div class="card-item" v-for="(song, idx) in songs" :key="idx">
        <div class="avator">
          <img :src="song.picUrl" />

          <span class="material-icons">
            play_arrow
          </span>
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
    padding: 8px;
    &:hover {
      background-color: #f5f5f5;
      border-radius: 4px;
    }
  }

  .avator img {
    position: absolute;
    width: 60px;
    display: block;
    border-radius: 3px;
    cursor: pointer;
  }

  .avator {
    width: 60px;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .avator span {
    color: #d13c37;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      width: 26px;
      height: 26px;
      background-color: rgba($color: #fff, $alpha: 0.3);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      z-index: -1;
      border-radius: 50%;
    }
  }

  .top {
    padding: 0 8px;
  }
  .info span {
    display: block;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;

    &:last-child {
      cursor: pointer;
      color: #676767;
      &:hover {
        color: #333333;
      }
    }
  }
}
</style>
