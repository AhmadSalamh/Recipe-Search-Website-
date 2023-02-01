<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <router-link
      :to="{ name: 'home' }"
      class="
        inline-flex
        items-center
        text-3xl
        font-semibold
        h-full
        px-5
        text-orange-500
      "
      >Home</router-link
    >
    <div
      class="overlay"
      :class="{ show: showMenu }"
      @click="hideMenuRes()"
    ></div>
    <img
      width="20"
      class="md:hidden mr-4 cursor-pointer"
      height="20"
      src="/public/list.svg"
      alt=""
      @click="showMenuRes()"
    />
    <div class="h-full responsive-menu" :class="{ show: showMenu }">
      <router-link
        :to="{ name: 'byName' }"
        class="
          inline-flex
          items-center
          px-2
          md:h-full
          hover:bg-purple-100
          transition-colors
        "
        @click="hideMenuRes()"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="
          inline-flex
          items-center
          px-2
          md:h-full
          hover:bg-purple-100
          transition-colors
        "
        @click="hideMenuRes()"
      >
        Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="
          inline-flex
          items-center
          px-2
          md:h-full
          hover:bg-purple-100
          transition-colors
        "
        @click="hideMenuRes()"
      >
        Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    showMenuRes() {
      this.showMenu = true;
    },
    hideMenuRes() {
      this.showMenu = false;
    },
  },
};
</script>
<style scoped lang="scss">
.responsive-menu,
.overlay {
  @media (max-width: 768px) {
    position: fixed;
    height: 100vh;
    right: -1000%;
    transition: all 0.5s ease-in-out;
    z-index: 15;
    top: 0;
    &.show {
      right: 0;
    }
  }
}
.responsive-menu {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 50px;
  padding-left: 10px;

  background: #f3f4f6;
  width: fit-content;
  min-width: 220px;
}
.overlay {
  width: 100vw;
  background-color: #00000080;
}
</style>