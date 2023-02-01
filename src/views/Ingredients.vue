<template>
  <div class="p-8">
    <loader v-if="!ingredients.length"></loader>
    <div v-else>
      <h1 class="text-4xl font-bold mb-6 text-orange-500">Ingredients</h1>
      <input
        type="text"
        v-model.trim="keyWord"
        class="
          rounded
          border-2 border-gray-200
          w-full
          focus:border-orange-300 focus:outline-none
        "
        placeholder="Search for ingredients"
      />
      <section class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
        <router-link
          v-for="ingredient in computedIngredient"
          :key="ingredient.idIngredient"
          :to="{
            name: 'byIngredient',
            params: { byIngredient: ingredient.strIngredient },
          }"
          class="block bg-white rounded p-3 mb-3 shadow"
        >
          <h3 class="text-2xl font-bold mb-2">
            {{ ingredient.strIngredient }}
          </h3>
        </router-link>
      </section>
    </div>
  </div>
</template>
<script>
import axiosClient from "../axiosClient";

export default {
  data() {
    return {
      ingredients: [],
      keyWord: "",
    };
  },
  computed: {
    computedIngredient() {
      return this.ingredients.filter((i) =>
        i.strIngredient.toLowerCase().includes(this.keyWord.toLowerCase())
      );
    },
  },
  mounted() {
    axiosClient.get(`list.php?i=list`).then(({ data }) => {
      this.ingredients = data.meals;
    });
  },
};
</script>
<style scoped lang="scss">
input {
  &:focus {
    box-shadow: unset;
  }
}
</style>
