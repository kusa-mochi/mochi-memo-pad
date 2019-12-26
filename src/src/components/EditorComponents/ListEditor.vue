<template>
  <div class="list-editor" contenteditable="true">
    <list-editor-item
      v-bind:itemData="this.$store.state.editingData[this.id].data"
      v-bind:list-type="listType"
    ></list-editor-item>
  </div>
</template>

<script>
import ListEditorItem from "./ListEditorItem.vue";

export default {
  name: "ListEditor",
  props: {
    id: {
      type: Number,
      required: true
    },
    listType: {
      type: String,
      default: "list"
    }
  },
  components: {
    ListEditorItem
  }
};
</script>

<style lang="scss" scoped>
.list-editor {
  padding: 8px 16px 8px 8px;
  font-size: 14px;

  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
  }
}
</style>