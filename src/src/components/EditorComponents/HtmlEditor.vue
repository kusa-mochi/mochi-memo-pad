<template>
  <div class="html-editor">
    <div
      v-if="isVisualizing"
      class="visual-editor"
      v-html="this.$store.state.editingData[this.id].data"
    ></div>
    <div
      v-else
      class="code-editor"
      contenteditable="true"
    >{{this.$store.state.editingData[this.id].data}}</div>
    <div class="invalid-notification">code syntax error.</div>
  </div>
</template>

<script>
export default {
  name: "HtmlEditor",
  props: {
    id: {
      type: Number,
      default: 1
    },
    isVisualizing: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.html-editor {
  .visual-editor {
  }

  .code-editor {
  }

  .invalid-notification {
    // TODO: show this block when user input invalid code on editor.
    display: none;
  }
}
</style>