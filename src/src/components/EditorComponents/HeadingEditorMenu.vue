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
</style>