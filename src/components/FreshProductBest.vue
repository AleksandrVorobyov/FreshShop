<template lang="pug">
section.product-best
  .container
    .product-best-wrap
      .product-best-col(v-for="content in productBest.content")
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
    ...mapGetters(["productBest"]),
  },
  components: {
    cardTitle,
    cardProduct,
  },
};
</script>
<style scoped lang="scss">
.product-best {
  position: relative;
  overflow: hidden;
  z-index: 500;
}

.product-best-wrap {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 300px;
  gap: 20px;
}

.product-best__card {
    width: 100%;
    height: 100%;
}
</style>