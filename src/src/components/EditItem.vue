<template>
  <div id="edit-item">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EditItem",
  data() {
    return {
      sampleProp: 123
    };
  }
};
</script>

<style lang="scss" scoped>
</style>