<template>
  <div id="editor"></div>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      sampleProp: 123
    };
  }
};
</script>

<style lang="scss" scoped>
$editorBorderColor: #aaaaaa;
#editor {
  width: 800px;
  height: 2000px;
  border-left: 1px $editorBorderColor solid;
  border-right: 1px $editorBorderColor solid;
}
</style>