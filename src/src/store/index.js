import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "",
    editingData: []
  },
  mutations: {
    updateEditingDataMutation(state, value) {
      state.editingData = value;
    },
    removeEditingDataAtMutation(state, idx) {
      state.editingData.splice(idx, 1);
    },
    updateParagraphMutation(state, data) {
      state.editingData[data.idx].data = data.string;
    },
    changeHeadingLevelMutation(state, data) {
      state.editingData[data.idx].editorType = "heading" + data.level;
    },
    updateImageCaptionMutation(state, data) {
      state.editingData[data.idx].name = data.name;
    }
  },
  actions: {
    updateEditingData(context, value) {
      context.commit('updateEditingDataMutation', value);
    },
    removeEditingDataAt(context, idx) {
      context.commit('removeEditingDataAtMutation', idx);
    },
    updateParagraph(context, data) {
      context.commit("updateParagraphMutation", data);
    },
    changeHeadingLevel(context, data) {
      context.commit("changeHeadingLevelMutation", data);
    },
    updateImageCaption(context, data) {
      context.commit("updateImageCaptionMutation", data);
    }
  },
  modules: {
  }
})
