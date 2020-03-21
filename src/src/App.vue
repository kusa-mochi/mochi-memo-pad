<template>
  <v-app>
    <v-app-bar app color="primary" dark dense flat>
      <memo-header></memo-header>
    </v-app-bar>

    <v-content class="memo-editor-container">
      <memo-editor></memo-editor>
    </v-content>
  </v-app>
</template>

<script>
import MemoHeader from "./components/MemoHeader";
import MemoEditor from "./components/MemoEditor";

export default {
  name: "App",

  components: {
    MemoHeader,
    MemoEditor
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
@import "assets/assets";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  
  &::-webkit-scrollbar {
    display: none;
  }
}

#app {
  width: 100%;
  height: 100%;
}

.memo-editor-container {
  width: 100%;
  height: calc(100% - #{$header_height});
}
</style>
