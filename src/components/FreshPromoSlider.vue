<template lang="pug">
section.promo-slider
  .container
    .promo-slider-wrap
      splide.splide__promo(:options="promoSlider.options")
        splide-slide(v-for="item in promoSlider.slides")
          a.promo-slider__link(:href="item.link")
            img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
</template>
<script>
import { mapGetters } from "vuex";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default {
  computed: {
    ...mapGetters(["promoSlider"]),
  },
  components: {
    Splide,
    SplideSlide,
  },
};
</script>
<style lang="scss">
.promo-slider {
  position: relative;
  overflow: hidden;
  z-index: 500;
}

.promo-slider-wrap {
  position: relative;

  .splide__promo {
    padding: 0;
    border-radius: 22px;
    overflow: hidden;
    background: #d1d1d1;
    box-shadow: 0px 0px 10px #d1d1d1;
  }
}

.promo-slider__link {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;

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

.splide__arrow.promoSlide-class-arrow {
  display: flex;
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: all 0.3s linear;

  svg {
    fill: rgba(0, 0, 0, 0.6);
    transition: all 0.3s linear;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.8);

    svg {
      fill: var(--clrActivegreen);
    }
  }
}

.splide__pagination__page.promoSlide-class-page {
  width: 40px;
  height: 3px;
}
</style>