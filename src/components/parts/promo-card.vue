<template lang="pug">
.promo-card
  a.promo-card__link(:href="option.link")
    img(:src="require('@/assets/img/' + option.src)", :alt="option.alt + idx")
  .promo-card__info
    h4.promo-card__info-title {{ option.title }}
  .promo-card__btn
    p Open Card
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

  &:hover {
    .promo-card__info {
      bottom: 30%;
    }

    .promo-card__btn {
      bottom: 0%;
    }
  }
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

.promo-card__info {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  background: rgba(255, 255, 255, 0.9);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: bottom 0.4s linear;
}

.promo-card__info-title {
  font-size: 18px;
  line-height: 1;
}

.promo-card__btn {
  position: absolute;
  bottom: -30%;
  width: 100%;
  height: 30%;
  background: var(--bgCards);
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: bottom 0.4s linear;

  p {
    font-size: 16px;
    color: var(--clrWhite);
  }
}
</style>