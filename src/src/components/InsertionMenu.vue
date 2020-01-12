<template>
  <div class="insertion-menu">
    <div v-for="(item, idx) in menuItems" v-bind:key="idx" class="menu-item">
      <icon v-bind:icon-name="item.name" size="24"></icon>
      <div class="menu-item__title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import Icon from "../components/Icon.vue";

export default {
  name: "InsertionMenu",
  data() {
    return {
      menuItems: [
        {
            name: "dot-list",
            title: "箇条書き"
        },
        {
            name: "image",
            title: "画像"
        },
        {
            name: "image",
            title: "画像"
        },
        {
            name: "image",
            title: "画像"
        },
        {
            name: "image",
            title: "画像"
        },
        {
            name: "image",
            title: "画像"
        },
        {
            name: "image",
            title: "画像"
        },
        {
            name: "image",
            title: "画像"
        },
        {
            name: "image",
            title: "画像"
        },
        {
            name: "image",
            title: "画像"
        }
      ]
    };
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