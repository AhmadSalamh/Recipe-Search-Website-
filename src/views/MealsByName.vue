<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model.trim="keyWord"
      class="
        rounded
        border-2 border-gray-200
        w-full
        focus:border-orange-300 focus:outline-none
      "
      placeholder="Search for meals"
      @change="searchMeals"
    />
    <p v-show="textError" class="text-red-700 text-1xl pt-4">
      Pleas Enter anything to search for meals
    </p>
  </div>
  <loader v-if="this.$store.state.searchedMeals.loading"></loader>
  <ul v-else class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <meal-item v-for="meal in meals" :key="meal" :meal="meal"></meal-item>
  </ul>
  <p
    class="text-center uppercase font-bold p-8 text-orange-500"
    v-show="!this.$store.state.searchedMeals.data"
  >
    we don't have any results yet
  </p>
</template>
<script>
import YouTubeButton from "../components/YouTubeButton.vue";

export default {
  components: {
    YouTubeButton,
  },
  data() {
    return {
      keyWord: "",
      textError: false,
    };
  },
  computed: {
    meals() {
      return this.$store.state.searchedMeals.data;
    },
  },
  methods: {
    searchMeals() {
      if (this.keyWord === "") {
        this.textError = true;
      } else {
        this.textError = false;
        this.$store.dispatch("searchMeals", this.keyWord);
      }
    },
  },
  mounted() {
    this.keyWord = this.$route.params.name;
    this.$store.dispatch("searchMeals", this.keyWord);
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