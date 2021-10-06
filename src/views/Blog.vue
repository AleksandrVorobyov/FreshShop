<template lang="pug">
#blog-page
  header
    fresh-header
    fresh-login
    fresh-navigation
  main
    fresh-blog-page
  footer
    fresh-footer
</template>

<script>
import FreshHeader from "@/components/FreshHeader.vue";
import FreshNavigation from "@/components/FreshNavigation.vue";
import FreshLogin from "@/components/FreshLogin.vue";
import FreshBlogPage from "@/components/FreshBlogPage.vue";
import FreshFooter from "@/components/FreshFooter.vue";

export default {
  name: "Home",
  components: {
    FreshHeader,
    FreshNavigation,
    FreshLogin,
    FreshBlogPage,
    FreshFooter,
  },
};
</script>