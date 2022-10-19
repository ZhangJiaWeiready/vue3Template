export default {
  state: {
    num: 1,
  },
  mutations: {
    setNum: (state) => {
      state.num += 1;
    },
  },
  actions: {
    setNum: (context) => {
      context.commit("setNum");
    },
  },
};
