export default {
    state: {
        formSign: {
            title: "Sign in account",
            email: {
                id: "formSignEmail",
                text: "Your email"
            },
            password: {
                text: "Password",
                id: "formSignPassword"
            },
            desc: "By creating an account, you agree to FreshShopCom's Conditions of Use and Privacy Notice.",
            btnSubmit: "Sign in",
            change: {
                desc: "Already have an account?",
                link: "Login"
            }
        },
    },
    getters: {
        formSign(state) {
            return state.formSign;
        },
    },
    mutations: {
        formSign(state, payload) {
            console.log(state.formSign);
        },
    },
    actions: {
        formSign({ commit, state }, products) {
            console.log(commit.formSign);
        }
    }
}