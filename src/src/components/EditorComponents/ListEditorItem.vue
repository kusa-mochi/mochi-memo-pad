<template>
  <ul v-if="listType === 'list'">
    <li v-for="item in itemData" v-bind:key="item.id" role="textbox">
      {{item.content}}
      <list-editor-item v-if="item.children.length > 0" v-bind:item-data="item.children" v-bind:list-type="listType"></list-editor-item>
    </li>
  </ul>
  <ol v-else-if="listType === 'number-list'">
    <li v-for="item in itemData" v-bind:key="item.id" role="textbox">
      {{item.content}}
      <list-editor-item v-if="item.children.length > 0" v-bind:item-data="item.children" v-bind:list-type="listType"></list-editor-item>
    </li>
  </ol>
</template>

<script>
import ListEditorItem from "./ListEditorItem.vue";

export default {
  name: "ListEditorItem",
  props: ["itemData", "listType"],
  components: {
    ListEditorItem
  }
};
</script>

<style lang="scss" scoped>
ul, ol {
  padding: 0 0 0 32px;
}

li {
  outline: none;
}
</style>