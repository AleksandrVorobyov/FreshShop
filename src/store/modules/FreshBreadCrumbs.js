export default {
    state: {
        breadCrumbs: {
            adress: [],
        },
    },
    getters: {
        breadCrumbs(state) {
            return state.breadCrumbs;
        },
    },
    mutations: {
        breadCrumbsAdress(state, payload) {
            state.breadCrumbs.adress = new Array(
                {
                    text: "Home-Page",
                    link: "/",
                },
            )
            let paramsString = document.location.pathname;
            let parseString = paramsString.split("/");
            for (let index = 1; index < parseString.length; index++) {
                const element = parseString[index];
                let newAdress = new Object({
                    text: `${element}-Page`,
                    link: paramsString,
                });
                return state.breadCrumbs.adress.push(newAdress);
            }
        },
    },
    actions: {
        breadCrumbs({ commit, state }, products) {
            console.log(commit.breadCrumbs);
        }
    }
}