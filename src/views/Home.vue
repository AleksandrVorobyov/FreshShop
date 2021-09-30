<template lang="pug">
#home-page
  header
    fresh-header
    fresh-navigation
  main
    fresh-promo-slider
    fresh-promo-cards
    fresh-product-best

</template>

<script>
import FreshHeader from "@/components/FreshHeader.vue";
import FreshNavigation from "@/components/FreshNavigation.vue";
import FreshPromoSlider from "@/components/FreshPromoSlider.vue";
import FreshPromoCards from "@/components/FreshPromoCards.vue";
import FreshProductBest from "@/components/FreshProductBest.vue";

export default {
  name: "Home",
  components: {
    FreshHeader,
    FreshNavigation,
    FreshPromoSlider,
    FreshPromoCards,
    FreshProductBest,
  },
};
</script>
