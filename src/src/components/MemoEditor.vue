<template>
  <div id="memo-editor">
    <editor-main></editor-main>
    <editor-side></editor-side>
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
  data() {
    return {
      sampleProp: 123
    };
  }
};
</script>

<style lang="scss" scoped>
$editorBorderColor: #aaaaaa;

#memo-editor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  border-left: 1px $editorBorderColor solid;
  border-right: 1px $editorBorderColor solid;
}
</style>