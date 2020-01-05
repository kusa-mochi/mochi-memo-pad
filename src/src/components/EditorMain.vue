<template>
  <div id="editor-main">
    <draggable class="editor-main__draggable" v-model="this.$store.state.editingData" group="editingData" v-on:start="drag=true" v-on:end="drag=false">
      <edit-object v-for="(item, idx) in this.$store.state.editingData" v-bind:key="idx" v-bind:id="idx"></edit-object>
    </draggable>
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
  padding: 0 32px;
  overflow-x: hidden;
  overflow-y: scroll;

  .editor-main__draggable {
    background-color: white;
  }
}
</style>