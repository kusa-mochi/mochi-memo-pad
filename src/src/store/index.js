import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "",
    editingData: [
      {
        editorType: "paragraph",
        data: ""
      }
    ],
    isDataSaved: true
  },
  mutations: {
    updateTitleMutation(state, value) {
      state.title = value;
      state.isDataSaved = false;
    },
    updateEditingDataMutation(state, value) {
      state.editingData = value;
      state.isDataSaved = false;
    },
    removeEditingDataAtMutation(state, idx) {
      state.editingData.splice(idx, 1);
      state.isDataSaved = false;
    },
    updateParagraphMutation(state, data) {
      state.editingData[data.idx].data = data.string;
      state.isDataSaved = false;
    },
    changeHeadingLevelMutation(state, data) {
      state.editingData[data.idx].editorType = "heading" + data.level;
      state.isDataSaved = false;
    },
    updateImageCaptionMutation(state, data) {
      state.editingData[data.idx].name = data.name;
      state.isDataSaved = false;
    }
  },
  actions: {
    updateTitle(context, value) {
      context.commit('updateTitleMutation', value);
    },
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
