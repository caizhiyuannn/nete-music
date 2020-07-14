<template>
  <div id="layout">
    <header>
      <div class="header-left">
        <div class="fn">
          <button id="home"></button>
          <button id="min"></button>
          <button id="fullscreen"></button>
        </div>
        <span class="material-icons">
          arrow_back_ios
        </span>
        <span class="material-icons">
          arrow_forward_ios
        </span>
      </div>
      <nete-navigate />
      <div class="right-side">
        <div class="search">
          <input type="text" placeholder="搜索" />
          <i class="material-icons">search</i>
        </div>
        <span class="material-icons-outlined">settings</span>
      </div>
    </header>
    <main>
      <nete-menu />
      <router-view></router-view>
    </main>
    <footer>
      <nete-footer />
    </footer>
  </div>
</template>

<script>
import Menu from '@/components/menu';
import Navigate from '@/components/navigate';
import Footer from './footer';
export default {
  name: 'Layout',
  components: {
    'nete-menu': Menu,
    'nete-navigate': Navigate,
    'nete-footer': Footer,
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/common';

#layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  header {
    padding: 8px;
    background-color: $header-left-background;
  }
  .header-left {
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    flex-shrink: 0;
    width: 200px;
    align-items: center;
    color: $header-left-color;
    & span {
      font-size: 13px;
      display: flex;
      margin-left: 16px;
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
    display: flex;
    align-items: center;
    padding: 0 8px;
    & > div {
      margin: 0 16px;
    }
    .search {
      position: relative;
    }
    .search input[type='text'] {
      outline: none;
      border: none;
      border-radius: 40px;
      background-color: #ededed;
      height: 24px;
      padding-left: 24px;

      &:focus {
        background-color: #f2f2f2;
      }
    }

    .search i {
      position: absolute;
      left: 0;
      font-size: 20px;
      top: 0;
      padding: 3px;
    }
  }
}

.fn {
  width: 100%;
  height: 100%;
  display: flex;
  & button {
    border-radius: 50%;
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
