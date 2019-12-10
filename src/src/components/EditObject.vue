<template>
  <div class="edit-object" tabindex="0">
    <div class="edit-object__content">
      <div class="edit-object__body">
        <paragraph-editor></paragraph-editor>
      </div>
      <div class="edit-object__tool-icons">menu icons are here.</div>
      <div class="edit-object__add-prev-button">
        <plus-icon></plus-icon>
      </div>
      <div class="edit-object__add-next-button">
        <plus-icon></plus-icon>
      </div>
    </div>
  </div>
</template>

<script>
import PlusIcon from "./icons/PlusIcon.vue";
import ParagraphEditor from "./EditorComponents/ParagraphEditor.vue";

export default {
  name: "EditObject",
  components: {
    PlusIcon,
    ParagraphEditor
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/colors";
$tool_icon_height: 24px;

.edit-object {
  position: relative;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;

  .edit-object__content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .edit-object__body {
    width: 100%;
    height: 100%;
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

  .edit-object__add-prev-button,
  .edit-object__add-next-button {
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 12px;
    opacity: 0;
    cursor: pointer;
  }

  .edit-object__add-prev-button {
    top: -12px;
    left: calc(50% - 12px);
  }

  .edit-object__add-next-button {
    top: calc(100% - 12px);
    left: calc(50% - 12px);
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);

    .edit-object__tool-icons,
    .edit-object__add-prev-button,
    .edit-object__add-next-button {
      opacity: 1;
    }
  }
}
</style>