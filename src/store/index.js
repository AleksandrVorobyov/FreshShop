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
import FreshShop from "./modules/FreshShop";
import FreshBreadCrumbs from "./modules/FreshBreadCrumbs";

export default createStore({
  state: {
    cardsMain: "Your cards!"
  },
  mutations: {
    scrollTop() {
      const blockID = document.getElementById('page')
      blockID.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },
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
    FreshShop,
    FreshLogin,
    FreshBreadCrumbs
  },
});
