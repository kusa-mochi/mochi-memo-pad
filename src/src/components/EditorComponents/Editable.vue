<template>
  <div
    class="editable"
    contenteditable="true"
    v-text="text"
    v-bind:style="thisStyle"
    v-on:input="update"
    v-on:focus="focus"
    v-on:blur="blur"
  ></div>
</template>

<script>
export default {
  name: "Editable",
  props: {
    value: {
      type: String,
      required: true
    },
    fontSize: {
      type: Number,
      required: false,
      default: 16
    },
    paddingTop: {
      type: Number,
      required: false,
      default: 0
    },
    paddingRight: {
      type: Number,
      required: false,
      default: 0
    },
    paddingBottom: {
      type: Number,
      required: false,
      default: 0
    },
    paddingLeft: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      focusIn: false,
      text: ""
    };
  },
  computed: {
    thisStyle() {
      return {
        fontSize: this.fontSize.toString() + "px",
        paddingTop: this.paddingTop.toString() + "px",
        paddingRight: this.paddingRight.toString() + "px",
        paddingBottom: this.paddingBottom.toString() + "px",
        paddingLeft: this.paddingLeft.toString() + "px"
      };
    }
  },
  mounted() {
    this.text = this.value;
  },
  methods: {
    input(str) {
      this.$emit("input", str);
    },
    update(event) {
      const target = event.target;
      this.input(target.innerText);
    },
    focus() {
      this.focusIn = true;
    },
    blur() {
      this.focusIn = false;
    }
  },
  watch: {
    value(newVal, oldVal) {
      if (this.focusIn) return;
      this.text = this.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.editable {
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
  }
}
</style>