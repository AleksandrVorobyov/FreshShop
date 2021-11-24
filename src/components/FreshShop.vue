<template lang="pug">
section#shop.shop
  .container
    .shop-wrap
      .shop__nav
        .shop__nav-title
          h2.shop__nav-title-text {{ shop.title }}
        .shop__nav-products
          span.shop__nav-products-quantity {{ shopProductCards.length }}
          h5.shop__nav-products-title {{ shop.products.title }}
      shop-filter
      .shop__body
        .shop__body-sidebar
          shop-sidebar
        .shop__body-cards
          .shop__body-cards-item(
            v-for="item in paginatedShopData",
            :key="item"
          )
            card-product(:cardInfo="item")
      .shop__pagination
        pagination(
          :object-info="shop",
          :pageShopCount="pageShopCount",
          :disabledShopPrev="disabledShopPrev",
          :disabledShopNext="disabledShopNext",
          @btnPrev="shopCardsPrev()",
          @btnNext="shopCardsNext()",
          @scrollToSection="scrollTopShop()"
        )
</template>
<script>
import { mapGetters } from "vuex";
import cardProduct from "./parts/card-product.vue";
import pagination from "./parts/pagination.vue";
import shopSidebar from "./parts/shop-form.vue";
import shopFilter from "./parts/shop-filter.vue";

export default {
  computed: {
    ...mapGetters([
      "shop",
      "paginatedShopData",
      "pageShopCount",
      "disabledShopPrev",
      "disabledShopNext",
      "shopProductCards",
    ]),
  },
  components: {
    cardProduct,
    pagination,
    shopSidebar,
    shopFilter,
  },
  methods: {
    shopPageWindow() {
      this.$store.commit("shopPageWindow");
    },
    shopCardsPrev() {
      this.$store.commit("shopCardsPrev");
    },
    shopCardsNext() {
      this.$store.commit("shopCardsNext");
    },
    scrollTopShop() {
      this.$store.commit("scrollTopShop");
    },
    loadProductCards() {
      this.$store.dispatch("loadProductCards");
    },
  },
  mounted() {
    this.shopPageWindow();
    if (this.shopProductCards.length === 0) {
      this.loadProductCards();
    }
  },
};
</script>
<style scoped lang="scss">
.shop {
  position: relative;
  padding: 100px 0;
  z-index: 500;
}

.shop-wrap {
  position: relative;
}

.shop__nav {
  display: flex;
  align-items: flex-end;
  padding: 10px 0;
  justify-content: space-between;
}

.shop__nav-products {
  display: flex;
  align-items: center;
  gap: 5px;
}

.shop__nav-title-text {
  font-size: 32px;
  font-weight: 700;
  color: var(--clrTtl);
}

.shop__nav-products-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--clrTtl);

  @media (min-width: 720px) {
    font-size: 20px;
  }
}

.shop__nav-products-quantity {
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  color: var(--clrActivegreen);
  background: var(--bgBodyDrop);

  @media (min-width: 720px) {
    font-size: 16px;
  }
}

.shop__body {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 50px;

  @media (min-width: 970px) {
    grid-template-columns: 270px 1fr;
  }
}

.shop__body-cards {
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (min-width: 600px) {
    grid-template-columns: 270px 270px;
  }

  @media (min-width: 1260px) {
    grid-template-columns: 270px 270px 270px;
  }
}
</style>