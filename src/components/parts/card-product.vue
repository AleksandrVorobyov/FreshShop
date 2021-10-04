<template lang="pug">
.card-product
  .card-product__img
    img(:src="require('@/assets/img/' + cardInfo.src)", :key="cardInfo.alt")
    span(v-if="cardInfo.sale") {{ cardInfo.sale }}
  h3.card-product__title {{ cardInfo.title }}
  h4.card-product__subtitle {{ cardInfo.subtitle }}
  .card-product__desc
    h5.card-product__desc-price {{ cardInfo.price }}
    a.card-product__desc-link(:href="cardInfo.href") {{ cardInfo.btn }}
</template>
<script>
export default {
  props: {
    cardInfo: Object,
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
  background: #ffffff;
  overflow: hidden;
  z-index: 100;
  transition: all .3s linear;

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
  color: var(--clrTtl);
}

.card-product__subtitle {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  color: var(--clrText);
}

.card-product__desc {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-product__desc-price {
  font-weight: 600;
  font-size: 18px;
  color: var(--clrTtl);
  line-height: 1;
}

.card-product__desc-link {
  padding: 5px 10px;
  font-weight: 600;
  font-size: 16px;
  color: var(--clrTtl);
  line-height: 1;
  border: 2px solid var(--clrTtl);
  border-radius: 16px;
  transition: all 0.3s linear;

  &:hover {
    border: 2px solid var(--clrActivegreen);
    color: var(--clrActivegreen);
  }
}
</style>