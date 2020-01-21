<template>
  <div
    class="image-editor"
    v-bind:class="{'drag-over': isDragOver}"
    v-on:dragover.prevent="checkDrag($event,true)"
    v-on:dragleave.prevent="checkDrag($event,false)"
    v-on:drop.prevent="uploadFile($event)"
  >
    <div class="guide-message" v-if="!isImageShowing">
      <div>Drag &amp; Drop here an image file, or push button below and select a file.</div>
    </div>
    <label class="select-image-area" for="upload_image">
      <div v-if="!isImageShowing" class="select-image-button">Select an image</div>
      <img
        v-show="isImageShowing"
        class="image-editor__img"
        v-bind:src="this.$store.state.editingData[id].data"
      />
      <input
        id="upload_image"
        type="file"
        name="img"
        v-on:change="uploadFile($event)"
        style="display:none;"
        accept="image/*"
      />
    </label>
    <div v-if="isImageShowing">{{this.$store.state.editingData[id].name}}</div>
  </div>
</template>

<script>
export default {
  name: "ImageEditor",
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data: {
    name: "",
    isDragOver: false,
    isImageShowing: false
  },
  created() {
    if(!this.$store.state.editingData[this.id].data) {
      this.isImageShowing = false;
      return;
    }

    this.isImageShowing = true;
  },
  methods: {
    uploadFile(event) {
      this.isDragOver = false;
      const files = event.target.files
        ? event.target.files
        : event.dataTransfer.files;
      const file = files[0];

      // supported image formats
      const permitType = ["image/jpeg", "image/png", "image/gif"];

      if (file && permitType.indexOf(file.type) == -1) {
        alert("You can drop only a JPEG/PNG/GIF image.");
        return;
      }

      const reader = new FileReader();
      reader.onload = event => {
        this.$store.state.editingData[this.id].data = event.target.result;
        this.isImageShowing = true;
      };
      reader.readAsDataURL(file);
      this.$store.state.editingData[this.id].name = files[0].name.match(
        /(.*)(?:\.([^.]+$))/
      )[1];
      document.getElementById("upload_image").files = files[0];
    },
    checkDrag(event, status) {
      if (status && event.dataTransfer.types == "text/plain") {
        return false;
      }
      this.isDragOver = status;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/assets";

.image-editor {
  padding: 8px 16px;
  font-size: 14px;
  text-align: left;
  outline: none;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
  }

  &.drag-over {
    background-color: red;
  }

  .guide-message {
    height: 100px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  &__img {
    width: 70%;
    max-height: 400px;
  }

  .select-image-area {
    text-align: center;
  }

  .select-image-button {
    width: auto;
    padding: 8px;
    border-radius: 4px;
    color: white;
    background-color: $theme_color;

    &:hover {
      opacity: 0.8;
    }
  }
}

.commonStyle {
  padding: 30px;
  text-align: center;
  margin: 30px;
  width: 400px;
}
</style>