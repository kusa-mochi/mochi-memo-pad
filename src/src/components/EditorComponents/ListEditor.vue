<template>
  <div class="list-editor">
    <list-editor-item v-bind:itemData="this.$store.state.editingData[this.id].data"></list-editor-item>
  </div>
</template>

<script>
import ListEditorItem from "./ListEditorItem.vue";

export default {
  name: "ListEditor",
  props: ["id"],
  computed: {
    RawHTML() {
      return GetRawHTMLlet(this.$store.state.editingData[this.id].data);
    }
  },
  methods: {
    GetRawHTMLlet(collection) {
      if (collection.length === 0) return "";

      let output = "<ul>";
      collection.forEach(item => {
        output += "<li>";
        output += item.content;
        if (item.children.length > 0) {
          output += GetRawHTMLlet(item.children);
        }
        output += "</li>";
      });
      output += "</ul>";
      return output;
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