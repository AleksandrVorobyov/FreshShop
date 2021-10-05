<template lang="pug">
section.blog-page
  .container
    .blog-page-wrap
      .blog-page__nav
        h3.blog-page__nav-title {{ blogPage.title }}
      .blog-page__head
        blog-post-big(v-for="item in blogPage.bigPosts", :blog="item")
      .blog-page__body
        aside.blog-page__body-sidebar
          .blog-page__body-sidebar-col(
            v-for="item in blogPage.aside",
            :key="item.asideLink"
          )
            h3.blog-page__body-sidebar-title {{ item.title }}
            ul.blog-page__body-sidebar-list(v-if="item.asideLink")
              li.blog-page__body-sidebar-item(
                v-for="link in item.asideLink.list"
              )
                a.blog-page__body-sidebar-link(:href="link.href") 
                  span {{ link.text }}
            .blog-page__body-sidebar-subs(v-if="item.subs")
              p.blog-page__body-sidebar-subs-text {{ item.subs.text }}
              form.blog-page__body-sidebar-subs-form
                input.blog-page__body-sidebar-subs-input(
                  type="email",
                  pattern=".+@yandex\.ru",
                  size="30",
                  required,
                  :placeholder="item.subs.placeholder"
                )
                button.blog-page__body-sidebar-subs-btn {{ item.subs.btn }}
        .blog-page__body-cards
          blog-post-mid(v-for="item in 8", :blog="blogPage.midPosts")
</template>
<script>
import { mapGetters } from "vuex";
import blogPostBig from "./parts/blog-post-big.vue";
import blogPostMid from "./parts/blog-post-mid.vue";
export default {
  computed: {
    ...mapGetters(["blogPage"]),
  },
  components: {
    blogPostBig,
    blogPostMid,
  },
};
</script>
<style scoped lang="scss">
.blog-page {
  position: relative;
  padding: 50px 0;
  z-index: 500;
}

.blog-page-wrap {
  position: relative;
}

.blog-page__nav {
  margin-bottom: 40px;
}

.blog-page__nav-title {
  font-size: 28px;
  line-height: 1;
  font-weight: 600;
  color: var(--clrTtl);
}

.blog-page__head {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 60px;

  @media (min-width: 970px) {
    grid-template-columns: 1fr 1fr;
  }
}

.blog-page__body {
  display: grid;
  grid-template-columns: 270px;
  justify-content: center;
  gap: 30px;

  @media (min-width: 600px) {
    grid-template-columns: 270px 270px;
  }

  @media (min-width: 970px) {
    grid-template-columns: 270px 2fr;
  }

  @media (min-width: 1260px) {
    grid-template-columns: 270px 3fr;
  }
}

.blog-page__body-cards {
  display: grid;
  grid-template-columns: 270px;
  justify-content: center;
  gap: 30px;

  @media (min-width: 970px) {
    grid-template-columns: 270px 270px;
  }

  @media (min-width: 1260px) {
    grid-template-columns: 270px 270px 270px;
  }
}

.blog-page__body-sidebar-col + .blog-page__body-sidebar-col {
  margin-top: 30px;
}

.blog-page__body-sidebar-title {
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  color: var(--clrTtl);
}

.blog-page__body-sidebar-list {
  display: grid;
  gap: 10px;
}

.blog-page__body-sidebar-link {
  display: block;
  position: relative;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: var(--clrActivegreen);

  &::before {
    position: absolute;
    top: 50%;
    left: -10px;
    width: 3px;
    height: 100%;
    content: "";
    background: transparent;
    transition: background 0.3s linear;
    transform: translateY(-50%);
  }

  &:hover {
    &::before {
      background: var(--clrActivegreen);
    }
  }
}

.blog-page__body-sidebar-subs-text {
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--clrText);
}

.blog-page__body-sidebar-subs-form {
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid #d1d1d1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blog-page__body-sidebar-subs-input {
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid #d1d1d1;
  padding: 0 5px;
  font-size: 16px;
  font-weight: 400;
  color: var(--clrText);
}

.blog-page__body-sidebar-subs-btn {
  position: relative;
  width: 100%;
  border: 1px solid #d1d1d1;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 400;
  color: var(--clrText);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  z-index: 10;

  &:hover {
    background: transparent;
    text-shadow: none;
  }

  &:hover:before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }

  &:before {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 0px;
    width: 100%;
    z-index: -1;
    content: "";
    background: var(--bgCards);
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  }
}
</style>