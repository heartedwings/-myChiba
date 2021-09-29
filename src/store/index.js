import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    boxes:[],
  },

  mutations: {
    addAction(state, box){
      state.boxes.push(box)
    },

    deleteAction(state, i){
      state.boxes.splice(i, 1)
    },

    updateAction(state, {box, index}){
      state.boxes[index] = box;
    },

  },

  actions: {
    addAction({commit}, box){
      commit ("addAction", box);
    },

    deleteAction({commit}, box){
      commit ("deleteAction", box)
    },

    updateAction({commit}, box){
      commit ("updateAction", box)
    },
  },

  getters: {
    getBoxes (state) { return state.boxes }
  }

})
