export default {
    state: {
        navigation: {
            list: [
                {
                    link: "#",
                    title: "Bakery",
                },
                {
                    link: "#",
                    title: "Fruit and vegetables",
                },
                {
                    link: "#",
                    title: "Meat and fish",
                },
                {
                    link: "#",
                    title: "Drinks",
                },
                {
                    link: "#",
                    title: "Kitchen",
                },
                {
                    link: "#",
                    title: "Special nutrition",
                },
                {
                    link: "#",
                    title: "Baby",
                },
                {
                    link: "#",
                    title: "Pharmacy",
                },
            ]
        },
    },
    getters: {
        navigation(state) {
            return state.navigation;
        },
    },
    mutations: {
        navigation(state, payload) {
            console.log(state.navigation);
        },
    },
    actions: {
        navigation({ commit, state }, products) {
            console.log(commit.navigation);
        }
    }
}