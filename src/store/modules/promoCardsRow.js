export default {
  state: {
    promoCardsRow: {
      cards: [
        {
          src: "promoCardsRow/01.jpg",
          alt: "food-card-",
          link: "#",
          title: "Books"
        },
        {
          src: "promoCardsRow/02.jpg",
          alt: "food-card-",
          link: "#",
          title: "Candys"
        },
        {
          src: "promoCardsRow/03.jpg",
          alt: "food-card-",
          link: "#",
          title: "Scarves"
        },
        {
          src: "promoCardsRow/04.jpg",
          alt: "food-card-",
          link: "#",
          title: "Meat"
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
