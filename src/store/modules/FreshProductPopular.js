export default {
  state: {
    productPopular: {
      content: [
        {
          desc: {
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
          },
        },
        {
          card: {
            title: "Mac Book",
            subtitle: "Space for a small product description ",
            price: "111.5 USD",
            sale: "",
            href: "#",
            btn: "Buy now",
            src: "productcards/mac-book.jpg",
            alt: "mac-book.jpg",
          },
        },
        {
          card: {
            title: "Drier",
            subtitle: "Space for a small product description ",
            price: "40 USD",
            sale: "",
            href: "#",
            btn: "Buy now",
            src: "productcards/drier.jpg",
            alt: "drier.jpg",
          },
        },
        {
          card: {
            title: "Mop",
            subtitle: "Space for a small product description ",
            price: "15.22 USD",
            sale: "-35%",
            href: "#",
            btn: "Buy now",
            src: "productcards/mop.jpg",
            alt: "mop.jpg",
          },
        },
        {
          card: {
            title: "Suit",
            subtitle: "Space for a small product description ",
            price: "34.99 USD",
            sale: "-5%",
            href: "#",
            btn: "Buy now",
            src: "productcards/suit.jpg",
            alt: "suit.jpg",
          },
        },
        {
          card: {
            title: "Nike",
            subtitle: "Space for a small product description ",
            price: "24.99 USD",
            sale: "",
            href: "#",
            btn: "Buy now",
            src: "productcards/nike.jpg",
            alt: "nike.jpg",
          },
        },
        {
          card: {
            title: "Jeens",
            subtitle: "Space for a small product description ",
            price: "13.23 USD",
            sale: "-65%",
            href: "#",
            btn: "Buy now",
            src: "productcards/jeens.jpg",
            alt: "jeens.jpg",
          },
        },
        {
          card: {
            title: "T-short",
            subtitle: "Space for a small product description ",
            price: "3 USD",
            sale: "-25%",
            href: "#",
            btn: "Buy now",
            src: "productcards/t-short.jpg",
            alt: "t-short.jpg",
          },
        },
        {
          card: {
            title: "Power Bank",
            subtitle: "Space for a small product description ",
            price: "22.22 USD",
            sale: "-15%",
            href: "#",
            btn: "Buy now",
            src: "productcards/power-bank.jpg",
            alt: "power-bank.jpg",
          },
        },
        {
          card: {
            title: "Mask",
            subtitle: "Space for a small product description ",
            price: "1 USD",
            sale: "",
            href: "#",
            btn: "Buy now",
            src: "productcards/mask.jpg",
            alt: "mask.jpg",
          },
        },
        {
          card: {
            title: "Ring",
            subtitle: "Space for a small product description ",
            price: "170 USD",
            sale: "-35%",
            href: "#",
            btn: "Buy now",
            src: "productcards/ring.jpg",
            alt: "ring.jpg",
          },
        },
        {
          card: {
            title: "Croks",
            subtitle: "Space for a small product description ",
            price: "10 USD",
            sale: "-85%",
            href: "#",
            btn: "Buy now",
            src: "productcards/croks.jpg",
            alt: "croks.jpg",
          },
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
