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
  grid-template-columns: repeat(2, 125px);
  justify-content: center;
  gap: 10px;

  @media (min-width: 360px) {
    grid-template-columns: repeat(2, 150px);
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 300px);
    gap: 20px;
  }

  @media (min-width: 1260px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>