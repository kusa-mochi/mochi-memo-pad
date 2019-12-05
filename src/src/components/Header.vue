<template>
  <div id="header">
    <button class="menu-button">開く</button>
    <button class="menu-button">保存</button>
    <div class="memo-title">
      <span class="memo-title__no-saved">*</span><span class="memo-title__main" title="レポートのタイトルカレーはうまい寿司もうまいラーメンもうまいあれもうまいこれもうまい">レポートのタイトルカレーはうまい寿司もうまいラーメンもうまいあれもうまいこれもうまい</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
#header {
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
    width: 100px;
    height: $menuItemHeight;
    background-color: transparent;
    color: white;
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