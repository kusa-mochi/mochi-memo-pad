<template>
  <div id="editor-main">
      <edit-object v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]"></edit-object>
  </div>
</template>

<script>
import EditObject from "./EditObject.vue";

export default {
  name: "EditorMain",
  components: {
    EditObject
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
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>