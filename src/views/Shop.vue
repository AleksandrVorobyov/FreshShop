<template lang="pug">
#shop-page
  header
    fresh-header
    fresh-login
    fresh-navigation
    fresh-bread-crumbs
  main
    fresh-shop
  footer
    fresh-footer
</template>

<script>
import FreshHeader from "@/components/FreshHeader.vue";
import FreshNavigation from "@/components/FreshNavigation.vue";
import FreshBreadCrumbs from "@/components/FreshBreadCrumbs.vue";
import FreshLogin from "@/components/FreshLogin.vue";
import FreshShop from "@/components/FreshShop.vue";
import FreshFooter from "@/components/FreshFooter.vue";

export default {
  name: "shop-page",
  components: {
    FreshHeader,
    FreshNavigation,
    FreshBreadCrumbs,
    FreshLogin,
    FreshShop,
    FreshFooter,
  },
};
</script>
