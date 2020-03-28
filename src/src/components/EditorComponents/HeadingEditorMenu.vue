<template>
  <v-btn-toggle>
    <v-btn v-on:click="ChangeLevel(1)">h1</v-btn>
    <v-btn v-on:click="ChangeLevel(2)">h2</v-btn>
    <v-btn v-on:click="ChangeLevel(3)">h3</v-btn>
    <v-btn v-on:click="ChangeLevel(4)">h4</v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: "HeadingEditorMenu",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    SelectedIndex: {
      get() {
        return this.$store.state.editingData[this.id].level;
      },
      set(newValue) {
        this.$store.dispatch("updateHeading", {
          idx: this.id,
          level: newValue + 1
        });
      }
    }
  },
  methods: {
    ChangeLevel(levelTo) {
      this.$store.dispatch("updateHeading", {
        idx: this.id,
        level: levelTo
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/assets";
.heading-editor-menu {
  height: $tool_icon_height;
  border: 1px $theme_primary solid;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;

  button {
    width: 30px;
    height: 100%;
    // background-color: white;
    border: none;
  }
}
</style>