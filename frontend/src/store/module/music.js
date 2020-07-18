import {MusicPlayController} from '@/utils';

const state = {
  prevSong: {},
  currentSong: {},
  playList: [],
  historyList: [],
  playmode: 'repeat'
};

const mutations = {
  setCurrentSong(state, payload) {
    state.currentSong = payload;
  },
  addPlayList(state, payload) {
    console.log(state.playList);
    const isExists = state.playList.some((v) => v.id === payload.id);
    if (!isExists) {
      state.playList = [...state.playList, payload];
    }
  },
  addHistoryList(state, payload) {
    const isExists = state.historyList.some((v) => v.id === payload.id);
    if (!isExists) {
      state.historyList = [...state.historyList, payload];
    }
  },
  clearPlayList(state) {
    console.log('clean');
    state.playList = [];
    state.currentSong = Object.assign({});
  },
  toNextSong(state) {
    if (state.musicList.length === 0) return;
    // 下一首
    switch (state.playmode) {
      case 'repeat_one':
      case 'replay':
      case 'repeat': {
        // repeat
        const idx = repeat_index(state.musicList, state.currentSong);
        state.currentSong = state.musicList[idx];
        break;
      }
      case 'shuffle': {
        // shuffle
        const [prevSong, currentSong] = shuffle(state.musicList, state.currentSong);
        state.currentSong = currentSong;
        break;
      }
    }
  },

  toPrevSong(state) {
    let currentIDX = state.musicList.findIndex(
      (v) => v.id === state.currentSong.id
    );
    const idx = reverse(currentIDX, state.musicList.length)
    state.currentSong = state.musicList[idx]
  },

  autoPlayNext(state) {
    if (state.musicList.length === 0) return;
    // 下一首
    switch (state.mode) {
      case 'repeat': {
        // repeat

        const idx = state.repeat_index();
        state.currentSong = state.musicList[idx];
        break;
      }
      case 'repeat_one': {
        // repeat_one
        // stay currentSong
        if (Object.keys(state.currentSong) === 0 && state.musicLength > 0)
          state.currentSong = state.musicList[0];
        else {
          const swap = state.currentSong;
          state.currentSong = {};
          state.currentSong = swap;
        }
        break;
      }
      case 'replay': {
        // replay
        let currentIDX = state.musicList.findIndex(
          (v) => v.id === state.currentSong.id
        );
        if (currentIDX + 1 === state.musicList.length) break;
        else {
          const idx = (currentIDX + 1) % state.musicList.length;
          state.currentSong = state.musicList[idx];
        }
        break;
      }
      case 'shuffle': {
        // shuffle
        const [pre, current] = shuffle(state.musicList, state.currentSong);
        state.currentSong = current;
        break;
      }
    }

  }

};

function reverse(value, max) {
  const i = value % max;
  const r = (real_max - i) % real_max;
  return real_max - r - 1

}

const actions = {
  async startSong(ctx, songinfo) {
    const song = Object.assign({}, songinfo);
    ctx.commit('setCurrentSong', song);
  },
};

const getters = {};


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(musicList, currentSong) {
  let currentIDX = null;
  let idx = null;

  if (currentSong != null) {
    currentIDX = musicList.findIndex(
      (v) => v.id === currentSong.id
    );
  }

  while (true) {
    if (musicLength === currentIDX) break;
    idx = getRandomInt(0, musicLength);
    if (idx !== currentIDX) break;
  }
  return [currentSong, musicList[idx]]

}

function repeat_index(musicList, currentSong) {
  let currentIDX = musicList.findIndex(
    (v) => v.id === currentSong.id
  );
  return (currentIDX + 1) % musicLength;
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
