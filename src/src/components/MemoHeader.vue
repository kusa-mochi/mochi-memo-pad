<template>
  <div id="memo-header">
    <div class="memo-header__left">
      <button class="menu-button" v-on:click="Open">Open</button>
      <input id="open-file-input" type="file" />
      <button class="menu-button" v-on:click="Save">Save</button>
      <button class="menu-button" v-on:click="Export">Export</button>
      <div class="memo-title">
        <div v-if="this.$store.state.isDataSaved === false" class="memo-title__no-saved">*</div>
        <editable
          padding-top="8"
          padding-right="8"
          padding-bottom="8"
          padding-left="8"
          v-bind:is-focus-border-visible="false"
          v-bind:value="this.$store.state.title"
          v-on:input="OnTitleUpdated"
        ></editable>
        <!-- <span
          class="memo-title__main"
          v-bind:title="this.$store.state.title"
        >{{this.$store.state.title}}</span>-->
      </div>
    </div>
    <div class="memo-header__right">
      <button class="minimize-button" v-on:click="Minimize">_</button>
      <button class="maximize-button" v-on:click="Maximize">□</button>
      <button class="close-button" v-on:click="Close">x</button>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
import Editable from "./EditorComponents/Editable.vue";

export default {
  name: "MemoHeader",
  methods: {
    ParagraphHTML(dataItem) {
      return "<p>" + dataItem.data + "</p>";
    },
    HtmlHTML(dataItem) {
      return dataItem.data;
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
    ImageHTML(dataItem) {
      return (
        '<div class="img-container"><img src="' + dataItem.data + '"/></div>'
      );
    },
    download2(dataURI, filename) {
      const blob = new Blob([dataURI], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.download = filename;
      a.href = url;
      a.click();

      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, Math.max(3000, ((1000 * dataURI.length) / 1024) * 1024));
    },
    Open() {
      const input = document.createElement("input");
      input.type = "file";
      input.addEventListener("change", e => {
        var result = e.target.files[0];
        var reader = new FileReader();
        reader.addEventListener("loadend", () => {
          var title = result.name.match(/(.*)\.json$/)[1];
          this.$store.dispatch("updateTitle", title);
          this.$store.dispatch("updateEditingData", JSON.parse(reader.result));
          this.$store.dispatch("updateIsDataSavedFlag", true);
        });
        reader.readAsText(result);
      });
      input.click();
    },
    Save() {
      const saveData = JSON.stringify(this.$store.state.editingData);
      const dataUri = /*"data:text/plain," + */ encodeURIComponent(saveData);
      this.download2(saveData, this.$store.state.title + ".json");
      this.$store.dispatch("updateIsDataSavedFlag", true);
    },
    Export() {
      ipcRenderer.send("print-to-pdf", this.$store.state.title);
      return;

      // let html = "<!DOCTYPE html><html><head>";
      // html += `<style>
      //   img {
      //     width: 640px;
      //     margin: 0 auto;
      //     text-align: center;
      //   }
      //   .img-container {
      //     width: 100%;
      //     display: flex;
      //     flex-direction: column;
      //     flex-wrap: nowrap;
      //     justify-content: flex-start;
      //     align-items: center;
      //   }
      // </style>`;
      // html += "</head><body>";
      // this.$store.state.editingData.forEach(dataItem => {
      //   switch (dataItem.editorType) {
      //     case "paragraph":
      //       html += this.ParagraphHTML(dataItem);
      //       break;
      //     case "html":
      //       html += this.HtmlHTML(dataItem);
      //       break;
      //     case "list":
      //       html += this.ListHTML(dataItem);
      //       break;
      //     case "number-list":
      //       html += this.NumberedListHTML(dataItem);
      //       break;
      //     case "image":
      //       html += this.ImageHTML(dataItem);
      //       break;
      //     default:
      //       break;
      //   }
      // });
      // html += "</body></html>";

      // const a = document.createElement("a");
      // a.href = "data:text/plain," + encodeURIComponent(html);
      // a.download = this.$store.state.title + ".html";

      // a.click();
    },
    OnTitleUpdated(newString) {
      this.$store.dispatch("updateTitle", newString);
    },
    Minimize() {
      ipcRenderer.send("window-min");
    },
    Maximize() {
      ipcRenderer.send("window-max");
    },
    Close() {
      window.close();
    }
  },
  components: {
    Editable
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

@media print {
  #memo-header {
    display: none;
  }
}

#open-file-input {
  display: none;
}
</style>