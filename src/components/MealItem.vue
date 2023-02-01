<template >
  <li class="bg-white shadow rounded-xl pb-5 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        class="rounded-t-xl w-full h-80 object-cover"
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo delectus
        quo a tenetur, voluptates veritatis aspernatur blanditiis.
      </p>
    </div>
    <div class="p-3">
      <you-tube-button
        color="black"
        hoverColor="red"
        :srcOfButton="meal.strYoutube"
      ></you-tube-button>
    </div>
  </li>
</template>
<script>
import YouTubeButton from "./YouTubeButton.vue";
export default {
  components: { YouTubeButton },
  props: ["meal"],
};
</script>
<style lang="scss" scoped>
li {
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    transform: scale(1.02);
    border-color: rgba(255, 166, 0, 0.669);
  }
}
</style>>
