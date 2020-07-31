<template>
  <div class="banner">
    <Carousel itemHeight="200px">
      <CarouselItem
        v-for="(banner, ind) in banners"
        :key="ind"
        class="banner-img"
      >
        <img :src="banner.imageUrl" alt="" />
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import { getBanner } from '../../../api';
import { Carousel, CarouselItem } from '@/components/carousel';

export default {
  name: 'nete-banner',
  components: {
    Carousel,
    CarouselItem,
  },
  data() {
    return {
      banners: [],
    };
  },
  async created() {
    const { banners } = await getBanner();
    this.banners = banners;
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
  //   position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>
