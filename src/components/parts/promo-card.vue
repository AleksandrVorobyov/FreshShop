<template lang="pug">
.promo-card
  a.promo-card__link(:href="option.link")
    img(:src="require('@/assets/img/' + option.src)", :alt="option.alt + idx")
</template>
<script>
export default {
  props: {
    option: Object,
    idx: Number,
  },
};
</script>
<style scoped lang="scss">
.header {
  position: relative;
  padding: 100px 0;
  overflow: hidden;
  z-index: 500;
  background: white;
}

.header-wrap {
  position: relative;
}

.promo-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  height: 150px;
  box-shadow: 0 0 10px #a3a3a3;
}

.promo-card__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.7;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>