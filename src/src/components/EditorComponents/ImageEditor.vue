<template>
  <div
    v-bind:class="{'styleA':styleA, 'styleB':styleB}"
    v-on:dragover.prevent="changeStyle($event,'ok')"
    v-on:dragleave.prevent="changeStyle($event,'no')"
    v-on:drop.prevent="uploadFile($event)"
  >
    <label for="upload_image" class="button">
      <p>Select an image</p>
      <input
        id="upload_image"
        type="file"
        name="img"
        @change="uploadFile($event)"
        style="display:none;"
        accept="image/*"
      />
    </label>

    <p>Drag &amp; Drop here an image file.</p>
    <img v-bind:src="preview" style="width:300px;height:300px;" />
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
    preview: "",
    name: "",
    styleA: true,
    styleB: false
  },
  methods: {
    uploadFile(event) {
      this.styleA = true;
      this.styleB = false;
      const files = event.target.files
        ? event.target.files
        : event.dataTransfer.files;
      const file = files[0];
      const reader = new FileReader();
      reader.onload = event => {
        this.preview = event.target.result;
      };
      reader.readAsDataURL(file);
      this.name = files[0].name;
      document.getElementById("upload_image").files = files;
    },
    changeStyle(event, flag) {
      if (flag == "ok") {
        this.styleA = false;
        this.styleB = true;
      } else {
        this.styleA = true;
        this.styleB = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.image-editor {
  padding: 8px 16px;
  font-size: 14px;
  text-align: left;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.8);
  }
}

.commonStyle {
  padding: 30px;
  text-align: center;
  margin: 30px;
  width: 400px;
}
.styleA {
  border: 3px dotted gray;
}
.styleB {
  border: 3px dotted rgba(0, 200, 0, 0.7);
}
</style>