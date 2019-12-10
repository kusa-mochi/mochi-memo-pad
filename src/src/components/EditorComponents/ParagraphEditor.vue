<template>
  <div class="paragraph-editor" role="textbox" contenteditable="true"></div>
</template>

<script>
export default {
  name: "ParagraphEditor",
  data() {
    return {
      sampleProp: 123
    };
  }
};
</script>

<style lang="scss" scoped>
.paragraph-editor {
  padding: 16px;
  font-size: 20px;
  text-align: left;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
  }
}
</style>