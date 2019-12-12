<template>
  <div id="memo-header">
    <div class="memo-header__left">
      <button class="menu-button">Open</button>
      <button class="menu-button">Save</button>
      <button class="menu-button">Export</button>
      <div class="memo-title">
        <span class="memo-title__no-saved">*</span>
        <span
          class="memo-title__main"
          title="Title is here. Title is here. Title is here. Title is here. Title is here. Title is here."
        >Title is here. Title is here. Title is here. Title is here. Title is here. Title is here.</span>
      </div>
    </div>
    <div class="memo-header__right">
      <button class="minimize-button">_</button>
      <button class="maximize-button">□</button>
      <button class="close-button">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemoHeader",
  data() {
    return {
      sampleProp: 123
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/colors";

$menuItemHeight: 40px;

@mixin header_button() {
  height: $menuItemHeight;
  padding: 0 16px;
  background-color: transparent;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;

  &:hover {
    background-color: #127a29;
  }
}

#memo-header {
  width: 100%;
  min-height: $menuItemHeight;
  background-color: $theme_color;
  position: relative;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-end;

  -webkit-app-region: drag;

  * {
    -webkit-app-region: no-drag;
  }

  .memo-header__left {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    .menu-button {
      @include header_button();
    }

    .memo-title {
      margin: auto 8px;
      max-width: 500px;
      height: $menuItemHeight;
      background-color: transparent;
      color: white;
      border: none;
      outline: none;

      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;

      &__no-saved {
        font-size: 20px;
      }

      &__main {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .memo-header__right {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: flex-start;

    .minimize-button,
    .maximize-button,
    .close-button {
      @include header_button();
      width: $menuItemHeight;
    }
  }
}
</style>