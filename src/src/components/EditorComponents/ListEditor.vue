<template>
  <div class="list-editor">
    <ul>
      <li
        v-for="item in this.$store.state.editingData[this.id].data"
        role="textbox"
        contenteditable="true"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListEditor",
  props: ["id"],
  computed: {
    RawHTML() {
      let output = "";
      if (this.$store.state.editingData[this.id].data.length === 0) {
        return "";
      } else {
        output += "<ul>";
      }
      this.$store.state.editingData[this.id].data.forEach(listItem => {
        output += "<li>" + listItem + "</li>";
      });
      output += "</ul>";
      return output;
    }
  }
};
</script>

<style lang="scss" scoped>
.list-editor {
  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
  }

  ul {
    padding: auto;
    list-style-type: disc;
  }

  li {
    outline: none;
  }
}
</style>