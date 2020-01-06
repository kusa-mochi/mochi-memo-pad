<template>
  <div class="image-editor-menu">
    <button>
      <icon icon-name="three-dots" size="24"></icon>
    </button>
    <button>
      <icon icon-name="three-dots" size="24"></icon>
    </button>
    <button>
      <icon icon-name="three-dots" size="24"></icon>
    </button>
  </div>
</template>

<script>
import Icon from "../Icon.vue";
export default {
  name: "ImageEditorMenu",
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/assets";
.image-editor-menu {
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
  }
}
</style>