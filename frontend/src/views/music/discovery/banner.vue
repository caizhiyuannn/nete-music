<template>
  <div class="banner">
    <div v-for="(banner, ind) in banners" :key="ind" class="banner-img">
      <img :src="banner.imageUrl" alt="" />
    </div>
  </div>
</template>

<script>
import { getBanner } from '../../../api';

export default {
  name: 'nete-banner',
  data() {
    return {
      banners: [],
    };
  },
  async created() {
    const { banners } = await getBanner();
    this.banners = banners;
    console.log(banners);
  },
};
</script>
<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 230px;
  overflow: hidden;
}
.banner-img img {
  width: 540px;
  height: 200px;
//   position: absolute;
  border-radius: 8px;

}
.banner-img {
    position: absolute;
}
.banner-img:nth-of-type(1) {
    transform: translateX(-20%) scale(.8);
    z-index: 1;
}

.banner-img:nth-of-type(2) {
    transform: translateX(20%) scale(1);
    z-index: 2;
}

.banner-img:nth-of-type(3) {
    transform: translateX(60%) scale(.8);
    z-index: 1;
}
</style>
