<template>
  <div id="editor-main">
      <edit-item v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]"></edit-item>
  </div>
</template>

<script>
import EditItem from "./EditItem.vue";

export default {
  name: "EditorMain",
  components: {
    EditItem
  },
  data() {
    return {
      sampleProp: 123
    };
  }
};
</script>

<style lang="scss" scoped>
#editor-main {
  width: 800px;
  height: 100%;
  overflow-y: scroll;
}
</style>