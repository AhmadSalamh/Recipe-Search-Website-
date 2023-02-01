<template lang="">
  <p class="text-gray-700 font-bold text-4xl text-center" v-if="!meals.length">There Is No Data </p>
  <ul v-else class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <meal-item v-for="meal in meals" :key="meal.idMeal" :meal="meal"></meal-item>
  </ul>
  
</template>
<script>
export default {
  computed: {
    meals() {
      return this.$store.state.searchByIngredient;
    },
  },
  mounted() {
    this.$store.dispatch(
      "searchMealsByIngredient",
      this.$route.params.byIngredient
    );
  },
};
</script>
<style lang=""></style>
