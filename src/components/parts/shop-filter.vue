<template lang="pug">
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
</template>
<script>
import { mapGetters } from "vuex";
import filterRadio from "./filter-radio.vue";
import filterCheckbox from "./filter-checkbox.vue";
export default {
  computed: {
    ...mapGetters(["shop"]),
  },
  components: {
    filterRadio,
    filterCheckbox,
  },
};
</script>
<style scoped lang="scss">
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

.shop__filter-list-check {
  position: relative;
  padding: 9px 16px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
}
</style>