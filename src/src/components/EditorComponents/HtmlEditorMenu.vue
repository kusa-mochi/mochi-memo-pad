<template>
  <div class="html-editor-menu">
    <button class="switch-to-code-mode" v-on:click="Visualize(false)">&lt;/&gt;</button>
    <button class="switch-to-visual-mode" v-on:click="Visualize(true)">Aa</button>
  </div>
</template>

<script>
export default {
  name: "HtmlEditorMenu",
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  methods: {
    Visualize(vis) {
      this.$store.state.editingData[this.id].isVisualized = vis;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/assets";
.html-editor-menu {
  height: $tool_icon_height;
  border: 1px $theme_color solid;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  button {
    width: $tool_icon_height;
    height: 100%;
    background-color: white;
    border: none;
    color: $theme_color;
  }
}
</style>