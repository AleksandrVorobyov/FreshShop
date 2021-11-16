export default {
  state: {
    productPopular: {
      content: [
        {
          title: "Popular products",
          list: [
            {
              text: "Kitchen",
              href: "#",
            },
            {
              text: "Meat and fish",
              href: "#",
            },
            {
              text: "Special nutrition",
              href: "#",
            },
            {
              text: "Pharmacy",
              href: "#",
            },
            {
              text: "Baby",
              href: "#",
            },
          ],
          btn: "More products",
          type: "desc"
        },
      ],
      pageNumber: 0,
      prevBtn: "Prev page",
      nextBtn: "Next page",
      maxComponetsImPage: 12,
    },
  },
  getters: {
    productPopular(state) {
      return state.productPopular;
    },
    productPopularPageCount(state) {
      let l = state.productPopular.content.length,
        s = state.productPopular.maxComponetsImPage;
      return Math.ceil(l / s);
    },
    productPopularPaginated(state) {
      const start = state.productPopular.pageNumber * state.productPopular.maxComponetsImPage,
        end = start + state.productPopular.maxComponetsImPage;
      return state.productPopular.content.slice(start, end);
    },
    productPopularDisabledPrev(state) {
      if (state.productPopular.pageNumber === 0) {
        return false;
      } else {
        return true
      }
    },
    productPopularDisabledNext(state) {
      if ((state.productPopular.pageNumber + 1) == Math.ceil(state.productPopular.content.length / state.productPopular.maxComponetsImPage)) {
        return false;
      } else {
        return true
      }
    },
  },
  mutations: {
    productPopularCardsPrev(state) {
      state.productPopular.pageNumber--;
    },
    productPopularCardsNext(state) {
      state.productPopular.pageNumber++;
    },
    scrollProductPopular() {
      const blockID = document.getElementById('productPopular')
      blockID.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },
    productPopularWindow(state) {
      if (window.innerWidth > 1260) {
        return state.productPopular.maxComponetsImPage = 12
      } else if (window.innerWidth > 720 && window.innerWidth < 1260) {
        return state.productPopular.maxComponetsImPage = 6
      } else {
        return state.productPopular.maxComponetsImPage = 4
      }
    }
  },
  actions: {
    productPopular({ commit, state }, products) {
      console.log(commit.productPopular);
    },
  },
};
