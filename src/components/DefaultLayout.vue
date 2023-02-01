<template>
  <div class="bg-gray-100 min-h-screen">
    <navbar></navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
  <script setup>
import Navbar from "../components/Navbar.vue";
components: {
  Navbar;
}
</script>
<style scoped>
</style>