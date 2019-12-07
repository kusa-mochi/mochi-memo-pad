<template>
  <div id="edit-item">
    <div class="tab-items">
      <div class="tab-item">
        <input type="radio" value="visual" v-model="selectedMode" />
        <div class="tab-item__label">
          <label>Visual</label>
        </div>
      </div>
      <div class="tab-item">
        <input type="radio" value="code" v-model="selectedMode" />
        <div class="tab-item__label">
          <label>&lt;/&gt;</label>
        </div>
      </div>
    </div>
    <div v-if="selectedMode === 'visual'" class="visual-pane">visual</div>
    <div v-else-if="selectedMode === 'code'" class="code-pane">Code</div>
  </div>
</template>

<script>
export default {
  name: "EditItem",
  data() {
    return {
      selectedMode: "visual"
    };
  }
};
</script>

<style lang="scss" scoped>
$tab_item_width: 80px;
$tab_item_height: 40px;

#edit-item {
  width: 100%;

  .tab-items {
    position: relative;
    display: flex;

    .tab-item {
      position: relative;
      height: $tab_item_height;

      input {
        width: $tab_item_width;
        height: 100%;
        opacity: 0;
        cursor: pointer;

        &:checked + .tab-item__label {
          background-color: #169632;
          color: white;
        }
      }

      .tab-item__label {
        position: absolute;
        top: 0;
        left: 0;
        width: $tab_item_width;
        height: $tab_item_height;
        pointer-events: none;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .visual-pane,
  .code-pane {
    width: 100%;

    &:hover {
      box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.4);
    }
  }

  .visual-pane {
  }

  .code-pane {
  }
}
</style>