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
        data: "image is here."
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
      state.editingData = [];
      // alert(JSON.stringify(value));
      value.forEach(item => {
        state.editingData.push(item);
      });
    },
    removeEditingDataAtMutation(state, idx) {
      state.editingData.splice(idx, 1);
    }
  },
  actions: {
    updateEditingData({ commit }, value) {
      commit('updateEditingDataMutation', value);
    },
    removeEditingDataAt({ commit }, idx) {
      commit('removeEditingDataAtMutation', idx);
    }
  },
  modules: {
  }
})
