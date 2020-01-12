<template>
  <div id="memo-editor">
    <editor-main></editor-main>
    <!-- <editor-side></editor-side> -->
  </div>
</template>

<script>
import EditorMain from "./EditorMain.vue";
import EditorSide from "./EditorSide.vue";

export default {
  name: "MemoEditor",
  components: {
    EditorMain,
    EditorSide
  },
};
</script>

<style lang="scss" scoped>
$editorBorderColor: #aaaaaa;

#memo-editor {
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  border: none;
  box-shadow: 0 0 3px 2px rgba(black, 0.3);
}
</style>