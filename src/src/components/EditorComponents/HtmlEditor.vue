<template>
    <div class="html-editor">
        <div v-if="isVisualizing === true" class="visual-editor" v-html="this.$store.state.editingData[this.id].data"></div>
        <div v-else class="code-editor" contenteditable="true">{{this.$store.state.editingData[this.id].data}}</div>
    </div>
</template>

<script>
export default {
    name: 'HtmlEditor',
    props: ["id", "isVisualizing"]
}
</script>

<style lang="scss" scoped>
.html-editor {
    .visual-editor {

    }

    .code-editor {

    }
}
</style>