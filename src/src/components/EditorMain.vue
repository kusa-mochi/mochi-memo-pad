<template>
  <div id="editor-main">
      <edit-object v-for="item in this.$store.state.editingData" v-bind:key="item.id" v-bind:id="item.id"></edit-object>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import EditObject from "./EditObject.vue";

export default {
  name: "EditorMain",
  components: {
    Draggable,
    EditObject
  },
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