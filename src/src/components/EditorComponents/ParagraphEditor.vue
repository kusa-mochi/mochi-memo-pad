<template>
  <editable
    padding-top="12"
    padding-right="8"
    padding-bottom="12"
    padding-left="8"
    v-bind:value="this.$store.state.editingData[id].data"
    v-on:input="OnStringUpdated"
  ></editable>
</template>

<script>
import Editable from "./Editable.vue";

export default {
  name: "ParagraphEditor",
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
.paragraph-editor {
  padding: 8px 16px;
  font-size: 14px;
  text-align: left;
}
</style>