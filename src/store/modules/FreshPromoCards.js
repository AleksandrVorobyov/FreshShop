export default {
    state: {
        promoCards: {
            cards: [
                {
                    src: "promoCards/01.jpg",
                    alt: "food-card-",
                    link: "#"
                },
                {
                    src: "promoCards/02.jpg",
                    alt: "food-card-",
                    link: "#"
                },
                {
                    src: "promoCards/03.jpg",
                    alt: "food-card-",
                    link: "#"
                },
                {
                    src: "promoCards/04.jpg",
                    alt: "food-card-",
                    link: "#"
                },
                {
                    src: "promoCards/05.jpg",
                    alt: "food-card-",
                    link: "#"
                },
                {
                    src: "promoCards/06.jpg",
                    alt: "food-card-",
                    link: "#"
                },
                {
                    src: "promoCards/07.jpg",
                    alt: "food-card-",
                    link: "#"
                },
                {
                    src: "promoCards/08.jpg",
                    alt: "food-card-",
                    link: "#"
                },
            ]
        },
    },
    getters: {
        promoCards(state) {
            return state.promoCards;
        },
    },
    mutations: {
        promoCards(state, payload) {
            console.log(state.promoCards);
        },
    },
    actions: {
        promoCards({ commit, state }, products) {
            console.log(commit.promoCards);
        }
    }
}