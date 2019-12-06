<template>
  <div id="memo-header">
    <button class="menu-button">Open</button>
    <button class="menu-button">Save</button>
    <button class="menu-button">Export</button>
    <div class="memo-title">
      <span class="memo-title__no-saved">*</span><span class="memo-title__main" title="Title is here. Title is here. Title is here. Title is here. Title is here. Title is here.">Title is here. Title is here. Title is here. Title is here. Title is here. Title is here.</span>
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
$headerBackgroundColor: #0e521d;
$menuItemHeight: 48px;

#memo-header {
  width: 100%;
  min-height: $menuItemHeight;
  background-color: $headerBackgroundColor;
  position: fixed;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  .menu-button {
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
</style>