<template>
  <section>
    <div class="flex justify-center gap-4 mt-6">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="hover:text-orange-500 font-medium transition-colors"
      >
        <span>{{ letter }} </span>
      </router-link>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <meal-item v-for="meal in meals" :key="meal" :meal="meal"></meal-item>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      letters: "ABCDEFGHIKLMNOPQRSTUVWXYZ".split(""),
    };
  },
  computed: {
    meals() {
      return this.$store.state.searchByLetter;
    },
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      this.$store.dispatch("searchMealsByLetter", this.$route.params.letter);
    },
  },
  mounted() {
    this.$store.dispatch("searchMealsByLetter", this.$route.params.letter);
  },
};
</script>
<style lang="">
</style>