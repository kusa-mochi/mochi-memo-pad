<template>
  <div id="editor">
    <div class="editor__main"></div>
    <div class="editor__side"></div>
  </div>
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
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
  border-left: 1px $editorBorderColor solid;
  border-right: 1px $editorBorderColor solid;

  .editor__main {
    width: 800px;
    height: 2000px;
  }

  .editor__side {
    width: 300px;
    height: 2000px;
    background-color: #f2f2f2;
  }
}
</style>