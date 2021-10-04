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
.promo-card {
  position: relative;
  border-radius: 16px;
  width: 100%;
  height: 150px;
  box-shadow: 0 0 10px #a3a3a3;
  overflow: hidden;
}

.promo-card__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;

  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
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