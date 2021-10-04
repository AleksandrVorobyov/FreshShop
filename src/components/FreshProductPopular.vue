<template lang="pug">
section.product-popular
  .container
    .product-popular-wrap
      .product-best-col(
        v-for="content in productPopular.content",
        :key="content"
      )
        .product-best__desc(v-if="content.desc")
          card-title(:cardTitle="content.desc")
        .product-best__card(v-if="content.card")
          card-product(:cardInfo="content.card")
</template>
<script>
import { mapGetters } from "vuex";
import cardTitle from "./parts/card-title.vue";
import cardProduct from "./parts/card-product.vue";
export default {
  computed: {
    ...mapGetters(["productPopular"]),
  },
  components: {
    cardTitle,
    cardProduct,
  },
};
</script>
<style scoped lang="scss">
.product-popular {
  position: relative;
  overflow: hidden;
  z-index: 500;
}

.product-popular-wrap {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 280px);
  justify-content: center;
  gap: 20px;

  @media (min-width: 1260px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>