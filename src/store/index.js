import { createStore } from "vuex";
import FreshHeader from "./modules/FreshHeader";
import FreshNavigation from "./modules/FreshNavigation";
import FreshPromoSlider from "./modules/FreshPromoSlider";
import FreshPromoCards from "./modules/FreshPromoCards";
import FreshProductBest from "./modules/FreshProductBest";
import promoCardsRow from "./modules/promoCardsRow";
import FreshProductPopular from "./modules/FreshProductPopular";
import FreshBlog from "./modules/FreshBlog";
import FreshFooter from "./modules/FreshFooter";
import FreshBlogPage from "./modules/FreshBlogPage";
import FreshLogin from "./modules/FreshLogin";
import FreshFormSign from "./modules/FreshFormSign";
import FreshShop from "./modules/FreshShop";
import FreshBreadCrumbs from "./modules/FreshBreadCrumbs";

export default createStore({
  state: {
    cardsMain: "Your cards!",
    formLoginOrSign: "sign",
    formUnlock: false,
  },
  getters: {
    formUnlock(state) {
      return state.formUnlock
    }
  },
  mutations: {
    scrollTop() {
      const blockID = document.getElementById('page')
      blockID.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },
    sectionLoginActive() {
      document.getElementById("loginSection").classList.add("login--active")
      if (document.getElementById("signSection").classList.contains("form-sign--active")) {
        document.getElementById("signSection").classList.remove("form-sign--active")
      }
    },
    sectionSignActive() {
      document.getElementById("signSection").classList.add("form-sign--active")
      if (document.getElementById("loginSection").classList.contains("login--active")) {
        document.getElementById("loginSection").classList.remove("login--active")
      }
    },
  },
  actions: {
    formLoginOrSignFunc({ state, commit }) {
      if (state.formUnlock) {
        if (state.formLoginOrSign === "sign") {
          commit("sectionLoginActive")
          state.formLoginOrSign = "login"
        } else {
          commit("sectionSignActive")
          state.formLoginOrSign = "sign"
        }
      } else {
        document.getElementById("signSection").classList.remove("form-sign--active")
        document.getElementById("loginSection").classList.remove("login--active")
      }
    },
    formUnlockFunc({ state, commit }) {
      state.formUnlock = !state.formUnlock;
      if (state.formUnlock) {
        if (state.formLoginOrSign === "sign") {
          commit("sectionSignActive")
        } else {
          commit("sectionLoginActive")
        }
      } else {
        document.getElementById("signSection").classList.remove("form-sign--active")
        document.getElementById("loginSection").classList.remove("login--active")
      }
    },
    clickDocument({state, dispatch}, e) {
      const headerSearchDropBody = document.getElementById(
        "header-search-drop-body"
      );

      if (
        headerSearchDropBody.classList.contains(
          "header-search__dropdown-body--active"
        )
      ) {
        if (e.target.closest(".header-search__dropdown-body--active")) {
          return true;
        } else if (e.target.className != "header-search__dropdown-head") {
          headerSearchDropBody.classList.remove(
            "header-search__dropdown-body--active"
          );
        }
      }

      const loginSection = document.getElementById("loginSection");

      if (loginSection.classList.contains("login--active")) {
        if (e.target.closest(".login--active")) {
          return true;
        } else if (e.target.className != "menu-basket__btn") {
          loginSection.classList.remove("login--active");
          dispatch("formUnlockFunc");
        }
      }

      const signSection = document.getElementById("signSection");

      if (signSection.classList.contains("form-sign--active")) {
        if (e.target.closest(".form-sign--active")) {
          return true;
        } else if (e.target.className != "menu-basket__btn") {
          signSection.classList.remove("form-sign--active");
          dispatch("formUnlockFunc");
        }
      }
    },
  },
  modules: {
    FreshHeader,
    FreshNavigation,
    FreshPromoSlider,
    FreshPromoCards,
    FreshProductBest,
    promoCardsRow,
    FreshProductPopular,
    FreshBlog,
    FreshFooter,
    FreshBlogPage,
    FreshShop,
    FreshLogin,
    FreshFormSign,
    FreshBreadCrumbs
  },
});
