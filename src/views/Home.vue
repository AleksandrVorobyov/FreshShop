<template lang="pug">
#home-page
  header
    fresh-header
    fresh-login
    fresh-navigation
  main
    fresh-promo-slider
    fresh-promo-cards
    fresh-product-best
    fresh-promo-cards-row
    fresh-product-popular
    fresh-blog
  footer
    fresh-footer
</template>

<script>
import FreshHeader from "@/components/FreshHeader.vue";
import FreshNavigation from "@/components/FreshNavigation.vue";
import FreshLogin from "@/components/FreshLogin.vue";
import FreshPromoSlider from "@/components/FreshPromoSlider.vue";
import FreshPromoCards from "@/components/FreshPromoCards.vue";
import FreshProductBest from "@/components/FreshProductBest.vue";
import FreshPromoCardsRow from "@/components/FreshPromoCardsRow.vue";
import FreshProductPopular from "@/components/FreshProductPopular.vue";
import FreshBlog from "@/components/FreshBlog.vue";
import FreshFooter from "@/components/FreshFooter.vue";

export default {
  name: "Home",
  components: {
    FreshHeader,
    FreshNavigation,
    FreshLogin,
    FreshPromoSlider,
    FreshPromoCards,
    FreshProductBest,
    FreshPromoCardsRow,
    FreshProductPopular,
    FreshBlog,
    FreshFooter,
  },
};
</script>
