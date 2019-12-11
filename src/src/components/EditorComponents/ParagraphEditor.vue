<template>
  <div class="paragraph-editor" role="textbox" contenteditable="true">{{this.paragraphBody}}</div>
</template>

<script>
export default {
  name: "ParagraphEditor",
  props: [
    "id"
  ],
  computed: {
    paragraphBody() {
      return this.$store.state.editingData[this.id].rawHTML.replace("<p>", "").replace("</p>", "");
    }
  }
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