export default {
  state: {
    promoCardsRow: {
      cards: [
        {
          src: "promoCardsRow/01.jpg",
          alt: "food-card-",
          link: "#",
        },
        {
          src: "promoCardsRow/02.jpg",
          alt: "food-card-",
          link: "#",
        },
        {
          src: "promoCardsRow/03.jpg",
          alt: "food-card-",
          link: "#",
        },
        {
          src: "promoCardsRow/04.jpg",
          alt: "food-card-",
          link: "#",
        },
      ],
    },
  },

  getters: {
    promoCardsRow(state) {
      return state.promoCardsRow;
    },
  },

  mutations: {
    promoCardsRow(state, payload) {
      console.log(state.promoCardsRow);
    },
  },

  actions: {
    promoCardsRow({ commit, state }, products) {
      console.log(commit.promoCardsRow);
    },
  },
};
