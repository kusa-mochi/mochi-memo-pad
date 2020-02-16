<template>
  <div class="list-editor-menu">
    <button v-on:click="Outdent">
      <icon icon-name="outdent" size="24"></icon>
    </button>
    <button v-on:click="Indent">
      <icon icon-name="indent" size="24"></icon>
    </button>
  </div>
</template>

<script>
import Icon from "../Icon.vue";
export default {
  name: "ListEditorMenu",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    Indent() {},
    Outdent() {}
  },
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/assets";
.list-editor-menu {
  height: $tool_icon_height;
  border: 1px $theme_color solid;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  button {
    height: 100%;
    padding: 3px;
    background-color: white;
    border: none;
    user-select: none;
  }
}
</style>