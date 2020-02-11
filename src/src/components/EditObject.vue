<template>
  <div class="edit-object" tabindex="0">
    <div class="edit-object__content">
      <div class="edit-object__body">
        <paragraph-editor v-if="EditorTypeIs('paragraph')" v-bind:id="id"></paragraph-editor>
        <heading-editor v-else-if="EditorTypeIs('heading1')" v-bind:id="id" v-bind:level="1"></heading-editor>
        <heading-editor v-else-if="EditorTypeIs('heading2')" v-bind:id="id" v-bind:level="2"></heading-editor>
        <heading-editor v-else-if="EditorTypeIs('heading3')" v-bind:id="id" v-bind:level="3"></heading-editor>
        <heading-editor v-else-if="EditorTypeIs('heading4')" v-bind:id="id" v-bind:level="4"></heading-editor>
        <html-editor v-else-if="EditorTypeIs('html')" v-bind:id="id"></html-editor>
        <list-editor v-else-if="EditorTypeIs('list')" v-bind:id="id" list-type="list"></list-editor>
        <list-editor v-else-if="EditorTypeIs('number-list')" v-bind:id="id" list-type="number-list"></list-editor>
        <image-editor v-else-if="EditorTypeIs('image')" v-bind:id="id"></image-editor>
      </div>
      <div class="edit-object__drag-handle">
        <icon icon-name="drag-handle" size="16"></icon>
      </div>
      <div class="edit-object__tool-icons">
        <paragraph-editor-menu v-if="EditorTypeIs('paragraph')"></paragraph-editor-menu>
        <heading-editor-menu v-else-if="EditorTypeIs('heading1') || EditorTypeIs('heading2') || EditorTypeIs('heading3') || EditorTypeIs('heading4')"></heading-editor-menu>
        <html-editor-menu v-else-if="EditorTypeIs('html')" v-bind:id="id"></html-editor-menu>
        <list-editor-menu v-else-if="EditorTypeIs('list')"></list-editor-menu>
        <list-editor-menu v-else-if="EditorTypeIs('number-list')"></list-editor-menu>
        <image-editor-menu v-else-if="EditorTypeIs('image')"></image-editor-menu>
      </div>
      <div class="edit-object__remove-button" v-on:click="RemoveObject">
        <icon icon-name="garbage" size="24"></icon>
      </div>
      <div
        class="edit-object__prepend-button"
        v-on:click="isPrependMenuOpened = true"
        v-on:mouseleave="isPrependMenuOpened = false"
      >
        <icon icon-name="plus" size="24"></icon>
        <div class="prepend-menu" v-if="isPrependMenuOpened">
          <insertion-menu v-bind:id-to-insert="id" v-on:inserted="OnPrepended"></insertion-menu>
        </div>
      </div>
      <div
        class="edit-object__append-button"
        v-on:click="isAppendMenuOpened = true"
        v-on:mouseleave="isAppendMenuOpened = false"
      >
        <icon icon-name="plus" size="24"></icon>
        <div class="append-menu" v-if="isAppendMenuOpened">
          <insertion-menu v-bind:id-to-insert="id+1" v-on:inserted="OnAppended"></insertion-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import InsertionMenu from "./InsertionMenu.vue";
import ParagraphEditor from "./EditorComponents/ParagraphEditor.vue";
import ParagraphEditorMenu from "./EditorComponents/ParagraphEditorMenu.vue";
import HeadingEditor from "./EditorComponents/HeadingEditor.vue";
import HeadingEditorMenu from "./EditorComponents/HeadingEditorMenu.vue";
import HtmlEditor from "./EditorComponents/HtmlEditor.vue";
import HtmlEditorMenu from "./EditorComponents/HtmlEditorMenu.vue";
import ListEditor from "./EditorComponents/ListEditor.vue";
import ListEditorMenu from "./EditorComponents/ListEditorMenu.vue";
import ImageEditor from "./EditorComponents/ImageEditor.vue";
import ImageEditorMenu from "./EditorComponents/ImageEditorMenu.vue";

export default {
  name: "EditObject",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isPrependMenuOpened: false,
      isAppendMenuOpened: false
    };
  },
  methods: {
    EditorTypeIs(typeName) {
      return this.$store.state.editingData[this.id].editorType === typeName;
    },
    RemoveObject() {
      if (window.confirm("Is it OK to remove this paragraph ?")) {
        this.$store.dispatch("removeEditingDataAt", this.id);
      }
    },
    OnPrepended() {
      setTimeout(() => {
        this.isPrependMenuOpened = false;
      }, 0);
    },
    OnAppended() {
      setTimeout(() => {
        this.isAppendMenuOpened = false;
      }, 0);
    }
  },
  components: {
    Icon,
    InsertionMenu,
    ParagraphEditor,
    ParagraphEditorMenu,
    HeadingEditor,
    HeadingEditorMenu,
    HtmlEditor,
    HtmlEditorMenu,
    ListEditor,
    ListEditorMenu,
    ImageEditor,
    ImageEditorMenu
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

  .edit-object__drag-handle {
    position: absolute;
    top: 0;
    left: -32px;
    width: 32px;
    height: 32px;
    padding: 8px;
    opacity: 0;
  }

  .edit-object__tool-icons {
    position: absolute;
    top: -$tool_icon_height;
    left: 0;
    height: $tool_icon_height;
    opacity: 0;
  }

  .edit-object__remove-button {
    position: absolute;
    top: -$tool_icon_height;
    right: 0;
    width: $tool_icon_height;
    height: $tool_icon_height;
    padding: 3px;
    background-color: white;
    border: 1px $theme_color solid;
    opacity: 0;
  }

  .edit-object__prepend-button,
  .edit-object__append-button {
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 12px;
    opacity: 0;
    cursor: pointer;

    &:hover {
      z-index: 1000;
    }
  }

  .prepend-menu,
  .append-menu {
    position: absolute;
    left: calc(
      50% - (#{$insertion_menu_item_size} * #{$insertion_menu_columns} / 2)
    );
    width: calc(#{$insertion_menu_item_size} * #{$insertion_menu_columns});
  }

  .edit-object__prepend-button {
    top: -12px;
    left: calc(50% - 12px);
  }

  .prepend-menu {
    top: 12px;
  }

  .edit-object__append-button {
    top: calc(100% - 12px);
    left: calc(50% - 12px);
  }

  .append-menu {
    top: calc(100% - 12px);
  }

  &:hover {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
    z-index: 10;

    .edit-object__drag-handle,
    .edit-object__tool-icons,
    .edit-object__remove-button,
    .edit-object__prepend-button,
    .edit-object__append-button {
      opacity: 1;
    }
  }
}
</style>