<template>
  <section class="p-6">
    <h1 class="text-orange-600 text-4xl font-bold mb-5">Random Meals</h1>
    <swiper
      :space-between="50"
      :cssMode="true"
      :mousewheel="true"
      :keyboard="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '0': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '576': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '922': {
          slidesPerView: 3,
        },
      }"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="meal in meals" :key="meal.idMeal">
        <meal-item :meal="meal"></meal-item>
      </swiper-slide>
    </swiper>
  </section>
</template>
<script>
import axiosClient from "../axiosClient";
import { Autoplay, Mousewheel } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Mousewheel],
    };
  },
  data() {
    return {
      meals: [],
    };
  },
  async mounted() {
    for (let i = 0; i < 12; i++) {
      await axiosClient.get("random.php").then(({ data }) => {
        this.meals.push(data.meals[0]);
      });
    }
  },
};
</script>
<style>
.swiper-horizontal.swiper-css-mode > .swiper-wrapper {
  padding-block: 10px;
}
</style>