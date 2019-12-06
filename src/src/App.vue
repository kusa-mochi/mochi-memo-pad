<template>
  <div id="app">
    <memo-header></memo-header>
    <memo-editor></memo-editor>
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
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
}
</style>
