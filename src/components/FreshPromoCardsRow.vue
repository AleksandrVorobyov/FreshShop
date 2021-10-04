<template lang="pug">
section.promo-cards-row
  .container
    .promo-cards-row-wrap
      promo-card(
        v-for="(card, idx) in promoCardsRow.cards",
        :key="card",
        :option="card",
        :idx="idx + 1"
      )
</template>
<script>
import { mapGetters } from "vuex";
import PromoCard from "./parts/promo-card.vue";
export default {
  computed: {
    ...mapGetters(["promoCardsRow"]),
  },
  components: {
    PromoCard,
  },
};
</script>
<style scoped lang="scss">
.promo-cards-row {
  position: relative;
  overflow: hidden;
  z-index: 500;
}

.promo-cards-row-wrap {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>