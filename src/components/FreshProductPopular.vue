<template lang="pug">
section#productPopular.product-popular
  .container
    .product-popular-wrap
      .product-best-col(
        v-for="content in productPopularPaginated",
        :key="content"
      )
        .product-best__desc(v-if="content.type")
          card-title(:cardTitle="content", @action="$router.push('shop')")
        .product-best__card(v-if="!content.type")
          card-product(:cardInfo="content")
    .product-best__pagination
      .product-best__pagination-link
        h3.blog-best__pagination-link-title Page:
        span {{ productPopular.pageNumber + 1 }}
        span /
        span(v-html="productPopularPageCount")
      .blog-best__pagination-btns
        main-btn(
          :btn="productPopular.prevBtn",
          :class="'blog-best__pagination-btn ' + (productPopularDisabledPrev ? '' : 'disabled-on')",
          @action="productPopularCardsPrev(), scrollProductPopular()"
        )
        main-btn(
          :btn="productPopular.nextBtn",
          :class="'blog-best__pagination-btn ' + (productPopularDisabledNext ? '' : 'disabled-on')",
          @action="productPopularCardsNext(), scrollProductPopular()"
        )
</template>
<script>
import { mapGetters } from "vuex";
import cardTitle from "./parts/card-title.vue";
import cardProduct from "./parts/card-product.vue";
import mainBtn from "./parts/main-btn.vue";
export default {
  computed: {
    ...mapGetters([
      "productPopular",
      "productPopularPageCount",
      "productPopularPaginated",
      "productPopularDisabledNext",
      "productPopularDisabledPrev",
      "shopProductCards",
    ]),
  },
  components: {
    cardTitle,
    cardProduct,
    mainBtn,
  },
  methods: {
    productPopularCardsPrev() {
      this.$store.commit("productPopularCardsPrev");
    },
    productPopularCardsNext() {
      this.$store.commit("productPopularCardsNext");
    },
    scrollProductPopular() {
      this.$store.commit("scrollProductPopular");
    },
    productPopularWindow() {
      this.$store.commit("productPopularWindow");
    },
    popularCards() {
      if (this.productPopular.content.length == 1) {
        const mainArray = [];

        for (let index = 0; index < this.shopProductCards.length; index++) {
          const element = this.shopProductCards[index];
          mainArray.push(element);
        }

        const newMainArray = mainArray.sort(function (a, b) {
          return b.rating - a.rating;
        });

        const bestFilter = newMainArray.splice(0, 11);

        bestFilter.forEach((element) => {
          this.productPopular.content.push(element);
        });
      }
    },
  },
  created() {
    this.productPopularWindow();
  },
  watch: {
    shopProductCards() {
      this.popularCards();
    },
  },
  mounted() {
    this.popularCards();
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

.product-best__pagination {
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 20px;
  margin-top: 30px;

  @media (min-width: 1260px) {
    display: none;
  }
}

.product-best__pagination-link {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
}

.blog-best__pagination-btns {
  display: flex;
  justify-content: center;
  gap: 10px;

  .blog-best__pagination-btn {
    max-width: 150px;
  }
}
</style>