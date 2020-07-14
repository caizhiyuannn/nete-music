<template>
  <div class="footer">
    <div class="payinfo">
      <div class="playavatar"></div>
      <div class="musicinfo">
        <div class="music-name">
          <span id="song-name">拇指姑娘</span> - <span>陈亦云</span>
        </div>
        <div class="music-progress">
          <span>00:00</span> / <span>04:32</span>
        </div>
      </div>
    </div>
    <div class="playop">
      <div class="like">
        <span class="material-icons">
          favorite_border
        </span>
      </div>
      <div class="opaction">
        <div class="pre">
          <span class="material-icons">skip_previous</span>
        </div>
        <div class="action">
          <span class="material-icons">play_circle_filled</span>
        </div>
        <div class="next">
          <span class="material-icons">skip_next</span>
        </div>
      </div>
      <div class="share">
        <span class="material-icons">open_in_new</span>
      </div>
    </div>
    <div class="playmode">
      <div class="loop">
        <span class="material-icons">repeat</span>
      </div>
      <div class="playlist">
        <span class="material-icons">playlist_play</span>
      </div>
      <div class="volume">
        <span class="material-icons-outlined">volume_mute</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nete-footer',
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > div {
    width: 300px;
  }
}

.payinfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;

  .playavatar {
    width: 42px;
    height: 42px;
    background-color: #f3f3f3;
    margin: 0 8px;

    .music-progress span {
      color: #b5b5b5;
    }
  }
}

.playop {
  display: flex;
  flex-direction: row;
  align-items: center;
  & > div {
    display: block;
    margin: 0 16px;
  }

  .like span {
    display: block;
    text-align: center;
    font-size: 18px;
  }

  .opaction {
    display: flex;
    flex-direction: row;
    align-items: center;
    & div {
      margin: 0 12px;
    }
    .pre span,
    .next span {
      width: 18px;
      height: 18px;
      color: #d13c37;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
    .action span {
      font-size: 46px;
      color: #d13c37;
    }
  }

  .share span {
    font-size: 18px;
    display: block;
    text-align: center;
  }
}

.playmode {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 16px;
  & > div {
    margin: 0 10px;
    & span,
    img {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
    }
  }
}
</style>
