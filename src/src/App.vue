<template>
  <div id="app">
    <memo-header></memo-header>
    <div class="editor-container">
      <memo-editor></memo-editor>
    </div>
  </div>
</template>

<script>
import MemoHeader from "./components/MemoHeader.vue";
import MemoEditor from "./components/MemoEditor.vue";

export default {
  name: "app",
  components: {
    MemoHeader,
    MemoEditor
  }
};
</script>

<style lang="scss">
@import "assets/assets";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  background-color: rgba($theme_color, 0.1);
}
.mochi-icon {
  fill: $theme_color;
}
#app {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;

  .editor-container {
    position: relative;
    height: calc(100% - #{$header_height});
    background-color: white;
  }
}

@media print {
  html, body {
    background-color: transparent;
  }
}
</style>
