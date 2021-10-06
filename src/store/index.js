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

export default createStore({
  state: {},
  mutations: {
    sectionLoginActive() {
      const loginSection = document.getElementById("loginSection");
      loginSection.classList.toggle("login--active")
    }
  },
  actions: {},
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
    FreshLogin,
  },
});
