<template>
  <a
    :href="srcOfButton"
    target="_blank"
    :class="[
      `ve-btn-${color}`,
      `ve-btn-bg-${bgColor}`,
      `ve-btn-hover-${hoverColor}`,
      ,
    ]"
    class="
      inline-block
      px-3
      py-2
      mt-2
      w-fit
      rounded
      border-2
      hover:text-white
      transition-colors
    "
  >
    <slot>YouTube</slot>
  </a>
</template>
<script>
export default {
  props: ["srcOfButton", "bgColor", "color", "hoverColor"],
};
</script>
<style lang="scss">
.ve-btn {
  &-black {
    color: #000;
  }
  &-white {
    color: #fff;
  }

  &-bg-red {
    background: #ed1313;
  }
  &-bg-purple {
    background-color: purple;
    &:hover {
      color: purple !important;
      border-color: purple;
    }
  }

  &-hover-white {
    &:hover {
      background-color: #fff;
    }
  }
  &-hover-red {
    &:hover {
      background: #ed1313;
    }
  }
}
</style>