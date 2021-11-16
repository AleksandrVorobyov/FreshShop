<template lang="pug">
.blog-post-mid
  .blog-post-mid__img
    router-link.blog-post-mid__img-link(:to="blog.href", @click="scrollTop()")
      img(:src="require('@/assets/img/' + blog.src)", :alt="blog.alt")
  .blog-post-mid__body
    span.blog-post-mid__body-tag {{ blog.tag }}
    h3.blog-post-mid__body-title {{ blog.title }}
    .blog-post-mid__body-info
      h4.blog-post-mid__body-author {{ blog.author }}
      h4.blog-post-mid__body-date {{ blog.date }}
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
.blog-post-mid {
  position: relative;
  overflow: hidden;
  z-index: 500;
  width: 270px;
  border-radius: 12px;
  transition: background 0.3s linear;
  background: var(--bgCards);
  box-shadow: 0px 0px 5px #0003;

  &:hover {
    background: var(--bgCards);
  }

  @media (min-width: 1260px) {
    background: #fff;
  }
}

.blog-post-mid__img {
  position: relative;
  margin-bottom: 25px;
  width: 100%;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  background: var(--borderHeaderInfo);

  .blog-post-mid__img-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    img {
      transform: scale(1.1);
      opacity: 0.8;
    }
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

.blog-post-mid__body {
  padding: 0 5px 10px;
}

.blog-post-mid__body-tag {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: var(--clrActivegreen);
  padding: 5px 10px;
  background: var(--borderHeaderInfo);
  border-radius: 12px;
}

.blog-post-mid__body-title {
  display: inline-block;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 15px;
}

.blog-post-mid__body-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-post-mid__body-author,
.blog-post-mid__body-date {
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
}
</style>