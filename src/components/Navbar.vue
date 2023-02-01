<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center text-3xl  font-semibold h-full px-5 text-orange-500"
      >Home</router-link
    >
    <div class="h-full">
      <router-link
        :to="{ name: 'byName' }"
        class="
          inline-flex
          items-center
          px-2
          h-full
          hover:bg-purple-100
          transition-colors
        "
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="
          inline-flex
          items-center
          px-2
          h-full
          hover:bg-purple-100
          transition-colors
        "
      >
        Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="
          inline-flex
          items-center
          px-2
          h-full
          hover:bg-purple-100
          transition-colors
        "
      >
        Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>
<script setup>
</script>
<style scoped>
</style>