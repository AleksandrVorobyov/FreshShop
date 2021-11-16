<template lang="pug">
.card-product
  .card-product__img
    img(:src="require('@/assets/img/' + cardInfo.src)", :key="cardInfo.alt")
    span(v-if="cardInfo.sale") {{ cardInfo.sale }}
  h3.card-product__title {{ cardInfo.title }}
  h4.card-product__subtitle {{ cardInfo.subtitle }}
  .card-product__rating
    .rating.rating__set
      .rating__body
        .rating__active
        .rating__items
          input.rating__star(
            v-for="(item, idx) in 5",
            type="radio",
            :value="idx + 1",
            name="rating-star"
          )
      .rating__value {{ cardInfo.rating }}
  .card-product__desc
    h5.card-product__desc-price {{ cardInfo.price }}
    a.card-product__desc-link(:href="cardInfo.href") {{ cardInfo.btn }}
</template>
<script>
export default {
  props: {
    cardInfo: Object,
  },
  methods: {
    cardRatingInit() {
      this.$store.commit("cardRatingInit");
    },
  },
  mounted() {
    if (document.querySelectorAll(".rating").length > 0) {
      this.cardRatingInit();
    }
  },
};
</script>
<style scoped lang="scss">
.card-product {
  position: relative;
  padding: 15px;
  border: 2px solid var(--clrActivegreen);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  background: var(--bgCards);
  overflow: hidden;
  z-index: 100;
  transition: all 0.3s linear;

  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
  }
}

.card-product__img {
  position: relative;
  height: 160px;
  width: 100%;
  background: var(--clrWhite);
  margin-bottom: 10px;
  border-radius: 12px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  span {
    position: absolute;
    top: 10px;
    left: 10px;
    color: var(--clrWhite);
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 700;
    padding: 5px 10px;
    background: var(--bgPage);
    border-radius: 16px;
  }
}

.card-product__title {
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: var(--clrWhite);
}

.card-product__subtitle {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: var(--clrWhite);
}

.card-product__desc {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-product__desc-price {
  font-weight: 600;
  font-size: 18px;
  color: var(--clrWhite);
  line-height: 1;
}

.card-product__desc-link {
  padding: 5px 10px;
  font-weight: 600;
  font-size: 16px;
  color: var(--clrWhite);
  line-height: 1;
  border: 2px solid var(--clrWhite);
  border-radius: 16px;
  transition: all 0.3s linear;

  &:hover {
    border: 2px solid var(--bgCardsHover);
    color: var(--bgCardsHover);
  }
}

.card-product__rating {
  margin-bottom: 10px;
}

.rating {
  display: flex;
  align-items: flex-end;
  font-size: 40px;
  line-height: 0.75;
}

.rating__body {
  position: relative;
}

.rating__body:before {
  content: "★★★★★";
  display: block;
  color: #151515;
}

.rating__active {
  position: absolute;
  width: 0%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}

.rating__active::before {
  content: "★★★★★";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: block;
  color: #FDBC15;
}

.rating__items {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.rating__star {
  flex: 0 0 20%;
  height: 100%;
  opacity: 0;
}

.rating__value {
  font-size: 0px;
  line-height: 1;
  padding: 0 0 0 0px;
  color: #fff;
}
</style>