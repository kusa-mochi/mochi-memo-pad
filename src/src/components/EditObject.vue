<template>
  <div class="edit-object">
    <div class="edit-object__body">abcdefghijklmnop</div>
    <div class="edit-object__tool-icons">menu icons are here.</div>
  </div>
</template>

<script>
export default {
  name: "EditObject",
  data() {
    return {
      sampleProp: 123
    };
  }
};
</script>

<style lang="scss" scoped>
$tool_icon_height: 32px;
@import "../assets/colors";

.edit-object {
  position: relative;
  width: 100%;
  height: 100px;

  .edit-object__body {
  }

  .edit-object__tool-icons {
    position: absolute;
    top: -$tool_icon_height;
    left: 0;
    height: $tool_icon_height;
    background-color: $theme_color;
    color: white;
    opacity: 0;
  }

  &:hover {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.4);

    .edit-object__tool-icons {
      opacity: 1;
    }
  }
}
</style>