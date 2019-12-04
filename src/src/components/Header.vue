<template>
  <div id="header">
      <button class="menu-button">開く</button>
      <button class="menu-button">保存</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      sampleProp: 123
    };
  }
};
</script>

<style lang="scss" scoped>
$headerBackgroundColor: #0e521d;
#header {
  width: 100%;
  height: 48px;
  background-color: $headerBackgroundColor;
  position: fixed;

  .menu-button {
      width: 100px;
      height: 100%;
      background-color: transparent;
      color: white;
      border: none;
      outline: none;

      &:hover {
          background-color: #127a29;
      }
  }
}
</style>