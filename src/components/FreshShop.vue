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
      .shop__filter
        .shop__filter-list
          .shop__filter-list-radio
            filter-radio(:filter="shop.filter.radio")
          .shop__filter-list-check
            filter-checkbox(:filterCheck="shop.filter.checkOne")
          .shop__filter-list-check
            filter-checkbox(:filterCheck="shop.filter.checkTwo")
        .shop__filter-active
          h5.shop__filter-active-title {{ shop.active.title }}
          button(v-if="shop.active.tags != ''", v-for="item in active.tags")
            span {{ item }}
          span(v-else) {{ shop.active.null }}
      .shop__body
        aside.shop__body-sidebar
          .shop__body-sidebar-filter
            .shop__body-sidebar-filter-row
              h3.shop__body-sidebar-filter-title Categories

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
import filterRadio from "./parts/filter-radio.vue";
import filterCheckbox from "./parts/filter-checkbox.vue";
import cardProduct from "./parts/card-product.vue";
import pagination from "./parts/pagination.vue";
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
    filterRadio,
    filterCheckbox,
    cardProduct,
    pagination,
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
  font-size: 20px;
  font-weight: 700;
  color: var(--clrTtl);
}

.shop__nav-products-quantity {
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  color: var(--clrActivegreen);
  background: var(--bgBodyDrop);
}

.shop__filter {
  position: relative;
  padding: 10px 0;
  margin-bottom: 40px;
}

.shop__filter-list {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.shop__filter-active {
  display: flex;
  gap: 20px;

  & > span {
    font-size: 14px;
    color: #a9a9a9;
  }
}

.shop__body {
  display: grid;
  grid-template-columns: 270px 1fr;
  gap: 30px;
  margin-bottom: 50px;
}

.shop__body-cards {
  display: grid;
  grid-template-columns: 270px 270px 270px;
  flex-wrap: wrap;
  gap: 30px;
}

.shop__body-sidebar {
  position: relative;
  height: 100%;
}

.shop__body-sidebar-filter {
  position: sticky;
  top: 10px;
  width: 270px;
  padding: 30px 10px;
  border-radius: 20px;
  background: var(--bgDescCards);
}
</style>