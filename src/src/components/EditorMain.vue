<template>
  <div id="editor-main">
    <edit-object
      v-for="(item, idx) in this.$store.state.editingData"
      v-bind:ref="idx"
      v-bind:key="idx"
      v-bind:id="idx"
      v-on:focus-next="OnFocusNext"
    ></edit-object>
  </div>
</template>

<script>
import EditObject from "./EditObject.vue";

export default {
  name: "EditorMain",
  methods: {
    OnFocusNext(nextId) {
      this.$refs[nextId]["0"].FocusToParagraphEditor();
    }
  },
  components: {
    EditObject
  }
};
</script>

<style lang="scss" scoped>
#editor-main {
  width: 800px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>