<template lang="pug">
section.promo-cards
  .container
    .promo-cards-wrap
      promo-card(
        v-for="(card, idx) in promoCards.cards",
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
    ...mapGetters(["promoCards"]),
  },
  components: {
    PromoCard,
  },
};
</script>
<style scoped lang="scss">
.promo-cards {
  position: relative;
  overflow: hidden;
  z-index: 500;
}

.promo-cards-wrap {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 10px;

  @media (min-width: 720px) {
    gap: 20px;
  }

  @media (min-width: 920px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media (min-width: 1260px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>