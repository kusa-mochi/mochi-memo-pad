<template>
  <div class="html-editor">
    <div
      v-if="this.$store.state.editingData[this.id].isVisualized"
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
    }
  }
};
</script>

<style lang="scss" scoped>
.html-editor {
  .visual-editor,
  .code-editor {
    outline: none;
  }

  .visual-editor {
  }

  .code-editor {
    padding: 16px 0;
    font-size: 14px;
    &:focus {
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
    }
  }

  .invalid-notification {
    // TODO: show this block when user input invalid code on editor.
    display: none;
  }
}
</style>