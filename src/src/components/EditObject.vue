<template>
  <div class="edit-object" tabindex="0">
    <div class="edit-object__content">
      <div class="edit-object__body">
        <paragraph-editor v-if="EditorTypeIs('paragraph')" v-bind:id="id"></paragraph-editor>
        <html-editor v-else-if="EditorTypeIs('html')" v-bind:id="id" is-visualizing="true"></html-editor>
        <list-editor v-else-if="EditorTypeIs('list')" v-bind:id="id" list-type="list"></list-editor>
        <list-editor v-else-if="EditorTypeIs('number-list')" v-bind:id="id" list-type="number-list"></list-editor>
      </div>
      <div class="edit-object__tool-icons">
        <paragraph-editor-menu v-if="EditorTypeIs('paragraph')"></paragraph-editor-menu>
        <html-editor-menu v-else-if="EditorTypeIs('html')"></html-editor-menu>
        <list-editor-menu v-else-if="EditorTypeIs('list')"></list-editor-menu>
        <list-editor-menu v-else-if="EditorTypeIs('number-list')"></list-editor-menu>
      </div>
      <div class="edit-object__add-prev-button">
        <icon icon-name="plus" size="24"></icon>
      </div>
      <div class="edit-object__add-next-button">
        <icon icon-name="plus" size="24"></icon>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import ParagraphEditor from "./EditorComponents/ParagraphEditor.vue";
import ParagraphEditorMenu from "./EditorComponents/ParagraphEditorMenu.vue";
import HtmlEditor from "./EditorComponents/HtmlEditor.vue";
import HtmlEditorMenu from "./EditorComponents/HtmlEditorMenu.vue";
import ListEditor from "./EditorComponents/ListEditor.vue";
import ListEditorMenu from "./EditorComponents/ListEditorMenu.vue";

export default {
  name: "EditObject",
  props: ["id"],
  methods: {
    EditorTypeIs(typeName) {
      return this.$store.state.editingData[this.id].editorType === typeName;
    }
  },
  components: {
    Icon,
    ParagraphEditor,
    ParagraphEditorMenu,
    HtmlEditor,
    HtmlEditorMenu,
    ListEditor,
    ListEditorMenu
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/assets";

.edit-object {
  position: relative;
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;

  &:nth-of-type(1) {
    margin-top: $tool_icon_height;
  }

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

  &:hover {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
    z-index: 10;

    .edit-object__tool-icons,
    .edit-object__add-prev-button,
    .edit-object__add-next-button {
      opacity: 1;
    }
  }
}
</style>