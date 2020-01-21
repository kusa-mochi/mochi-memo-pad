<template>
  <editable v-bind:value="this.$store.state.editingData[id].data" v-on:input="OnStringUpdated"></editable>
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
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
  }
}
</style>