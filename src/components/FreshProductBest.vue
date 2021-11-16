<template lang="pug">
section.product-best
  .container
    .product-best-wrap
      .product-best-col(v-for="content in productBest.content", :key="content")
        .product-best__desc(v-if="content.type")
          card-title(:cardTitle="content", @action="$router.push('shop')")
        .product-best__card(v-if="!content.type")
          card-product(:cardInfo="content")
</template>
<script>
import { mapGetters, mapState } from "vuex";
import cardTitle from "./parts/card-title.vue";
import cardProduct from "./parts/card-product.vue";

export default {
  computed: {
    ...mapGetters(["productBest", "shopProductCards"]),
  },
  components: {
    cardTitle,
    cardProduct,
  },
  methods: {
    bestCards() {
      if (this.productBest.content.length == 1) {
        const mainArray = [];

        for (let index = 0; index < this.shopProductCards.length; index++) {
          const element = this.shopProductCards[index];
          mainArray.push(element);
        }

        const newMainArray = mainArray.sort(function (a, b) {
          return b.rating - a.rating;
        });

        const bestFilter = newMainArray.splice(0, 3);

        bestFilter.forEach((element) => {
          this.productBest.content.push(element);
        });
      }
    },
  },
  watch: {
    shopProductCards() {
      this.bestCards();
    },
  },
  mounted() {
    this.bestCards();
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
  grid-template-columns: minmax(0, 300px);
  justify-content: center;
  gap: 20px;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 280px);
  }

  @media (min-width: 1260px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.product-best__card {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>