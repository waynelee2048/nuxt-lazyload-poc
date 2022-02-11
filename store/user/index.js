import { getMomentTime } from "../../utils/time";

export const state = () => ({
  time: null,
});

export const mutations = {
  SET_TIME(state, value) {
    state.time = value;
  },
};

export const actions = {
  async init({ commit }) {
    const time = (await getMomentTime()).format();
    commit("SET_TIME", time);
  },
};

export const getters = {
  async momentTimeByGetter() {
    return (await getMomentTime()).format();
  },
};
