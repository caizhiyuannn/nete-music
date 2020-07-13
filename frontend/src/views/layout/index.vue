<template>
  <div id="layout">
    <header>
      <div class="header-left">
        <div class="fn">
          <button id="home"></button>
          <button id="min"></button>
          <button id="fullscreen"></button>
        </div>
        <span class="material-icons-outlined">
          arrow_back_ios
        </span>
        <span class="material-icons-outlined">
          arrow_forward_ios
        </span>
      </div>
      <nete-navigate />
      <div class="right-side">
        <input type="text" placeholder="搜索" class="search" />
        <span class="material-icons-outlined">settings</span>
      </div>
    </header>
    <main>
      <nete-menu />
      <router-view></router-view>
    </main>
    <footer>footer bar</footer>
  </div>
</template>

<script>
import Menu from '@/components/menu';
import Navigate from '@/components/navigate';
export default {
  name: 'Layout',
  components: {
    'nete-menu': Menu,
    'nete-navigate': Navigate,
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/common';

$header-margin-top: 24px;

#layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .header-left {
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    flex-shrink: 0;
    width: 200px;
    background-color: $header-left-background;
    color: $header-left-color;
    & span {
      font-size: 13px;
      display: flex;
      margin-left: 16px;
      margin-top: $header-margin-top;
      &:nth-of-type(2) {
        margin-right: 8px;
      }
    }
    justify-content: flex-end;
  }

  header,
  footer,
  main {
    display: flex;
    flex-direction: row;
  }

  header {
    height: 50px;
    width: 100%;
  }
  main {
    flex-grow: 1;
  }
  footer {
    height: 60px;
    width: 100%;
    background-color: $footer-background;
    color: $footer-color;
  }

  .right-side {
    width: 320px;

    & .search {
      outline: none;
      border-radius: 40px;
    }
  }
}

.fn {
  width: 100%;
  height: 100%;
  display: flex;
  & button {
    border-radius: 50%;
    margin-top: 14px;
    height: 12px;
    width: 12px;
    display: block;
    border: none;
    margin-left: 6px;
    outline: none;
  }
}
#home {
  background-color: #fc5b57;
}

#min {
  background-color: #e5bf3c;
}
#fullscreen {
  background-color: #33c849;
}
</style>
