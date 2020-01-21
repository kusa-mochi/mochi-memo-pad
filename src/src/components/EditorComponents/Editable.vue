<template>
  <div contenteditable="true" v-text="text" v-on:input="update" v-on:focus="focus" v-on:blur="blur"></div>
</template>

<script>
export default {
  name: "Editable",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      text: "",
      focusIn: false
    };
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
</style>