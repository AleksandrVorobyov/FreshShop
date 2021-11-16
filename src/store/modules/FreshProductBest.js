export default {
    state: {
        productBest: {
            content: [
                {
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
                    btn: "More products",
                    type: "desc"
                }
            ],
        },
    },
    getters: {
        productBest(state) {
            return state.productBest;
        },
    },
    mutations: {},
    actions: {
        productBest({ commit, state }, products) {
            console.log(commit.productBest);
        }
    },
}