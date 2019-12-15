import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "",
    editingData: []
    // title: "Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.Title is here.",
    // editingData: [
    //   {
    //     id: 1,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 2,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 3,
    //     editorType: "list",
    //     data: [
    //       {
    //         id: 1,
    //         content: "アイテム１",
    //         children: []
    //       },
    //       {
    //         id: 2,
    //         content: "アイテム２",
    //         children: [
    //           {
    //             id: 1,
    //             content: "アイテム２－１",
    //             children: []
    //           },
    //           {
    //             id: 2,
    //             content: "アイテム２－２",
    //             children: [
    //               {
    //                 id: 1,
    //                 content: "アイテム２－２－１",
    //                 children: []
    //               },
    //               {
    //                 id: 2,
    //                 content: "アイテム２－２－２",
    //                 children: [
    //                   {
    //                     id: 1,
    //                     content: "アイテム２－２－２－１",
    //                     children: []
    //                   },
    //                   {
    //                     id: 2,
    //                     content: "アイテム２－２－２－２",
    //                     children: []
    //                   },
    //                   {
    //                     id: 3,
    //                     content: "アイテム２－２－２－３",
    //                     children: []
    //                   }
    //                 ]
    //               },
    //               {
    //                 id: 4,
    //                 content: "アイテム２－２－３",
    //                 children: []
    //               }
    //             ]
    //           },
    //           {
    //             id: 4,
    //             content: "アイテム２－３",
    //             children: []
    //           }
    //         ]
    //       },
    //       {
    //         id: 4,
    //         content: "アイテム３",
    //         children: []
    //       }
    //     ]
    //   },
    //   {
    //     id: 103,
    //     editorType: "number-list",
    //     data: [
    //       {
    //         id: 1,
    //         content: "アイテム１",
    //         children: []
    //       },
    //       {
    //         id: 2,
    //         content: "アイテム２",
    //         children: [
    //           {
    //             id: 1,
    //             content: "アイテム２－１",
    //             children: []
    //           },
    //           {
    //             id: 2,
    //             content: "アイテム２－２",
    //             children: [
    //               {
    //                 id: 1,
    //                 content: "アイテム２－２－１",
    //                 children: []
    //               },
    //               {
    //                 id: 2,
    //                 content: "アイテム２－２－２",
    //                 children: [
    //                   {
    //                     id: 1,
    //                     content: "アイテム２－２－２－１",
    //                     children: []
    //                   },
    //                   {
    //                     id: 2,
    //                     content: "アイテム２－２－２－２",
    //                     children: []
    //                   },
    //                   {
    //                     id: 3,
    //                     content: "アイテム２－２－２－３",
    //                     children: []
    //                   }
    //                 ]
    //               },
    //               {
    //                 id: 4,
    //                 content: "アイテム２－２－３",
    //                 children: []
    //               }
    //             ]
    //           },
    //           {
    //             id: 4,
    //             content: "アイテム２－３",
    //             children: []
    //           }
    //         ]
    //       },
    //       {
    //         id: 4,
    //         content: "アイテム３",
    //         children: []
    //       }
    //     ]
    //   },
    //   {
    //     id: 4,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 5,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 6,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 7,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 8,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 9,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 10,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 11,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 12,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 13,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 14,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 15,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 16,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 17,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 18,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 19,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 20,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 21,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 22,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 23,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 24,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 25,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 26,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 27,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 28,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 29,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   },
    //   {
    //     id: 30,
    //     editorType: "paragraph",
    //     data: "あいうえお、かきくけこ。"
    //   }
    // ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
