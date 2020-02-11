import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // title: "",
    // editingData: []
    title: "Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.",
    editingData: [
      {
        editorType: "heading1",
        data: "見出し1"
      },
      {
        editorType: "heading2",
        data: "見出し2"
      },
      {
        editorType: "heading3",
        data: "見出し3"
      },
      {
        editorType: "heading4",
        data: "見出し4"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "html",
        isVisualized: false,
        data: '<p>あああ<span style="color:blue; font-weight: bold;">いいい</span>ううう</p>'
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。"
      },
      {
        editorType: "image",
        name: "image name",
        data: ""
      },
      {
        editorType: "list",
        data: [
          {
            content: "アイテム１",
            children: []
          },
          {
            content: "アイテム２",
            children: [
              {
                content: "アイテム２－１",
                children: []
              },
              {
                content: "アイテム２－２",
                children: [
                  {
                    content: "アイテム２－２－１",
                    children: []
                  },
                  {
                    content: "アイテム２－２－２",
                    children: [
                      {
                        content: "アイテム２－２－２－１",
                        children: []
                      },
                      {
                        content: "アイテム２－２－２－２",
                        children: []
                      },
                      {
                        content: "アイテム２－２－２－３",
                        children: []
                      }
                    ]
                  },
                  {
                    content: "アイテム２－２－３",
                    children: []
                  }
                ]
              },
              {
                content: "アイテム２－３",
                children: []
              }
            ]
          },
          {
            content: "アイテム３",
            children: []
          }
        ]
      },
      {
        editorType: "number-list",
        data: [
          {
            content: "アイテム１",
            children: []
          },
          {
            content: "アイテム２",
            children: [
              {
                content: "アイテム２－１",
                children: []
              },
              {
                content: "アイテム２－２",
                children: [
                  {
                    content: "アイテム２－２－１",
                    children: []
                  },
                  {
                    content: "アイテム２－２－２",
                    children: [
                      {
                        content: "アイテム２－２－２－１",
                        children: []
                      },
                      {
                        content: "アイテム２－２－２－２",
                        children: []
                      },
                      {
                        content: "アイテム２－２－２－３",
                        children: []
                      }
                    ]
                  },
                  {
                    content: "アイテム２－２－３",
                    children: []
                  }
                ]
              },
              {
                content: "アイテム２－３",
                children: []
              }
            ]
          },
          {
            content: "アイテム３",
            children: []
          }
        ]
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      },
      {
        editorType: "paragraph",
        data: "あいうえお、かきくけこ。"
      }
    ]
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
    updateImageCaption(context, data) {
      context.commit("updateImageCaptionMutation", data);
    }
  },
  modules: {
  }
})
