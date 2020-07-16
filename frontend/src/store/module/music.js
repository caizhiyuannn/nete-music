const state = {
  currentSong: {},
};

const mutations = {
  setCurrentSong(state, payload) {
    state.currentSong = payload;
  },
};

const actions = {
  async startSong(ctx, songinfo) {
    const song = Object.assign({}, songinfo);
    ctx.commit('setCurrentSong', song);
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
