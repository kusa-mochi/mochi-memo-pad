<template>
  <ul>
    <li v-for="item in itemData" v-bind:key="item.id" role="textbox" contenteditable="true">
      {{item.content}}
      <list-editor-item v-if="item.children.length > 0" v-bind:item-data="item.children"></list-editor-item>
    </li>
  </ul>
</template>

<script>
import ListEditorItem from "./ListEditorItem.vue";

export default {
  name: "ListEditorItem",
  props: ["itemData"],
  components: {
    ListEditorItem
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0 0 0 32px;
  list-style-type: disc;
}

li {
  outline: none;
}
</style>