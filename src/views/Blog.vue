<template lang="pug">
#blog-page
  header
    fresh-header
    fresh-login
    fresh-form-sign
    fresh-navigation
    fresh-bread-crumbs
  main
    fresh-blog-page
  footer
    fresh-footer
</template>

<script>
import FreshHeader from "@/components/FreshHeader.vue";
import FreshNavigation from "@/components/FreshNavigation.vue";
import FreshBreadCrumbs from "@/components/FreshBreadCrumbs.vue";
import FreshLogin from "@/components/FreshLogin.vue";
import FreshFormSign from "@/components/FreshFormSign.vue";
import FreshBlogPage from "@/components/FreshBlogPage.vue";
import FreshFooter from "@/components/FreshFooter.vue";

export default {
  name: "Home",
  components: {
    FreshHeader,
    FreshNavigation,
    FreshBreadCrumbs,
    FreshLogin,
    FreshFormSign,
    FreshBlogPage,
    FreshFooter,
  },
};
</script>