<template lang="pug">
.blog-post-ltl
  .blog-post__info
    h3.blog-post__info-title {{ blog.title }}
    .blog-post__info-author
      p.blog-post__info-author-text {{ blog.author }}
      p.blog-post__info-author-text {{ blog.date }}
  .blog-post__img
    router-link(:to="blog.href", @click="scrollTop()")
      img(:src="require('@/assets/img/' + blog.src)", :alt="blog.alt")
</template>
<script>
export default {
  props: {
    blog: Object,
  },
  methods: {
    scrollTop() {
      this.$store.commit("scrollTop");
    },
  },
};
</script>
<style scoped lang="scss">
.blog-post-ltl {
  position: relative;
  z-index: 500;
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 185px 95px;
  grid-template-rows: 100px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 6px;
  overflow: hidden;
  transition: background 0.3s linear;
  background: var(--bgCards);
  box-shadow: 0px 0px 5px #0003;

  &:hover {
    background: var(--bgCards);
  }

  @media (min-width: 360px) {
    gap: 24px;
  }

  @media (min-width: 720px) {
    justify-content: flex-start;
  }

  @media (min-width: 1260px) {
    background: #fff;
  }
}

.blog-post__info {
  padding-left: 5px;
}

.blog-post__info-title {
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
}

.blog-post__info-author {
  display: flex;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
  }

  P + P {
    margin-left: 20px;
  }
}

.blog-post__img {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.3s linear;
  }
}
</style>