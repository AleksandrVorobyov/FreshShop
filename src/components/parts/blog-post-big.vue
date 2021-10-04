<template lang="pug">
.blog-post-big
  router-link.blog-post-big__link(:to="blog.href")
  .blog-post-big__bg
    img(:src="require('@/assets/img/' + blog.src)", :alt="blog.alt")
  .blog-post-big__tag
    span {{ blog.tag }}
  .blog-post-big__body
    h3.blog-post-big__body-title {{ blog.title }}
    p.blog-post-big__body-desc {{ blog.desc }}
    .blog-post-big__body-info
      a.blog-post-big__body-info-author
        img(
          :src="require('@/assets/img/' + blog.srcAuthor)",
          :alt="blog.altAuthor"
        )
        span {{ blog.author }}
      p.blog-post-big__body-info-date {{ blog.date }}
</template>
<script>
export default {
  props: {
    blog: Object,
  },
};
</script>
<style scoped lang="scss">
.blog-post-big {
  position: relative;
  min-width: 400px;
  width: 100%;
  height: 400px;
  padding: 25px;
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  z-index: 500;
  background: var(--borderHeaderInfo);

  &:hover {
    .blog-post-big__body-desc {
      height: auto;
      opacity: 1;
      margin: 0px 0px 15px;
      transition: all 0.3s linear 0s;
    }

    .blog-post-big__bg {
      filter: grayscale(0.8) blur(2px);
    }
  }
}

.blog-post-big__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.blog-post-big__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.3s linear;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.blog-post-big__tag {
  position: absolute;
  top: 25px;
  left: 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: var(--clrActivegreen);
  padding: 5px 10px;
  background: #ffffff;
  border-radius: 12px;
}

.blog-post-big__body {
  position: absolute;
  bottom: 25px;
  transition: all 0.3s linear;
  width: calc(100% - 50px);
}

.blog-post-big__body-title {
  margin: 0px 0px 15px;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.3;
  color: #ffffff;
}

.blog-post-big__body-desc {
  font-size: 16px;
  line-height: 1.3;
  color: #ffffff;
  height: 0;
  opacity: 0;
  margin: 0;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
  transition: opacity 0s linear 0s, margin 0.1s linear 0s, height 0.1s linear 0s;
}

.blog-post-big__body-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-post-big__body-info-author {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }

  span {
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
  }
}

.blog-post-big__body-info-date {
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
}
</style>