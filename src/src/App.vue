<template>
  <div id="app">
    <Header></Header>
    <Editor></Editor>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Editor from "./components/Editor.vue";

export default {
  name: "app",
  components: {
    Header,
    Editor
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
