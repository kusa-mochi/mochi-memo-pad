<template>
  <div class="insertion-menu">
    <div
      class="menu-item"
      v-for="(item, idx) in menuItems"
      v-bind:key="idx"
      v-on:click="InsertEditor(item.name)"
    >
      <icon v-bind:icon-name="item.name" size="24"></icon>
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
          name: "dot-list",
          title: "List"
        },
        {
          name: "image",
          title: "Image"
        }
      ]
    };
  },
  methods: {
    InsertEditor(iconName) {
      let dataToInsert = null;
      switch (iconName) {
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
        default:
          break;
      }
      this.$store.state.editingData.splice(this.idToInsert, 0, dataToInsert);

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
  }
}
</style>