export default {
    state: {
        productBest: {
            content: [
                {
                    desc: {
                        title: "Best selling products",
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
                        btn: "More products"
                    }
                },
                {
                    card: {
                        title: "Oral B",
                        subtitle: "Space for a small product description ",
                        price: "1.48 USD",
                        sale: "-31%",
                        href: "#",
                        btn: "Buy now",
                        src: "productcards/oral-b.jpg",
                        alt: "oral-b.jpg",
                    }
                },
                {
                    card: {
                        title: "Airr Pods",
                        subtitle: "Space for a small product description ",
                        price: "70 USD",
                        sale: "-24%",
                        href: "#",
                        btn: "Buy now",
                        src: "productcards/air-pods.jpg",
                        alt: "air-pods.jpg",
                    }
                },
                {
                    card: {
                        title: "Gillete",
                        subtitle: "Space for a small product description ",
                        price: "4.34 USD",
                        sale: "-45%",
                        href: "#",
                        btn: "Buy now",
                        src: "productcards/gillete.jpg",
                        alt: "gillete.jpg",
                    }
                },
            ]
        },
    },
    getters: {
        productBest(state) {
            return state.productBest;
        },
    },
    mutations: {
        productBest(state, payload) {
            console.log(state.productBest);
        },
    },
    actions: {
        productBest({ commit, state }, products) {
            console.log(commit.productBest);
        }
    }
}