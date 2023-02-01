<template>
  <div class="max-w-[800px] mx-auto p-4">
    <h1 class="text-4xl font-bold mb-5 mt-4">{{ meal.strMeal }}</h1>
    <img class="max-w-[100%]" :src="meal.strMealThumb" alt=" meal.strMeal" />
    <div class="grid grid-cols-1 mt-5 sm:grid-cols-3" text-lg py-2>
      <div>
        <strong class="font-bold">Category:</strong>
        {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong>
        {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong>
        {{ meal.strTags }}
      </div>
    </div>
    <div class="my-3 text-gray-600 text-xl">
      <read-more
        more-str="Read more"
        :text="mealStrInstructions"
        link="#"
        less-str="Read less"
        :max-chars="500"
      ></read-more>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-1">Ingredients</h2>
        <ul>
          <template v-for="(item, index) in new Array(20)" :key="index">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(item, index) in new Array(20)" :key="index">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }} . {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="flex gap-x-2">
      <you-tube-button
        :srcOfButton="meal.strYoutube"
        color="black"
        hoverColor="red"
        >Go To YouTube</you-tube-button
      >
      <you-tube-button
        :srcOfButton="meal.strSource"
        color="white"
        hoverColor="white"
        bgColor="purple"
        >View Original Source</you-tube-button
      >
    </div>
    <div class="fixed-loader" v-show="loader">
      <loader></loader>
    </div>
  </div>
</template>
<script>
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";
export default {
  components: { YouTubeButton },
  data() {
    return {
      meal: [],
      loader: true,
    };
  },
  computed: {
    mealStrInstructions() {
      return "" + this.meal.strInstructions;
    },
  },
  mounted() {
    setTimeout(() => {
      this.loader = false;
    }, 1000);
    axiosClient
      .get(`lookup.php?i=${this.$route.params.id}`)
      .then(({ data }) => {
        this.meal = data.meals[0] || {};
      });
  },
};
</script>
<style>
#readmore {
  color: #f97316;
  font-weight: 600;
}
.fixed-loader {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: #f3f4f6;
}
</style>