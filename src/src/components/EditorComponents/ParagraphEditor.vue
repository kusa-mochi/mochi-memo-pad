<template>
  <div class="paragraph-editor" role="textbox" contenteditable="true">{{this.$store.state.editingData[1].rawHTML}}</div>
</template>

<script>
export default {
  name: "ParagraphEditor",
  props: [
    "id"
  ]
};
</script>

<style lang="scss" scoped>
.paragraph-editor {
  padding: 8px 16px;
  font-size: 14px;
  text-align: left;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
  }
}
</style>