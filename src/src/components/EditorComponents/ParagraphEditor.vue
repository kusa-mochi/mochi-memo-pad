<template>
  <textarea
    ref="editorBody"
    class="paragraph-editor"
    v-model="this.$store.state.editingData[this.id].data"
    v-on:keydown.enter.exact.prevent
    v-on:keyup.enter.exact="AddEditObject"
    v-on:keydown.enter.shift.exact="NewLine"
  ></textarea>
</template>

<script>
export default {
  name: "ParagraphEditor",
  props: {
    id: {
      type: Number,
      required: true
}
  },
  methods: {
    AddEditObject() {
      const date = new Date();
      this.$store.state.editingData.splice(this.id + 1, 0, {
        editorType: "paragraph",
        data: "Hi, I'm Mochi!!"
      });
      this.$emit("focus-next");
    },
    Focus() {
      this.$refs.editorBody.focus();
    },
    NewLine() {
    }
  }
};
</script>

<style lang="scss" scoped>
.paragraph-editor {
  display: block;
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  text-align: left;
  border: none;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
  }
}
</style>