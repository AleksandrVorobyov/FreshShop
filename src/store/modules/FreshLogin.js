export default {
    state: {
        login: {
            create: {
                title: "Create account",
                inputName: "Your name",
                inputNameId: "inputNameLogin",
                inputEmail: "Your email",
                inputEmailId: "inputEmailLogin",
                inputPassword: "Password",
                inputPasswordId: "inputPasswordLogin",
                inputPasswordPlace: "Passwords must be at least 6 characters",
                inputPasswordRep: "Re-enter password",
                inputPasswordRepPlace: "Repeat your password",
                inputinputPasswordRepId: "inputPasswordRepLogin",
                formDesc: "By creating an account, you agree to FreshShopCom's Conditions of Use and Privacy Notice.",
                btn: "Create",
                changeFormBtn: "Sign-In",
                changeFormText: "Already have an account?",
            },
            signin: {
                title: "Sign-In",
                inputEmail: "Your email",
                inputEmailId: "inputEmailSign",
                inputPassword: "Password",
                inputPasswordId: "inputPasswordSign",
            }
        },
    },
    getters: {
        login(state) {
            return state.login;
        },
    },
    mutations: {
        changeToSign(state) {
            console.log('fire!');
        },

        sectionLoginActive() {
            document.getElementById("loginSection").classList.toggle("login--active")
        },
    },
    actions: {
        login({ commit, state }, products) {
            console.log(commit.login);
        }
    }
}