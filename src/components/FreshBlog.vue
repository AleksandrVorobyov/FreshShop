<template lang="pug">
section.blog
  .container
    .blog-wrap
      .blog__nav
        h3.blog__nav-title {{ blog.nav.title }}
        router-link.blog__nav-link(:to="blog.nav.href") {{ blog.nav.link }}
      .blog__content
        blog-post-big(:blog="blog.bigPost")
        blog-post-mid(:blog="blog.midPost")
        .blog__content-ltl-wrap
          blog-post-ltl(
            v-for="item in blog.ltlPosts",
            :blog="item",
            :key="item"
          )
</template>
<script>
import { mapGetters } from "vuex";
import blogPostBig from "./parts/blog-post-big.vue";
import blogPostMid from "./parts/blog-post-mid.vue";
import blogPostLtl from "./parts/blog-post-ltl.vue";

export default {
  computed: {
    ...mapGetters(["blog"]),
  },
  components: {
    blogPostBig,
    blogPostMid,
    blogPostLtl,
  },
};
</script>
<style scoped lang="scss">
.blog {
  position: relative;
  overflow: hidden;
  z-index: 500;
}

.blog-wrap {
  position: relative;
}

.blog__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  margin: 0 auto 30px;

  @media (min-width: 1260px) {
    margin: 0 0 30px;
    max-width: none;
  }
}

.blog__nav-title {
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  color: var(--clrTtl);
}

.blog__nav-link {
  position: relative;
  display: block;
  padding-right: 15px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  color: var(--clrTtl);
  transition: all 0.3s linear;

  &::before {
    position: absolute;
    content: "";
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border-style: solid;
    border-width: 5px 5px 5px 5px;
    border-color: transparent transparent transparent black;
    transition: all 0.3s linear;
  }

  &:hover {
    color: var(--clrActivegreen);

    &::before {
      border-color: transparent transparent transparent var(--clrActivegreen);
    }
  }
}

.blog__content {
  display: grid;
  grid-template-areas: "blogOne" "blogThree";
  gap: 30px;

  > *:nth-child(1) {
    grid-area: blogOne;
  }
  > *:nth-child(2) {
    grid-area: blogTwo;
    display: none;

    @media (min-width: 720px) {
      display: block;
    }
  }
  > *:nth-child(3) {
    grid-area: blogThree;
  }

  @media (min-width: 720px) {
    grid-template-areas: "blogTwo blogThree" "blogOne blogOne";
    justify-content: center;
  }

  @media (min-width: 1260px) {
    grid-template-areas: "blogOne blogTwo blogThree";
    grid-template-columns: 470px 270px 370px;
    justify-content: space-between;
  }
}

.blog__content-ltl-wrap {
  display: grid;
  gap: 20px;
}
</style>