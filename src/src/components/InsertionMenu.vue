<template>
  <div class="insertion-menu">
    <div
      class="menu-item"
      v-for="(item, idx) in menuItems"
      v-bind:key="idx"
      v-on:click="InsertEditor(item.name)"
    >
      <div v-if="item.name === 'heading1'" class="menu-item__text-title">h1</div>
      <div v-else-if="item.name === 'heading2'" class="menu-item__text-title">h2</div>
      <div v-else-if="item.name === 'heading3'" class="menu-item__text-title">h3</div>
      <div v-else-if="item.name === 'heading4'" class="menu-item__text-title">h4</div>
      <div v-else-if="item.name === 'html'" class="menu-item__text-title">&lt;/&gt;</div>
      <icon v-else v-bind:icon-name="item.name" size="24"></icon>
      <div class="menu-item__title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import Icon from "../components/Icon.vue";

export default {
  name: "InsertionMenu",
  props: {
    idToInsert: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      menuItems: [
        {
          name: "paragraph",
          title: "Paragraph"
        },
        {
          name: "heading1",
          title: "heading 1"
        },
        {
          name: "heading2",
          title: "heading 2"
        },
        {
          name: "heading3",
          title: "heading 3"
        },
        {
          name: "heading4",
          title: "heading 4"
        },
        {
          name: "dot-list",
          title: "List"
        },
        {
          name: "image",
          title: "Image"
        },
        {
          name: "html",
          title: "HTML Code"
        }
      ]
    };
  },
  methods: {
    InsertEditor(iconName) {
      let dataToInsert = null;
      switch (iconName) {
        case "paragraph":
          dataToInsert = {
            editorType: "paragraph",
            data: ""
          };
          break;
        case "heading1":
          dataToInsert = {
            editorType: "heading1",
            data: ""
          };
          break;
        case "heading2":
          dataToInsert = {
            editorType: "heading2",
            data: ""
          };
          break;
        case "heading3":
          dataToInsert = {
            editorType: "heading3",
            data: ""
          };
          break;
        case "heading4":
          dataToInsert = {
            editorType: "heading4",
            data: ""
          };
          break;
        case "dot-list":
          dataToInsert = {
            editorType: "list",
            data: [
              {
                content: "",
                children: []
              }
            ]
          };
          break;
        case "image":
          dataToInsert = {
            editorType: "image",
            data: null
          };
          break;
        case "html":
          dataToInsert = {
            editorType: "html",
            isVisualized: false,
            data: ""
          };
        default:
          break;
      }

      this.$store.dispatch("insertData", {
        idx: this.idToInsert,
        data: dataToInsert
      });

      this.$emit("inserted");
    }
  },
  components: {
    Icon
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/assets";

.insertion-menu {
  max-width: calc(#{$insertion_menu_item_size} * #{$insertion_menu_columns});
  background-color: white;
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  .menu-item {
    width: $insertion_menu_item_size;
    height: $insertion_menu_item_size;
    padding-top: calc(((#{$insertion_menu_item_size} - 24px) / 2) - 12px);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    &:hover {
      background-color: rgba($theme_color, 0.1);
    }

    &__title {
      margin-top: 8px;
    }

    &__text-title {
      color: $theme_color;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: -12px;
    }
  }
}
</style>