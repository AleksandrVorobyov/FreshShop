import { createStore } from 'vuex'

import FreshHeader from "./modules/FreshHeader"
import FreshNavigation from "./modules/FreshNavigation"
import FreshPromoSlider from "./modules/FreshPromoSlider"
import FreshPromoCards from "./modules/FreshPromoCards"
import FreshProductBest from "./modules/FreshProductBest"

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    FreshHeader,
    FreshNavigation,
    FreshPromoSlider,
    FreshPromoCards,
    FreshProductBest,
  }
})
