<template>
  <div
    class="image-editor"
    role="textbox"
    contenteditable="true"
  >{{this.$store.state.editingData[this.id].data}}</div>
</template>

<script>
export default {
  name: "ImageEditor",
  props: {
    id: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.image-editor {
  padding: 8px 16px;
  font-size: 14px;
  text-align: left;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
  }
}
</style>