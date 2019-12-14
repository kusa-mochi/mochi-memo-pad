<template>
  <div id="memo-header">
    <div class="memo-header__left">
      <button class="menu-button">Open</button>
      <button class="menu-button">Save</button>
      <button class="menu-button" v-on:click="Export">Export</button>
      <div class="memo-title">
        <span class="memo-title__no-saved">*</span>
        <span
          class="memo-title__main"
          v-bind:title="this.$store.state.title"
        >{{this.$store.state.title}}</span>
      </div>
    </div>
    <div class="memo-header__right">
      <button class="minimize-button">_</button>
      <button class="maximize-button">□</button>
      <button class="close-button">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemoHeader",
  methods: {
    ParagraphHTML(dataItem) {
      return "<p>" + dataItem.data + "</p>";
    },
    ListHTMLlet(collection) {
      if (collection.length === 0) return "";

      let output = "<ul>";
      collection.forEach(item => {
        output += "<li>";
        output += item.content;
        if (item.children.length > 0) {
          output += this.ListHTMLlet(item.children);
        }
        output += "</li>";
      });
      output += "</ul>";
      return output;
    },
    ListHTML(dataItem) {
      return this.ListHTMLlet(dataItem.data);
    },
    NumberedListHTMLlet(collection) {
      if (collection.length === 0) return "";

      let output = "<ol>";
      collection.forEach(item => {
        output += "<li>";
        output += item.content;
        if (item.children.length > 0) {
          output += this.ListHTMLlet(item.children);
        }
        output += "</li>";
      });
      output += "</ol>";
      return output;
    },
    NumberedListHTML(dataItem) {
      return this.NumberedListHTMLlet(dataItem.data);
    },
    Export() {
      let html = "<!DOCTYPE html><html><head>";
      html += "</head><body>";
      this.$store.state.editingData.forEach(dataItem => {
        switch (dataItem.editorType) {
          case "paragraph":
            html += this.ParagraphHTML(dataItem);
            break;
          case "list":
            html += this.ListHTML(dataItem);
            break;
          case "number-list":
            html += this.NumberedListHTML(dataItem);
            break;
          default:
            break;
        }
      });
      html += "</body></html>";

      const a = document.createElement("a");
      a.href = "data:text/plain," + encodeURIComponent(html);
      a.download = this.$store.state.title + ".html";

      a.click();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/assets";

@mixin header_button() {
  height: $header_height;
  padding: 0 16px;
  background-color: transparent;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;

  &:hover {
    background-color: #127a29;
  }
}

#memo-header {
  width: 100%;
  min-height: $header_height;
  background-color: $theme_color;
  position: relative;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-end;

  -webkit-app-region: drag;

  * {
    -webkit-app-region: no-drag;
  }

  .memo-header__left {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    .menu-button {
      @include header_button();
    }

    .memo-title {
      margin: auto 8px;
      max-width: 500px;
      height: $header_height;
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

  .memo-header__right {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: flex-start;

    .minimize-button,
    .maximize-button,
    .close-button {
      @include header_button();
      width: $header_height;
    }
  }
}
</style>