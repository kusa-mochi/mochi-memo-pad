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
          <label>Code</label>
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
#edit-item {
  width: 100%;

  .tab-items {
    position: relative;
    display: flex;

    .tab-item {
      position: relative;

      input {
        width: 100px;
        height: 48px;
        opacity: 0;

        &:checked + .tab-item__label {
          background-color: #169632;
          color: white;
        }
      }

      .tab-item__label {
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 48px;
        pointer-events: none;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;

        label {
        }
      }
    }
  }

  .visual-pane,
  .code-pane {
    width: 100%;

    &:hover {
      box-shadow: 0px 0px 2px 1.5px rgba(0, 0, 0, 0.4);
    }
  }

  .visual-pane {
  }

  .code-pane {
  }
}
</style>