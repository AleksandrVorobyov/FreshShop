<template lang="pug">
#home-page
  header
    fresh-header
    fresh-navigation
  main
    fresh-blog
  footer
    fresh-footer
</template>

<script>
import FreshHeader from "@/components/FreshHeader.vue";
import FreshNavigation from "@/components/FreshNavigation.vue";
import FreshBlog from "@/components/FreshBlog.vue";
import FreshFooter from "@/components/FreshFooter.vue";

export default {
  name: "Home",
  components: {
    FreshHeader,
    FreshNavigation,
    FreshBlog,
    FreshFooter,
  },
};
</script>