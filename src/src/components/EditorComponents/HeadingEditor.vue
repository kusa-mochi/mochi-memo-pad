<template>
  <div class="heading-editor">
    <editable
      v-bind:font-size="fontSize"
      padding-top="12"
      padding-right="8"
      padding-bottom="4"
      padding-left="0"
      v-bind:value="this.$store.state.editingData[id].data"
      v-on:input="OnStringUpdated"
    ></editable>
    <hr v-if="level === 1" class="horizontal-border" />
    <hr v-if="level === 1 || level === 2" class="horizontal-border" />
  </div>
</template>

<script>
import Editable from "./Editable.vue";

export default {
  name: "HeadingEditor",
  props: {
    id: {
      type: Number,
      required: true
    },
    level: {
      type: Number,
      required: false,
      default: 1
    }
  },
  computed: {
    fontSize() {
      switch (this.level) {
        case 1:
          return 32;
        case 2:
          return 28;
        case 3:
          return 24;
        case 4:
          return 20;
        default:
          return 32;
      }
    }
  },
  methods: {
    OnStringUpdated(newString) {
      this.$store.dispatch("updateParagraph", {
        string: newString,
        idx: this.id
      });
    }
  },
  components: {
    Editable
  }
};
</script>

<style lang="scss" scoped>
.horizontal-border {
  border: none;
  background-color: #555555;
  height: 1px;
  margin-bottom: 1px;
}
</style>