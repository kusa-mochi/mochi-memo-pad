<template>
  <div class="html-editor">
    <div
      v-if="this.$store.state.editingData[this.id].isVisualized"
      class="visual-preview"
      v-html="this.$store.state.editingData[this.id].data"
    ></div>
    <editable
      v-else
      font-size="14"
      padding-top="8"
      padding-right="0"
      padding-bottom="8"
      padding-left="0"
      v-bind:value="this.$store.state.editingData[id].data"
      v-on:input="OnStringUpdated"
    ></editable>
  </div>
</template>

<script>
import Editable from "./Editable.vue";

export default {
  name: "HtmlEditor",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    OnStringUpdated(newString) {
      this.$store.dispatch("updateParagraph", {
        string: newString,
        idx: this.id
      });
    }
  },
  components: {
    Editable
  }
};
</script>

<style lang="scss" scoped>
.html-editor {
  .visual-preview {
    outline: none;
  }
}
</style>